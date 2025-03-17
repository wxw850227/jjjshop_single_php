<?php

namespace app\api\model\product;

use app\common\model\product\Product as ProductModel;
use app\common\service\product\BaseProductService;
use app\common\library\helper;

/**
 * 商品模型
 */
class Product extends ProductModel
{
    /**
     * 隐藏字段
     */
    protected $hidden = [
        'spec_rel',
        'delivery',
        'sales_initial',
        'sales_actual',
        'is_delete',
        'app_id',
        'create_time',
        'update_time'
    ];

    /**
     * 商品详情：HTML实体转换回普通字符
     */
    public function getContentAttr($value)
    {
        return htmlspecialchars_decode($value);
    }

    /**
     * 获取商品列表
     */
    public function getList($param, $userInfo = false)
    {
        // 获取商品列表
        $data = parent::getList($param);

        // 隐藏api属性
        !$data->isEmpty() && $data->hidden(['category', 'content', 'image', 'sku']);
        // 整理列表数据并返回
        return $this->setProductListDataFromApi($data, true, ['userInfo' => $userInfo]);
    }

    /**
     * 商品详情
     */
    public static function detail($product_id)
    {
        // 商品详情
        $detail = parent::detail($product_id);
        // 多规格商品sku信息
        $detail['product_multi_spec'] = BaseProductService::getSpecData($detail);
        return $detail;
    }

    /**
     * 获取商品详情页面
     */
    public function getDetails($productId, $userInfo = false)
    {
        // 获取商品详情
        $detail = $this->with([
            'category',
            'image' => ['file'],
            'contentImage' => ['file'],
            'sku' => ['image'],
            'spec_rel' => ['spec'],
            'delivery' => ['rule'],
            'commentData' => function ($query) {
                $query->with('user')->where(['is_delete' => 0, 'status' => 1])->limit(2);
            },
            'video',
            'poster'
        ])->withCount(['commentData' => function ($query) {
            $query->where(['is_delete' => 0, 'status' => 1]);
        }])
            ->where('product_id', '=', $productId)
            ->find();
        // 判断商品的状态
        if (empty($detail) || $detail['is_delete'] || $detail['product_status']['value'] != 10) {
            $this->error = '很抱歉，商品信息不存在或已下架';
            return false;
        }
        // 更新访问数据
        $this->where('product_id', '=', $detail['product_id'])->inc('view_times')->update();
        // 设置商品展示的数据
        $detail = $this->setProductListDataFromApi($detail, false, ['userInfo' => $userInfo]);
        // 多规格商品sku信息
        $detail['product_multi_spec'] = BaseProductService::getSpecData($detail);
        return $detail;
    }

    /**
     * 根据商品id集获取商品列表
     */
    public function getListByIdsFromApi($productIds, $userInfo = false)
    {
        // 获取商品列表
        $data = parent::getListByIds($productIds, 10);
        // 整理列表数据并返回
        return $this->setProductListDataFromApi($data, true, ['userInfo' => $userInfo]);
    }


    /**
     * 根据商品id集获取商品列表
     */
    public function getListByCatIdsFromApi($categoryIds, $userInfo = false)
    {
        $category_ids = [];
        // 查找1级分类下的二级分类
        if (!empty($categoryIds['first'])) {
            $categorys = (new Category())->where('parent_id', 'in', $categoryIds['first'])->select();
            foreach ($categorys as $item) {
                array_push($category_ids, $item['category_id']);
            }
        }
        foreach ($categoryIds['second'] as $item) {
            array_push($category_ids, $item);
        }
        // 获取商品列表
        $data = parent::getListByCatIds($category_ids, 10);
        // 整理列表数据并返回
        return $this->setProductListDataFromApi($data, true, ['userInfo' => $userInfo]);
    }

    /**
     * 设置商品展示的数据 api模块
     */
    private function setProductListDataFromApi($data, $isMultiple, $param)
    {
        return parent::setProductListData($data, $isMultiple, function ($product) use ($param) {
            // 计算并设置商品会员价
            $this->setProductGradeMoney($param['userInfo'], $product);
        });
    }

    /**
     * 设置商品的会员价
     */
    public function setProductGradeMoney($user, &$product)
    {
        //获取商品最大价格
        $productPrice = helper::getArrayColumn($product['sku'], 'product_price');
        rsort($productPrice);
        $product['product_max_price'] = isset($productPrice[0]) ? $productPrice[0] : 0;
        // 会员等级状态
        $gradeStatus = (!empty($user) && $user['grade_id'] > 0 && !empty($user['grade']))
            && (!$user['grade']['is_delete']);
        // 判断商品是否参与会员折扣
        if (!$gradeStatus || !$product['is_enable_grade']) {
            $product['is_user_grade'] = false;
            return;
        }
        $alone_grade_type = 10;
        // 商品单独设置了会员折扣
        if ($product['is_alone_grade'] && isset($product['alone_grade_equity'][$user['grade_id']])) {
            if ($product['alone_grade_type'] == 10) {
                // 折扣比例
                $discountRatio = helper::bcdiv($product['alone_grade_equity'][$user['grade_id']], 100);
            } else {
                $alone_grade_type = 20;
                $discountRatio = helper::bcdiv($product['alone_grade_equity'][$user['grade_id']], $product['product_price'], 2);
            }
        } else {
            // 折扣比例
            $discountRatio = helper::bcdiv($user['grade']['equity'], 100);
        }
        if ($discountRatio < 1) {
            // 标记参与会员折扣
            $product['is_user_grade'] = true;
            // 会员折扣后的商品总金额
            if ($alone_grade_type == 20) {
                $product['product_price'] = $product['alone_grade_equity'][$user['grade_id']];
            } else {
                $product['product_price'] = helper::number2(helper::bcmul($product['product_price'], $discountRatio), true);
            }

            // 会员折扣价
            foreach ($product['sku'] as &$skuItem) {
                if ($alone_grade_type == 20) {
                    $skuItem['product_price'] = $product['alone_grade_equity'][$user['grade_id']];
                } else {
                    $skuItem['product_price'] = helper::number2(helper::bcmul($skuItem['product_price'], $discountRatio), true);
                }
            }
        } else {
            $product['is_user_grade'] = false;
        }
        //获取商品最大价格
        $productPrice = helper::getArrayColumn($product['sku'], 'product_price');
        rsort($productPrice);
        $product['product_max_price'] = isset($productPrice[0]) ? $productPrice[0] : 0;
    }

    /**
     * 为你推荐
     */
    public function getRecommendProduct($params)
    {
        $model = $this;
        // 手动
        if ($params['choice'] == 1) {
            $product_id = array_column($params['product'], 'product_id');
            $model = $model->where('product_id', 'IN', $product_id);
            $list = $model->with(['category', 'image.file'])
                ->where('product_status', '=', 10)
                ->where('is_delete', '=', 0)
                ->select();
            // 整理列表数据并返回
            return $this->setProductListData($list, true);
        } else {
            if ($params['type'] == 10) {
                $sort = ['sales_actual' => 'desc'];
            } else if ($params['type'] == 20) {
                $sort = ['create_time' => 'desc'];
            } else if ($params['type'] == 30) {
                $sort = ['view_times' => 'desc'];
            }
            $list = $model->field(['*', '(sales_initial + sales_actual) as product_sales'])->with(['category', 'image.file'])
                ->where('product_status', '=', 10)
                ->where('is_delete', '=', 0)
                ->limit($params['num'])
                ->order($sort)
                ->select();
            return $this->setProductListData($list, true);
        }
    }

    /**
     * 查询指定商品
     * @param $value
     */
    public function getProduct($value)
    {
        $list = $this->where('product_id', 'in', $value)->with(['image.file', 'sku', 'spec_rel' => ['spec']])->select();
        foreach ($list as $key => &$value) {
            // 多规格商品sku信息
            $value['product_multi_spec'] = BaseProductService::getSpecData($value);
        }
        return $list;
    }

    /**
     * 查询指定商品
     * @param $value
     */
    public function getProductList($value)
    {
        $product = json_decode($value, true);
        $product_id = array_column($product, 'product_id');
        $list = $this->where('product_id', 'in', $product_id)->with(['image.file', 'sku', 'spec_rel' => ['spec']])->select();
        foreach ($list as $key => &$value) {
            $product_sku_id = 0;
            foreach ($product as $kk => $vv) {
                if ($vv['product_id'] == $value['product_id']) {
                    $product_sku_id = $vv['product_sku_id'];
                }
            }
            // 商品sku信息
            $value['product_sku'] = ProductModel::getProductSku($value, $product_sku_id);
        }
        return $list;
    }

}