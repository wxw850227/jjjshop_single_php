<?php

namespace app\api\controller\product;

use app\api\model\plus\coupon\Coupon as CouponModel;
use app\api\model\product\Product as ProductModel;
use app\api\model\order\Cart as CartModel;
use app\api\controller\Controller;
use app\api\model\settings\Setting as SettingModel;
use app\api\service\common\RecommendService;
use app\common\library\helper;
use app\common\service\qrcode\ProductService;
use app\common\model\user\Favorite as FavoriteModel;

/**
 * 商品控制器
 */
class Product extends Controller
{
    /**
     * 商品列表
     */
    public function lists()
    {
        // 整理请求的参数
        $param = array_merge($this->postData(), [
            'product_status' => 10
        ]);

        // 获取列表数据
        $model = new ProductModel;
        $list = $model->getList($param, $this->getUser(false));
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 推荐产品
     */
    public function recommendProduct($location)
    {
        $recommend = SettingModel::getItem('recommend');
        $model = new ProductModel;
        $is_recommend = RecommendService::checkRecommend($recommend, $location);
        $list = [];
        if ($is_recommend) {
            $list = $model->getRecommendProduct($recommend);
        }
        return $this->renderSuccess('', compact('list', 'recommend', 'is_recommend'));
    }

    /**
     * 获取商品详情
     */
    public function detail($product_id, $url = '')
    {
        // 用户信息
        $user = $this->getUser(false);
        // 商品详情
        $model = new ProductModel;
        $product = $model->getDetails($product_id, $user);
        if ($product === false) {
            return $this->renderError($model->getError() ?: '商品信息不存在');
        }
        // 多规格商品sku信息
        $specData = $product['spec_type'] == 20 ? $model->getManySpecData($product['spec_rel'], $product['sku']) : null;
        // 优惠信息
        $discount = [
            // 赠送积分
            'give_points' => $this->getGivePoints($product),
            // 商品优惠券
            'product_coupon' => $this->getCouponList($product),
        ];
        //是否显示优惠
        $show_discount = false;
        if ($discount['give_points'] > 0
            || count($discount['product_coupon']) > 0) {
            $show_discount = true;
        }
        return $this->renderSuccess('', [
            // 商品详情
            'detail' => $product,
            // 优惠信息
            'discount' => $discount,
            // 显示优惠
            'show_discount' => $show_discount,
            // 购物车商品总数量
            'cart_total_num' => $user ? (new CartModel())->getProductNum($user) : 0,
            // 多规格商品sku信息
            'specData' => $specData,
            // 是否收藏
            'is_fav' => $user ? FavoriteModel::isFav($product_id, $user['user_id']) : false,
            // 微信公众号分享参数
            'share' => $this->getShareParams($url, $product['product_name'], $product['product_name'], '/pages/product/detail/detail', $product['image'][0]['file_path']),
        ]);
    }

    /**
     * 赠送积分
     */
    private function getGivePoints($product)
    {
        if ($product['is_points_gift'] == 0) {
            return 0;
        }
        // 积分设置
        $setting = SettingModel::getItem('points');
        // 条件：后台开启开启购物送积分
        if (!$setting['is_shopping_gift']) {
            return 0;
        }
        // 积分赠送比例
        $ratio = $setting['gift_ratio'] / 100;
        // 计算赠送积分数量
        return helper::bcmul($product['product_price'], $ratio, 0);
    }

    /**
     * 获取商品可用优惠券
     */
    private function getCouponList($product)
    {
        // 可领取优惠券
        $model = new CouponModel;
        $user = $this->getUser(false);
        $couponList = $model->getList($user, null, true);
        foreach ($couponList as $item) {
            // 限制商品
            if ($item['apply_range'] == 20) {
                $product_ids = explode(',', $item['product_ids']);
                if (!in_array($product['product_id'], $product_ids)) {
                    unset($item);
                }
            } // 限制分类
            else if ($item['apply_range'] == 30) {
                $category_ids = explode(',', $item['category_ids']);
                if (!in_array($product['category_id'], $category_ids)) {
                    unset($item);
                }
            }
        }
        return $couponList;
    }

    /**
     * 预估产品
     */
    public function previewProduct()
    {
        // 整理请求的参数
        $param = array_merge($this->postData(), [
            'type' => 'preview',
        ]);
        // 获取列表数据
        $model = new ProductModel;
        $list = $model->getList($param, $this->getUser(false));
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 生成商品海报
     */
    public function poster($product_id, $source)
    {
        // 商品详情
        $detail = ProductModel::detail($product_id);
        $Qrcode = new ProductService($detail, $this->getUser(false), $source);
        return $this->renderSuccess('', [
            'qrcode' => $Qrcode->getImage(),
        ]);
    }
}