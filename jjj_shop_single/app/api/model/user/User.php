<?php

namespace app\api\model\user;

use think\facade\Cache;
use app\common\exception\BaseException;
use app\common\model\user\User as UserModel;
use app\common\library\easywechat\AppWx;
use app\common\model\user\Grade as GradeModel;
use app\common\model\page\CenterMenu as CenterMenuModel;
use app\common\model\settings\Setting as SettingModel;
use app\common\model\user\BalanceLog as BalanceLogModel;
use app\common\enum\user\balanceLog\BalanceLogSceneEnum;

/**
 * 用户模型类
 */
class User extends UserModel
{
    private $token;

    /**
     * 隐藏字段
     */
    protected $hidden = [
        'open_id',
        'is_delete',
        'app_id',
        'create_time',
        'update_time'
    ];

    /**
     * 获取用户信息
     */
    public static function getUser($token)
    {
        $userId = Cache::get($token);
        return (new static())->where(['user_id' => $userId])->with(['address', 'addressDefault', 'grade'])->order('user_id desc')->find();
    }

    /**
     * 用户登录
     */
    public function login($post)
    {
        // 微信登录 获取session_key
        $app = AppWx::getApp();
        $utils = $app->getUtils();
        $session = $utils->codeToSession($post['code']);
        // 自动注册用户
        $refereeId = isset($post['referee_id']) && $post['referee_id'] ? $post['referee_id'] : 0;
        $userInfo = json_decode(htmlspecialchars_decode($post['user_info']), true);
        //邀请好友
        $invitation_id = isset($post['invitation_id']) ? $post['invitation_id'] : 0;
        $user_id = $this->register($session['openid'], $userInfo, $refereeId, $session, $invitation_id);
        // 生成token (session3rd)
        $this->token = $this->token($session['openid']);
        // 记录缓存, 7天
        Cache::tag('cache')->set($this->token, $user_id, 86400 * 7);
        return $user_id;
    }

    /**
     * 用户登录
     */
    public function bindMobile($post)
    {
        try {
            // 微信登录 获取session_key
            $app = AppWx::getApp();
            $iv = $post['iv'];
            $encrypted_data = $post['encrypted_data'];
            $utils = $app->getUtils();
            $result = $utils->decryptSession($post['session_key'], $iv, $encrypted_data);
            if (isset($result['phoneNumber']) && $result['phoneNumber']) {
                $this->save([
                    'mobile' => $result['phoneNumber']
                ]);
                return $result['phoneNumber'];
            } else {
                return false;
            }
        } catch (\Exception $e) {
            $this->error = '获取手机号失败，请重试';
            return false;
        }
    }

    /**
     * 获取token
     */
    public function getToken()
    {
        return $this->token;
    }


    /**
     * 生成用户认证的token
     */
    private function token($openid)
    {
        $app_id = self::$app_id;
        // 生成一个不会重复的随机字符串
        $guid = \getGuidV4();
        // 当前时间戳 (精确到毫秒)
        $timeStamp = microtime(true);
        // 自定义一个盐
        $salt = 'token_salt';
        return md5("{$app_id}_{$timeStamp}_{$openid}_{$guid}_{$salt}");
    }

    /**
     * 自动注册用户
     */
    private function register($open_id, $data, $refereeId, $decryptedData, $invitation_id)
    {
        //通过unionid查询用户是否存在
        $user = null;
        if (isset($decryptedData['unionid']) && !empty($decryptedData['unionid'])) {
            $data['union_id'] = $decryptedData['unionid'];
            $user = self::detailByUnionid($decryptedData['unionid']);
        }
        if (!$user) {
            // 通过open_id查询用户是否已存在
            $user = self::detail(['open_id' => $open_id]);
        }
        if ($user) {
            $model = $user;
            // 只修改union_id
            if (isset($data['union_id'])) {
                $data = [
                    'union_id' => $data['union_id'],
                ];
            } else {
                return $user['user_id'];
            }
        } else {
            $model = $this;
            if ($data['nickName'] == '微信用户') {
                // 截取openid前8位
                $data['nickName'] = substr($open_id, 0, 8);
            }
            $data['referee_id'] = $refereeId;
            $data['reg_source'] = 'wx';
            //默认等级
            $data['grade_id'] = GradeModel::getDefaultGradeId();
        }
        $this->startTrans();
        try {
            // 保存/更新用户记录
            if (!$model->save(array_merge($data, [
                'open_id' => $open_id,
                'app_id' => self::$app_id
            ]))
            ) {
                throw new BaseException(['msg' => '用户注册失败']);
            }
            if (!$user) {
                //注册之后关系绑定
                $this->saveRelation($model, $refereeId);
            }
            $this->commit();
        } catch (\Exception $e) {
            $this->rollback();
            throw new BaseException(['msg' => $e->getMessage()]);
        }
        return $model['user_id'];
    }

    /**
     *统计被邀请人数
     */
    public function getCountInv($user_id)
    {
        return $this->where('referee_id', '=', $user_id)->count('user_id');
    }

    /**
     * 签到更新用户积分
     */
    public function setPoints($user_id, $days, $sign_conf, $sign_date)
    {
        $rank = $sign_conf['ever_sign'];
        if ($sign_conf['is_increase'] == 'true') {
            if ($days >= $sign_conf['no_increase']) {
                $days = $sign_conf['no_increase'] - 1;
            }
            $rank = ($days - 1) * $sign_conf['increase_reward'] + $rank;
        }
        //是否奖励
        if (isset($sign_conf['reward_data'])) {
            $arr = array_column($sign_conf['reward_data'], 'day');
            if (in_array($days, $arr)) {
                $key = array_search($days, $arr);
                if ($sign_conf['reward_data'][$key]['is_point'] == 'true') {
                    $rank = $sign_conf['reward_data'][$key]['point'] + $rank;
                }
            }
        }
        // 新增积分变动明细
        $this->setIncPoints($rank, '用户签到：签到日期' . $sign_date);
        return $rank;
    }

    /**
     * 个人中心菜单列表
     */
    public static function getMenus($source, $user_id)
    {
        // 系统菜单
        $sys_menus = CenterMenuModel::getSysMenu();
        // 查询用户菜单
        $model = new CenterMenuModel();
        $user_menus = $model->getAll();
        $user_menu_tags = [];
        foreach ($user_menus as $menu) {
            $menu['sys_tag'] != '' && array_push($user_menu_tags, $menu['sys_tag']);
        }
        $save_data = [];
        foreach ($sys_menus as $menu) {
            if ($menu['sys_tag'] != '' && !in_array($menu['sys_tag'], $user_menu_tags)) {
                $save_data[] = array_merge($sys_menus[$menu['sys_tag']], [
                    'sort' => 100,
                    'app_id' => self::$app_id
                ]);
            }
        }
        if (count($save_data) > 0) {
            $model->saveAll($save_data);
            Cache::delete('center_menu_' . self::$app_id);
            $user_menus = $model->getAll();
        }
        $sign_conf = SettingModel::getItem('sign');
        $show_menus = [];
        foreach ($user_menus as $key => $menus) {
            if ($menus['sys_tag'] == "sign" && !$sign_conf['is_open']) {
                continue;
            }
            if (strpos($menus['icon'], 'http') !== 0) {
                $menus['icon'] = self::$base_url . $menus['icon'];
            }
            if ($menus['is_show'] == 1) {
                array_push($show_menus, $menus);
            }
        }
        return $show_menus;
    }

    /**
     * 修改会员信息
     */
    public function edit($data)
    {
        $this->startTrans();
        try {
            //完成成长任务
            if ($this['nickName'] != $data['nickName']) {
                $data['task_type'] = "base";
                $data['user_id'] = $this['user_id'];
                event('UserTask', $data);
            } elseif ($this['avatarUrl'] != $data['avatarUrl']) {
                $data['task_type'] = "image";
                $data['user_id'] = $this['user_id'];
                event('UserTask', $data);
            }
            unset($data['points']);
            $this->allowField(['avatarUrl', 'nickName'])->save($data);
            $this->commit();
            return true;
        } catch (\Exception $e) {
            $this->error = $e->getMessage();
            $this->rollback();
            return false;
        }
    }

    /**
     * 积分转换余额
     */
    public function transPoints($points)
    {
        $setting = SettingModel::getItem('points');
        $ratio = $setting['discount']['discount_ratio'];
        if (!$setting['is_trans_balance']) {
            $this->error = "暂未开启积分转换余额";
            return false;
        }
        if ($points <= 0) {
            $this->error = "转换积分不能小于0";
            return false;
        }
        if ($this['points'] < $points) {
            $this->error = "不能大于当前积分";
            return false;
        }
        $this->startTrans();
        try {
            $balance = round($ratio * $points, 2);
            //添加积分记录
            $describe = "积分转换余额";
            $this->setIncPoints(-$points, $describe);
            //添加余额记录
            $balance > 0 && BalanceLogModel::add(BalanceLogSceneEnum::POINTS, [
                'user_id' => $this['user_id'],
                'money' => $balance,
                'app_id' => self::$app_id
            ], '');
            $this->save(['balance' => $this['balance'] + $balance]);
            $this->commit();
            return true;
        } catch (\Exception $e) {
            $this->error = $e->getMessage();
            $this->rollback();
            return false;
        }
    }

    /**
     * 资金冻结
     */
    public function freezeMoney($money)
    {
        return $this->save([
            'balance' => $this['balance'] - $money,
            'freeze_money' => $this['freeze_money'] + $money,
        ]);
    }

    public function setDelete($user)
    {
        return $user->save([
            'is_delete' => 1
        ]);
    }
}
