<?php

namespace app\shop\controller\setting;

use app\shop\controller\Controller;
use app\shop\model\settings\Setting as SettingModel;
use app\common\enum\settings\DeliveryTypeEnum;

/**
 * 商城设置控制器
 */
class Store extends Controller
{
    /**
     * 商城设置
     */
    public function index()
    {
        if ($this->request->isGet()) {
            return $this->fetchData();
        }
        $model = new SettingModel;
        $data = $this->request->param();
        $arr = [
            'name' => $data['name'],
            'delivery_type' => $data['checkedCities'],
            'kuaidi100' => ['customer' => $data['customer'], 'key' => $data['key']],
            'is_get_log' => $data['is_get_log'],
            'policy' => ['service' => $data['service'], 'privacy' => $data['privacy']],
            'is_send_wx' => $data['is_send_wx']
        ];
        if ($model->edit('store', $arr)) {
            return $this->renderSuccess('操作成功');
        }
        return $this->renderError($model->getError() ?: '操作失败');
    }

    /**
     * 获取商城配置
     */
    public function fetchData()
    {
        $vars['values'] = SettingModel::getItem('store');
        $all_type = DeliveryTypeEnum::data();
        return $this->renderSuccess('', compact('vars', 'all_type'));
    }

}
