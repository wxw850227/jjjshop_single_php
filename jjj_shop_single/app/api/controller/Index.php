<?php

namespace app\api\controller;

use app\api\model\page\Page as AppPage;
use app\api\model\settings\Setting as SettingModel;
use app\common\enum\settings\SettingEnum;
use app\common\model\settings\Setting;

/**
 * 页面控制器
 */
class Index extends Controller
{
    /**
     * 首页
     */
    public function index($page_id = null, $url = '')
    {
        // 页面元素
        $data = AppPage::getPageData($this->getUser(false), $page_id);
        $data['setting'] = array(
            'collection' => SettingModel::getItem('collection'),
            'officia' => SettingModel::getItem('officia'),
            'homepush' => SettingModel::getItem('homepush')
        );
        // 扫一扫参数
        $data['signPackage'] = $this->getScanParams($url)['signPackage'];
        // 微信公众号分享参数
        $data['share'] = $this->getShareParams($url, $data['page']['params']['share_title'], $data['page']['params']['share_title'], '/pages/index/index', $data['page']['params']['share_img']);
        return $this->renderSuccess('', $data);
    }

    /**
     * 首页
     */
    public function diy($page_id = null, $url = '')
    {
        // 页面元素
        $data = AppPage::getPageData($this->getUser(false), $page_id);
        // 微信公众号分享参数
        $data['share'] = $this->getShareParams($url, $data['page']['params']['share_title'], $data['page']['params']['share_title'], '/pages/diy-page/diy-page', $data['page']['params']['share_img']);
        return $this->renderSuccess('', $data);
    }

    // 公众号客服
    public function mpService()
    {
        $mp_service = SettingModel::getItem('mp_service');
        return $this->renderSuccess('', compact('mp_service'));
    }

    public function nav()
    {
        $vars = SettingModel::getItem(SettingEnum::NAV);
        $theme = SettingModel::getItem(SettingEnum::THEME);
        $points_name = SettingModel::getPointsName();
        return $this->renderSuccess('', compact('vars', 'theme', 'points_name'));
    }

    public function policy(){
        $config = Setting::getItem('store');
        return $this->renderSuccess('',[
            'service' => $config['policy']['service'],
            'privacy' => $config['policy']['privacy'],
        ]);
    }
}
