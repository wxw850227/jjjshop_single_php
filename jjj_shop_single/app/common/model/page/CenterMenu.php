<?php

namespace app\common\model\page;

use app\common\model\BaseModel;
use think\facade\Cache;

/**
 * 个人中心菜单
 */
class CenterMenu extends BaseModel
{
    //表名
    protected $name = 'center_menu';
    //主键字段名
    protected $pk = 'menu_id';

    /**
     * 详情
     */
    public static function detail($menu_id)
    {
        return (new static())->find($menu_id);
    }
    /**
     * 查询所有
     */
    public static function getAll(){
        $model = new static();
        if (!Cache::get('center_menu_' . $model::$app_id)) {
            $list = $model->order(['sort' => 'asc'])->select();
            if(count($list) == 0){
                $sys_menus = $model->getSysMenu();
                $save_data = [];
                foreach($sys_menus as $menu){
                    $save_data[] = array_merge($sys_menus[$menu['sys_tag']], [
                        'app_id' => self::$app_id
                    ]);
                }
                $model->saveAll($save_data);
                $list = $model->order(['sort' => 'asc'])->select();
            }
            Cache::tag('cache')->set('center_menu_' . $model::$app_id, $list);
        }
        return Cache::get('center_menu_' . $model::$app_id);
    }

    /**
     * 系统菜单
     */
    public static function getSysMenu(){
      return [
          'address' => [
              'sys_tag' => 'address',
              'name' => '收货地址',
              'path' => '/pages/user/address/address',
              'icon' => 'image/center_menu/address.png'
          ],
          'coupon' => [
              'sys_tag' => 'coupon',
              'name' => '领券中心',
              'path' => '/pages/coupon/coupon',
              'icon' => 'image/center_menu/coupon.png'
          ],
          'my_coupon' => [
              'sys_tag' => 'my_coupon',
              'name' => '我的优惠券',
              'path' => '/pages/user/my-coupon/my-coupon',
              'icon' => 'image/center_menu/my_coupon.png'
          ],
          'my_fav' => [
              'sys_tag' => 'my_fav',
              'name' => '我的收藏',
              'path' => '/pages/user/favorite/favorite',
              'icon' =>  'image/center_menu/my_fav.png'
          ],
          'sign' => [
              'sys_tag' => 'sign',
              'name' => '签到',
              'path' => '/pages/plus/signin/signin',
              'icon' =>  'image/center_menu/sign.png'
          ],
          'evaluate' => [
              'sys_tag' => 'evaluate',
              'name' => '我的评价',
              'path' => '/pages/user/evaluate/list',
              'icon' => 'image/center_menu/evaluate.png'
          ],
          'settings' => [
              'sys_tag' => 'settings',
              'name' => '设置',
              'path' => '/pages/user/set/set',
              'icon' => 'image/center_menu/settings.png'
          ],
      ];
    }
}
