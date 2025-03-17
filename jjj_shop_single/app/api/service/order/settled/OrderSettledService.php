<?php

namespace app\api\service\order\settled;

use app\api\model\order\Order as OrderModel;
use app\api\model\order\OrderProduct;
use app\api\model\order\OrderAddress as OrderAddress;
use app\api\model\plus\coupon\UserCoupon as UserCouponModel;
use app\api\model\product\Category;
use app\common\enum\order\OrderPayTypeEnum;
use app\common\enum\order\OrderSourceEnum;
use app\common\enum\order\OrderTypeEnum;
use app\common\model\settings\Setting as SettingModel;
use app\api\service\points\PointsDeductService;
use app\api\service\coupon\ProductDeductService;
use app\common\model\store\Store as StoreModel;
use app\api\service\user\UserService;
use app\common\enum\settings\DeliveryTypeEnum;
use app\common\library\helper;
use app\common\service\delivery\ExpressService;
use app\common\service\BaseService;
use app\common\service\product\factory\ProductFactory;

/**
 * 订单结算服务基类
 */
abstract class OrderSettledService extends BaseService
{
    /* $model OrderModel 订单模型 */
    public $model;

    // 当前应用id
    protected $app_id;

    protected $user;

    // 订单结算商品列表
    protected $productList = [];

    protected $params;
    /**
     * 订单结算的规则
     * 主商品默认规则
     */
    protected $settledRule = [
        'is_coupon' => true,        // 优惠券抵扣
        'is_point' => true,        // 是否使用积分抵扣，系统设置
        'force_points' => false,     // 强制使用积分，积分兑换
        'is_user_grade' => true,     // 会员等级折扣
        'is_agent' => true,     // 商品是否开启分销,最终还是支付成功后判断分销活动是否开启
    ];

    /**
     * 订单结算数据
     */
    protected $orderData = [];
    /**
     * 订单来源
     */
    protected $orderSource;

    /**
     * 构造函数
     */
    public function __construct($user, $productList, $params)
    {

        $this->model = new OrderModel;
        $this->app_id = OrderModel::$app_id;
        $this->user = $user;
        $this->productList = $productList;
        $this->params = $params;
    }

    /**
     * 订单确认-结算台
     */
    public function settlement()
    {
        // 整理订单数据
        $this->orderData = $this->getOrderData();
        // 验证商品状态, 是否允许购买
        $this->validateProductList();
        // 订单商品总数量
        $orderTotalNum = helper::getArrayColumnSum($this->productList, 'total_num');
        // 设置订单商品会员折扣价
        $this->setOrderGrade();
        // 设置订单商品总金额(不含优惠折扣)
        $this->setOrderTotalPrice();
        // 当前用户可用的优惠券列表
        $couponList = $this->getUserCouponList($this->orderData['order_total_price']);
        foreach ($couponList as $i => $coupon) {
            if (!$this->checkCouponCanUse($coupon)) {
                unset($couponList[$i]);
            }
        }
        // 计算优惠券抵扣
        $this->setOrderCouponMoney($couponList, $this->params['coupon_id']);
        // 计算订单商品的实际付款金额
        $this->setOrderProductPayPrice();
        // 计算可用积分抵扣
        $this->setOrderPoints();
        // 处理配送方式
        if ($this->orderData['delivery'] == DeliveryTypeEnum::EXPRESS) {
            $this->setOrderExpress();
        } elseif ($this->orderData['delivery'] == DeliveryTypeEnum::EXTRACT) {
            $this->params['store_id'] > 0 && $this->orderData['extract_store'] = StoreModel::detail($this->params['store_id']);
        }

        // 计算订单最终金额
        $this->setOrderPayPrice();
        // 计算订单积分赠送数量
        $this->setOrderPointsBonus();
        $product_list = array_values($this->productList);
        // 返回订单数据
        return array_merge([
            'product_list' => $product_list,   // 商品信息
            'order_total_num' => $orderTotalNum,        // 商品总数量
            'coupon_list' => $couponList
        ], $this->orderData, $this->settledRule);
    }

    /**
     * 验证订单商品的状态
     * @return bool
     */
    abstract function validateProductList();

    /**
     * 创建新订单
     */
    public function createOrder($order)
    {
        // 表单验证
        if (!$this->validateOrderForm($order)) {
            return false;
        }
        // 创建新的订单
        $status = $this->model->transaction(function () use ($order) {
            // 创建订单事件
            return $this->createOrderEvent($order);
        });
        return $status;
    }

    /**
     * 设置订单的商品总金额(不含优惠折扣)
     */
    private function setOrderTotalPrice()
    {
        // 订单商品的总金额(不含优惠券折扣)
        $this->orderData['order_total_price'] = helper::number2(helper::getArrayColumnSum($this->productList, 'total_price'));
    }

    /**
     * 当前用户可用的优惠券列表
     */
    private function getUserCouponList($orderTotalPrice)
    {
        // 是否开启优惠券折扣
        if (!$this->settledRule['is_coupon']) {
            return [];
        }
        return UserCouponModel::getUserCouponList($this->user['user_id'], $orderTotalPrice);
    }

    /**
     * 设置订单优惠券抵扣信息
     */
    private function setOrderCouponMoney($couponList, $couponId)
    {
        // 设置默认数据：订单信息
        helper::setDataAttribute($this->orderData, [
            'coupon_id' => 0,       // 用户优惠券id
            'coupon_money' => 0,    // 优惠券抵扣金额
        ], false);
        // 设置默认数据：订单商品列表
        helper::setDataAttribute($this->productList, [
            'coupon_money' => 0,    // 优惠券抵扣金额
        ], true);
        // 是否开启优惠券折扣
        if (!$this->settledRule['is_coupon']) {
            return false;
        }
        // 如果没有可用的优惠券，直接返回
        if ($couponId <= 0 || empty($couponList)) {
            return true;
        }
        // 获取优惠券信息
        $couponInfo = helper::getArrayItemByColumn($couponList, 'user_coupon_id', $couponId);
        if ($couponInfo == false) {
            $this->error = '未找到优惠券信息';
            return false;
        }
        // 计算订单商品优惠券抵扣金额
        $productListTemp = helper::getArrayColumns($this->productList, ['total_price']);
        $CouponMoney = new ProductDeductService;
        $completed = $CouponMoney->setProductCouponMoney($productListTemp, $couponInfo['reduced_price']);
        // 分配订单商品优惠券抵扣金额
        foreach ($this->productList as $key => &$product) {
            $product['coupon_money'] = $completed[$key]['coupon_money'] / 100;
        }
        // 记录订单优惠券信息
        $this->orderData['coupon_id'] = $couponId;
        $this->orderData['coupon_money'] = helper::number2($CouponMoney->getActualReducedMoney() / 100);
        return true;
    }

    /**
     * 计算订单商品的实际付款金额
     */
    private function setOrderProductPayPrice()
    {
        // 商品总价 - 优惠抵扣
        foreach ($this->productList as &$product) {
            // 减去商品满减
            $value = $product['total_price'];
            // 减去优惠券抵扣金额
            $value = helper::bcsub($value, $product['coupon_money']);
            $product['total_pay_price'] = helper::number2($value);
        }
        return true;
    }

    /**
     * 整理订单数据(结算台初始化)
     */
    private function getOrderData()
    {
        // 系统支持的配送方式 (后台设置)
        $deliveryType = SettingModel::getItem('store')['delivery_type'];
        sort($deliveryType);
        // 积分设置
        $pointsSetting = SettingModel::getItem('points');
        if ($this->productList[0]['is_virtual'] == 1) {
            $delivery = 30;
        } else {
            $delivery = $this->params['delivery'] > 0 ? $this->params['delivery'] : $deliveryType[0];
        }
        return [
            // 配送类型
            'delivery' => $delivery,
            // 默认地址
            'address' => $this->user['address_default'],
            // 是否存在收货地址
            'exist_address' => $this->user['address_id'] > 0,
            // 配送费用
            'express_price' => 0.00,
            // 当前用户收货城市是否存在配送规则中
            'intra_region' => true,
            // 自提门店信息
            'extract_store' => [],
            // 是否允许使用积分抵扣
            'is_allow_points' => true,
            // 是否使用积分抵扣
            'is_use_points' => $this->params['is_use_points'],
            // 支付方式
            'pay_type' => isset($this->params['pay_type']) ? $this->params['pay_type'] : OrderPayTypeEnum::WECHAT,
            // 系统设置
            'setting' => [
                'delivery' => $deliveryType,     // 支持的配送方式
                'points_name' => $pointsSetting['points_name'],      // 积分名称
                'points_describe' => $pointsSetting['describe'],     // 积分说明
            ],
            // 记忆的自提联系方式
            'last_extract' => UserService::getLastExtract($this->user['user_id']),
            'deliverySetting' => $deliveryType,
        ];
    }

    /**
     * 订单配送-快递配送
     */
    private function setOrderExpress()
    {
        // 设置默认数据：配送费用
        helper::setDataAttribute($this->productList, [
            'express_price' => 0,
        ], true);
        // 当前用户收货城市id
        $cityId = $this->user['address_default'] ? $this->user['address_default']['city_id'] : null;

        // 初始化配送服务类
        $ExpressService = new ExpressService(
            $this->app_id,
            $cityId,
            $this->productList,
            OrderTypeEnum::MASTER
        );

        // 获取不支持当前城市配送的商品
        $notInRuleProduct = $ExpressService->getNotInRuleProduct();

        // 验证商品是否在配送范围
        $this->orderData['intra_region'] = ($notInRuleProduct === false);

        if (!$this->orderData['intra_region']) {
            $notInRuleProductName = $notInRuleProduct['product_name'];
            $this->error = "很抱歉，您的收货地址不在商品 [{$notInRuleProductName}] 的配送范围内";
            return false;
        } else {
            // 计算配送金额
            $ExpressService->setExpressPrice();
        }

        // 订单总运费金额
        $this->orderData['express_price'] = helper::number2($ExpressService->getTotalFreight());
        return true;
    }

    /**
     * 设置订单的实际支付金额(含配送费)
     */
    private function setOrderPayPrice()
    {
        // 订单金额(含优惠折扣)
        $this->orderData['order_price'] = helper::number2(helper::getArrayColumnSum($this->productList, 'total_pay_price'));
        // 订单实付款金额(订单金额 + 运费)
        $this->orderData['order_pay_price'] = helper::number2(helper::bcadd($this->orderData['order_price'], $this->orderData['express_price']));
        //支付金额小于0处理
        $this->orderData['order_pay_price'] = $this->orderData['order_pay_price'] > 0 ? $this->orderData['order_pay_price'] : 0;
    }

    /**
     * 表单验证 (订单提交)
     */
    private function validateOrderForm($order)
    {
        if ($order['delivery'] == DeliveryTypeEnum::EXPRESS) {
            if (empty($order['address'])) {
                $this->error = '请先选择收货地址';
                return false;
            }
        }
        if ($order['delivery'] == DeliveryTypeEnum::EXTRACT) {
            if (empty($order['extract_store'])) {
                $this->error = '请先选择自提门店';
                return false;
            }
            if (empty($this->params['linkman']) || empty($this->params['phone'])) {
                $this->error = '请填写联系人和电话';
                return false;
            }
        }
        //如果是积分兑换，判断用户积分是否足够
        if ($this->settledRule['force_points']) {
            if ($this->user['points'] < $order['points_num']) {
                $this->error = '用户积分不足，无法使用积分兑换';
                return false;
            }
        }
        return true;
    }

    /**
     * 创建订单事件
     */
    private function createOrderEvent($order)
    {
        // 新增订单记录
        $status = $this->add($order, $this->params['remark']);

        if ($order['delivery'] == DeliveryTypeEnum::EXPRESS) {
            // 记录收货地址
            $this->saveOrderAddress($order['address'], $status);
        } elseif ($order['delivery'] == DeliveryTypeEnum::EXTRACT) {
            // 记录自提信息
            $this->saveOrderExtract($this->params['linkman'], $this->params['phone']);
        }

        // 保存订单商品信息
        $this->saveOrderProduct($order, $status);
        // 更新商品库存 (针对下单减库存的商品)
        ProductFactory::getFactory($this->orderSource['source'])->updateProductStock($order['product_list']);

        // 设置优惠券使用状态
        UserCouponModel::setIsUse($this->params['coupon_id']);

        // 积分兑换扣除用户积分
        if ($order['force_points']) {
            $describe = "用户积分兑换消费：{$this->model['order_no']}";
            $this->user->setIncPoints(-$order['points_num'], $describe, false);
        } else {
            // 积分抵扣情况下扣除用户积分
            if ($order['is_allow_points'] && $order['is_use_points'] && $order['points_num'] > 0) {
                $describe = "用户消费：{$this->model['order_no']}";
                $this->user->setIncPoints(-$order['points_num'], $describe, false);
            }
        }
        return $status;
    }

    /**
     * 新增订单记录
     */
    private function add($order, $remark = '')
    {
        // 订单数据
        $data = [
            'user_id' => $this->user['user_id'],
            'order_no' => $this->model->orderNo(),
            'trade_no' => $this->model->orderNo(),
            'total_price' => $order['order_total_price'],
            'order_price' => $order['order_price'],
            'coupon_id' => $order['coupon_id'],
            'coupon_money' => $order['coupon_money'],
            'points_money' => $order['is_use_points'] ? $order['points_money'] : 0,
            'points_num' => $order['is_use_points'] ? $order['points_num'] : 0,
            'pay_price' => $order['order_pay_price'],
            'delivery_type' => $order['delivery'],
            'pay_type' => $order['pay_type'],
            'buyer_remark' => trim($remark),
            'order_source' => $this->orderSource['source'],
            'activity_id' => isset($this->orderSource['activity_id']) ? $this->orderSource['activity_id'] : 0,
            'points_bonus' => isset($order['points_bonus']) ? $order['points_bonus'] : 0,
            'is_agent' => $this->settledRule['is_agent'] ? 1 : 0,
            'app_id' => $this->app_id,
            'virtual_auto' => $order['product_list'][0]['virtual_auto']
        ];
        if ($order['delivery'] == DeliveryTypeEnum::EXPRESS) {
            $data['express_price'] = $order['express_price'];
        } elseif ($order['delivery'] == DeliveryTypeEnum::EXTRACT) {
            $data['extract_store_id'] = $order['extract_store']['store_id'];
        }
        // 结束支付时间
        //随主订单配置
        $config = SettingModel::getItem('trade');
        $closeDays = $config['order']['close_days'];
        $closeDays != 0 && $data['pay_end_time'] = time() + ((int)$closeDays * 86400);
        // 保存订单记录
        $this->model->save($data);
        return $this->model['order_id'];
    }

    /**
     * 记录收货地址
     */
    private function saveOrderAddress($address, $order_id)
    {
        $model = new OrderAddress();
        if ($address['region_id'] == 0 && !empty($address['district'])) {
            $address['detail'] = $address['district'] . ' ' . $address['detail'];
        }
        return $model->save([
            'order_id' => $order_id,
            'user_id' => $this->user['user_id'],
            'app_id' => $this->app_id,
            'name' => $address['name'],
            'phone' => $address['phone'],
            'province_id' => $address['province_id'],
            'city_id' => $address['city_id'],
            'region_id' => $address['region_id'],
            'detail' => $address['detail'],
        ]);
    }

    /**
     * 保存上门自提联系人
     */
    private function saveOrderExtract($linkman, $phone)
    {
        // 记忆上门自提联系人(缓存)，用于下次自动填写
        UserService::setLastExtract($this->model['user_id'], trim($linkman), trim($phone));
        // 保存上门自提联系人(数据库)
        return $this->model->extract()->save([
            'linkman' => trim($linkman),
            'phone' => trim($phone),
            'user_id' => $this->model['user_id'],
            'app_id' => $this->app_id,
        ]);
    }

    /**
     * 保存订单商品信息
     */
    private function saveOrderProduct($order, $status)
    {
        // 订单商品列表
        $productList = [];
        foreach ($order['product_list'] as $product) {
            $item = [
                'order_id' => $status,
                'user_id' => $this->user['user_id'],
                'app_id' => $this->app_id,
                'product_id' => $product['product_id'],
                'product_name' => $product['product_name'],
                'image_id' => $product['image'][0]['image_id'],
                'deduct_stock_type' => $product['deduct_stock_type'],
                'spec_type' => $product['spec_type'],
                'spec_sku_id' => $product['product_sku']['spec_sku_id'],
                'product_sku_id' => $product['product_sku']['product_sku_id'],
                'product_attr' => $product['product_sku']['product_attr'],
                'content' => $product['content'],
                'product_no' => $product['product_sku']['product_no'],
                'product_price' => $product['product_sku']['product_price'],
                'line_price' => $product['product_sku']['line_price'],
                'product_weight' => $product['product_sku']['product_weight'],
                'is_user_grade' => (int)$product['is_user_grade'],
                'grade_ratio' => $product['grade_ratio'],
                'grade_product_price' => isset($product['grade_product_price']) ? $product['grade_product_price'] : 0,
                'grade_total_money' => $product['grade_total_money'],
                'coupon_money' => $product['coupon_money'],
                'points_money' => isset($product['points_money']) ? $product['points_money'] : 0,
                'points_num' => isset($product['points_num']) ? $product['points_num'] : 0,
                'points_bonus' => $product['points_bonus'],
                'total_num' => $product['total_num'],
                'total_price' => $product['total_price'],
                'total_pay_price' => $product['total_pay_price'],
                'virtual_content' => $product['virtual_content']
            ];
            // 记录订单商品来源id
            $item['product_source_id'] = isset($product['product_source_id']) ? $product['product_source_id'] : 0;
            // 记录订单商品sku来源id
            $item['sku_source_id'] = isset($product['sku_source_id']) ? $product['sku_source_id'] : 0;
            // 记录拼团类的商品来源id
            $item['bill_source_id'] = isset($product['bill_source_id']) ? $product['bill_source_id'] : 0;
            $productList[] = $item;
        }
        $model = new OrderProduct();
        return $model->saveAll($productList);
    }

    /**
     * 计算订单可用积分抵扣
     */
    private function setOrderPoints()
    {
        $this->orderData['points_money'] = 0;
        // 积分抵扣总数量
        $this->orderData['points_num'] = 0;
        // 允许积分抵扣
        $this->orderData['is_allow_points'] = false;
        // 积分商城兑换
        if (isset($this->settledRule['force_points']) && $this->settledRule['force_points']) {
            // 积分抵扣金额，商品价格-兑换金额
            $this->orderData['points_money'] = $this->productList[0]['points_money'];
            // 积分抵扣总数量
            $this->orderData['points_num'] = $this->productList[0]['points_num'];
            // 允许积分抵扣
            $this->orderData['is_allow_points'] = true;
            if ($this->user['points'] < $this->productList[0]['points_num']) {
                $this->error = '积分不足，去多赚点积分吧！';
                return false;
            }
            return true;
        }
        // 积分设置
        if (!$this->settledRule['is_point']) {
            return false;
        }
        $setting = SettingModel::getItem('points');
        // 条件：后台开启下单使用积分抵扣
        if (!$setting['is_shopping_discount']) {
            return false;
        }
        // 条件：订单金额满足[?]元
        if (helper::bccomp($setting['discount']['full_order_price'], $this->orderData['order_total_price']) === 1) {
            return false;
        }
        // 计算订单商品最多可抵扣的积分数量
        $this->setOrderProductMaxPointsNum();
        // 订单最多可抵扣的积分总数量
        $maxPointsNumCount = helper::getArrayColumnSum($this->productList, 'max_points_num');
        // 实际可抵扣的积分数量
        $actualPointsNum = min($maxPointsNumCount, $this->user['points']);
        if ($actualPointsNum < 1) {
            $this->orderData['points_money'] = 0;
            // 积分抵扣总数量
            $this->orderData['points_num'] = 0;
            // 允许积分抵扣
            $this->orderData['is_allow_points'] = false;
            return false;
        }
        // 计算订单商品实际抵扣的积分数量和金额
        $ProductDeduct = new PointsDeductService($this->productList);
        $ProductDeduct->setProductPoints($maxPointsNumCount, $actualPointsNum);
        // 积分抵扣总金额
        $orderPointsMoney = helper::getArrayColumnSum($this->productList, 'points_money');
        $this->orderData['points_money'] = helper::number2($orderPointsMoney);
        // 积分抵扣总数量
        $this->orderData['points_num'] = $actualPointsNum;
        // 允许积分抵扣
        $this->orderData['is_allow_points'] = true;
        // 减去积分抵扣
        foreach ($this->productList as &$product) {
            $value = $product['total_pay_price'];
            // 减去积分抵扣金额
            if ($this->orderData['is_allow_points'] && $this->orderData['is_use_points']) {
                // 如果不是积分兑换，则减去积分抵扣金额
                !$this->settledRule['force_points'] && $value = helper::bcsub($value, $product['points_money']);
            }
            $product['total_pay_price'] = helper::number2($value);
        }
        return true;
    }

    /**
     * 计算订单商品最多可抵扣的积分数量
     */
    private function setOrderProductMaxPointsNum()
    {
        // 积分设置
        $setting = SettingModel::getItem('points');
        foreach ($this->productList as &$product) {
            // 积分兑换
            if ($this->settledRule['force_points']) {
                $product['max_points_num'] = $product['points_num'];
            } else {
                // 商品不允许积分抵扣
                if (!$product['is_points_discount']) continue;
                // 积分抵扣比例
                $deductionRatio = helper::bcdiv($setting['discount']['max_money_ratio'], 100);
                // 最多可抵扣的金额
                $maxPointsMoney = helper::bcmul($product['total_pay_price'], $deductionRatio);
                // 最多可抵扣的积分数量
                $product['max_points_num'] = helper::bcdiv($maxPointsMoney, $setting['discount']['discount_ratio'], 0);
                // 如果超过商品最大抵扣数量
                if ($product['max_points_discount'] != -1 && $product['max_points_num'] > $product['max_points_discount']) {
                    $product['max_points_num'] = $product['max_points_discount'];
                }
            }
        }
        return true;
    }


    /**
     * 计算订单积分赠送数量
     */
    private function setOrderPointsBonus()
    {
        // 初始化商品积分赠送数量
        foreach ($this->productList as &$product) {
            $product['points_bonus'] = 0;
        }
        // 积分设置
        $setting = SettingModel::getItem('points');
        // 条件：后台开启开启购物送积分
        if (!$setting['is_shopping_gift']) {
            return false;
        }
        // 设置商品积分赠送数量
        foreach ($this->productList as &$product) {
            // 积分赠送比例
            $ratio = $setting['gift_ratio'] / 100;
            // 计算赠送积分数量
            $product['points_bonus'] = !$product['is_points_gift'] ? 0 : helper::bcmul($product['total_pay_price'], $ratio, 0);
        }
        //  订单积分赠送数量
        $this->orderData['points_bonus'] = helper::getArrayColumnSum($this->productList, 'points_bonus');
        return true;
    }

    /**
     * 设置订单商品会员折扣价
     */
    private function setOrderGrade()
    {
        // 设置默认数据
        helper::setDataAttribute($this->productList, [
            // 标记参与会员折扣
            'is_user_grade' => false,
            // 会员等级抵扣的金额
            'grade_ratio' => 0,
            // 会员折扣的商品单价
            'grade_product_price' => 0.00,
            // 会员折扣的总额差
            'grade_total_money' => 0.00,
        ], true);

        // 是否开启会员等级折扣
        if (!$this->settledRule['is_user_grade']) {
            return false;
        }
        // 计算抵扣金额
        foreach ($this->productList as &$product) {
            // 判断商品是否参与会员折扣
            if (!$product['is_enable_grade']) {
                continue;
            }
            $alone_grade_type = 10;
            // 商品单独设置了会员折扣
            if ($product['is_alone_grade'] && isset($product['alone_grade_equity'][$this->user['grade_id']])) {
                if ($product['alone_grade_type'] == 10) {
                    // 折扣比例
                    $discountRatio = helper::bcdiv($product['alone_grade_equity'][$this->user['grade_id']], 100);
                } else {
                    $alone_grade_type = 20;
                    $discountRatio = helper::bcdiv($product['alone_grade_equity'][$this->user['grade_id']], $product['product_price'], 2);
                }
            } else {
                // 折扣比例
                $discountRatio = helper::bcdiv($this->user['grade']['equity'], 100);
            }
            if ($discountRatio < 1) {
                // 会员折扣后的商品总金额
                if ($alone_grade_type == 20) {
                    // 固定金额
                    $gradeTotalPrice = $product['alone_grade_equity'][$this->user['grade_id']] * $product['total_num'];
                    $grade_product_price = $product['alone_grade_equity'][$this->user['grade_id']];
                } else {
                    $gradeTotalPrice = max(0.01, helper::bcmul($product['total_price'], $discountRatio));
                    $grade_product_price = helper::number2(helper::bcmul($product['product_price'], $discountRatio), true);
                }
                helper::setDataAttribute($product, [
                    'is_user_grade' => true,
                    'grade_ratio' => $discountRatio,
                    'grade_product_price' => $grade_product_price,
                    'grade_total_money' => helper::number2(helper::bcsub($product['total_price'], $gradeTotalPrice)),
                    'total_price' => $gradeTotalPrice,
                ], false);
            }
        }
        return true;
    }


    /**
     * 检查优惠券是否可以使用
     */
    private function checkCouponCanUse($coupon)
    {
        // 0无限制
        if ($coupon['free_limit'] == 1) {
            //不可与促销同时,目前只有满减
            if ($this->orderData['reduce']) {
                return false;
            }
        } else if ($coupon['free_limit'] == 2) {
            //不可与等级优惠同时
            foreach ($this->productList as $product) {
                if ($product['is_user_grade']) {
                    return false;
                }
            }
        } else if ($coupon['free_limit'] == 3) {
            //不可与促销和等级同时
            if ($this->orderData['reduce']) {
                return false;
            }
            foreach ($this->productList as $product) {
                if ($product['is_user_grade']) {
                    return false;
                }
            }
        }
        // 是否限制商品使用
        if ($coupon['apply_range'] == 20) {
            $product_ids = explode(',', $coupon['product_ids']);
            foreach ($this->productList as $product) {
                if (!in_array($product['product_id'], $product_ids)) {
                    return false;
                }
            }
        }
        // 是否限制分类使用
        if ($coupon['apply_range'] == 30) {
            $category_ids = json_decode($coupon['category_ids'], true);
            foreach ($this->productList as $product) {
                // 如果二级分类包含
                if (in_array($product['category_id'], $category_ids['second'])) {
                    continue;
                }
                // 如果一级分类包含
                if (in_array($product['category_id'], $category_ids['first'])) {
                    continue;
                }
                // 如果分类有父类，则看一级分类是否包含
                $category = Category::detail($product['category_id']);
                if ($category['parent_id'] > 0) {
                    if (in_array($product['category_id'], $category_ids['first'])) {
                        continue;
                    }
                }
                return false;
            }
        }
        return true;
    }

}