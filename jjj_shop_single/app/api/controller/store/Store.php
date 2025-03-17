<?php

namespace app\api\controller\store;

use app\api\controller\Controller;
use app\api\model\store\Store as StoreModel;


/**
 * 门店列表
 */
class Store extends Controller
{
    /**
     * 门店列表
     */
    public function lists($longitude = '', $latitude = '')
    {
        $model = new StoreModel;
        $list = $model->getList(true, $longitude, $latitude);
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 门店详情
     */
    public function detail($store_id)
    {
        $detail = StoreModel::detail($store_id);
        return $this->renderSuccess('', compact('detail'));
    }

}