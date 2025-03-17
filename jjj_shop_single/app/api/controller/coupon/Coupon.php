<?php

namespace app\api\controller\coupon;

use app\api\controller\Controller;
use app\api\model\plus\coupon\Coupon as CouponModel;
use app\api\model\product\Product as ProductModel;

/**
 * 优惠券中心
 */
class Coupon extends Controller
{
    /**
     * 优惠券列表
     */
    public function lists()
    {
        $model = new CouponModel;
        $list = $model->getWaitList($this->getUser(false));
        return $this->renderSuccess('', compact('list'));
    }

    public function detail($coupon_id)
    {
        $model = CouponModel::detail($coupon_id);
        if ($model['apply_range'] == 20) {
            $product_ids = explode(',', $model['product_ids']);
            $model['product'] = (new ProductModel())->getListByIdsFromApi($product_ids, $this->getUser(false));
        }
        $product_list = [];
        if ($model['apply_range'] == 30) {
            $category_ids = json_decode($model['category_ids'], true);
            $product_list = (new ProductModel())->getListByCatIdsFromApi($category_ids, $this->getUser(false));
        }
        return $this->renderSuccess('', compact('model', 'product_list'));
    }
}