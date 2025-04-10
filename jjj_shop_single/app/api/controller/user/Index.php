<?php

namespace app\api\controller\user;

use app\api\controller\Controller;
use app\api\model\plus\agent\Setting;
use app\api\model\user\User as UserModel;
use app\api\model\order\Order as OrderModel;
use app\api\model\settings\Setting as SettingModel;
use app\api\model\plus\coupon\UserCoupon as UserCouponModel;
use app\common\enum\settings\GetPhoneTypeEnum;
use think\facade\Cache;
use app\api\model\plus\invitationgift\InvitationGift as InvitationGiftModel;

/**
 * 个人中心主页
 */
class Index extends Controller
{
    /**
     * 获取当前用户信息
     */
    public function detail($source = 'wx')
    {
        // 当前用户信息
        $user = $this->getUser();
        $coupon_model = new UserCouponModel();
        $coupon = $coupon_model->getCount($user['user_id']);
        // 订单总数
        $model = new OrderModel;

        return $this->renderSuccess('', [
            'coupon' => $coupon,
            'userInfo' => $user,
            'orderCount' => [
                'payment' => $model->getCount($user, 'payment'),
                'delivery' => $model->getCount($user, 'delivery'),
                'received' => $model->getCount($user, 'received'),
                'comment' => $model->getCount($user, 'comment'),
            ],
            'setting' => [
                'points_name' => SettingModel::getPointsName(),
            ],
            'sign' => SettingModel::getItem('sign'),
            'getPhone' => $this->isGetPhone(),
            'menus' => UserModel::getMenus($source, $user['user_id']),   // 个人中心菜单列表
        ]);
    }

    /**
     * 当前用户设置
     */
    public function setting()
    {
        // 当前用户信息
        $user = $this->getUser();

        return $this->renderSuccess('', [
            'userInfo' => $user
        ]);
    }

    private function isGetPhone()
    {
        $user = $this->getUser();
        if ($user['mobile'] != '') {
            return false;
        }
        $settings = SettingModel::getItem('getPhone');
        if (in_array(GetPhoneTypeEnum::USER, $settings['area_type'])) {
            // 缓存时间
            $key = 'get_phone_' . $user['user_id'];
            if (!$data = Cache::get($key)) {
                $settings['send_day'] > 0 && Cache::set($key, '1', 86400 * $settings['send_day']);
                return true;
            }
        }
        return false;
    }
}