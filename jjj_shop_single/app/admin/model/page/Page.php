<?php

namespace app\admin\model\page;

use app\common\model\page\Page as PageModel;

/**
 * 微信小程序diy页面模型
 */
class Page extends PageModel
{
    /**
     * 新增小程序首页diy默认设置
     */
    public function insertDefault($app_id)
    {
        return $this->save([
            'page_type' => 10,
            'page_name' => '首页',
            'page_data' => [
                'page' => [
                    'type' => 'page',
                    'name' => '页面设置',
                    'params' => [
                        'name' => '页面标题',
                        'title' => '页面标题',
                        'share_title' => '分享标题',
                        'share_img' => self::$base_url .'image/diy/logo.png',
                        'toplogo'=> self::$base_url .'image/diy/logo_top.png'
                    ],
                    'style' => [
                        'titleTextColor' => 'black',
                        'titleBackgroundColor' => '#ffffff',
                    ],
                    'category' => [
                        'open' => 0,
                        'color' => '#000000',
                    ]
                ],
                'items' => [
                    [
                        'type' => 'banner',
                        'name' => '图片轮播',
                        'style' => [
                            'btnColor' => '#ffffff',
                            'btnShape' => 'round',
                        ],
                        'params' => [
                            'interval' => '2800'
                        ],
                        'data' => [
                            [
                                'imgUrl' => self::$base_url . 'assets/store/img/diy/banner/01.png',
                                'linkUrl' => '',
                            ],
                            [
                                'imgUrl' => self::$base_url . 'assets/store/img/diy/banner/01.png',
                                'linkUrl' => '',
                            ],
                        ],
                    ]
                ],
            ],
            'app_id' => $app_id
        ]);
    }

}
