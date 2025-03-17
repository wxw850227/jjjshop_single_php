<?php

namespace app\shop\service;

use app\shop\model\order\OrderRefund;
use app\shop\model\product\Product;
use app\shop\model\order\Order;
use app\shop\model\user\User;
use app\shop\model\product\Comment;

/**
 * 商城模型
 */
class ShopService
{
    // 商品模型
    private $ProductModel;

    // 订单模型
    private $OrderModel;

    // 用户模型
    private $UserModel;
    // 订单退款模型
    private $OrderRefund;

    /**
     * 构造方法
     */
    public function __construct()
    {
        /* 初始化模型 */
        $this->ProductModel = new Product();
        $this->OrderModel = new Order();
        $this->UserModel = new User();
        $this->OrderRefund = new OrderRefund();
    }

    /**
     * 后台首页数据
     */
    public function getHomeData()
    {
        $today = date('Y-m-d');
        $yesterday = date('Y-m-d', strtotime('-1 day'));
        // 最近七天日期
        $lately7days = $this->getLately7days();
        return [
            'widget_card' => [
                // 商品总量
                'product_total' => $this->getProductTotal(),
                // 用户总量
                'user_total' => $this->getUserTotal(),
                // 订单总量
                'order_total' => $this->getOrderTotal(),
                // 评价总量
                'comment_total' => $this->getCommentTotal()
            ],
            'widget_outline' => [
                // 销售额(元)
                'order_total_price' => [
                    'tday' => $this->getOrderTotalPrice($today),
                    'ytd' => $this->getOrderTotalPrice($yesterday)
                ],
                // 支付订单数
                'order_total' => [
                    'tday' => $this->getOrderTotal($today),
                    'ytd' => $this->getOrderTotal($yesterday)
                ],
                // 新增用户数
                'new_user_total' => [
                    'tday' => $this->getUserTotal($today),
                    'ytd' => $this->getUserTotal($yesterday)
                ],
                // 下单用户数
                'order_user_total' => [
                    'tday' => $this->getPayOrderUserTotal($today),
                    'ytd' => $this->getPayOrderUserTotal($yesterday)
                ]
            ],
            'widget_echarts' => [
                // 最近七天日期
                'date' => json_encode($lately7days),
                'order_total' => json_encode($this->getOrderTotalByDate($lately7days)),
                'order_total_price' => json_encode($this->getOrderTotalPriceByDate($lately7days))
            ],
            'right_away' => [
                //订单
                'order' => [
                    'disposal' => $this->getReviewOrderTotal(),
                    'refund' => $this->getRefundOrderTotal()
                ],
                //审核
                'review' => [
                    'comment' => $this->getReviewCommentTotal(),
                ],
                //库存
                'stock' => [
                    'product' => $this->getProductStockTotal(),
                ],
            ]
        ];
    }

    /**
     * 最近七天日期
     */
    private function getLately7days()
    {
        // 获取当前周几
        $date = [];
        for ($i = 0; $i < 7; $i++) {
            $date[] = date('Y-m-d', strtotime('-' . $i . ' days'));
        }
        return array_reverse($date);
    }

    /**
     * 获取商品总量
     */
    private function getProductTotal()
    {
        return number_format($this->ProductModel->getProductTotal());
    }

    /**
     * 获取商品库存告急总量
     */
    private function getProductStockTotal()
    {
        return number_format($this->ProductModel->getProductStockTotal());
    }

    /**
     * 获取用户总量
     */
    private function getUserTotal($day = null)
    {
        return number_format($this->UserModel->getUserTotal($day));
    }

    /**
     * 获取订单总量
     */
    private function getOrderTotal($day = null)
    {
        return number_format($this->OrderModel->getOrderData($day, null, 'order_total'));
    }

    /**
     * 获取待处理订单总量
     */
    private function getReviewOrderTotal()
    {
        return number_format($this->OrderModel->getReviewOrderTotal());
    }

    /**
     * 获取售后订单总量
     */
    private function getRefundOrderTotal()
    {
        return number_format($this->OrderRefund->getRefundOrderTotal());
    }

    /**
     * 获取订单总量 (指定日期)
     */
    private function getOrderTotalByDate($days)
    {
        $data = [];
        foreach ($days as $day) {
            $data[] = $this->getOrderTotal($day);
        }
        return $data;
    }

    /**
     * 获取评价总量
     */
    private function getCommentTotal()
    {
        $model = new Comment;
        return number_format($model->getCommentTotal());
    }

    /**
     * 获取待审核评价总量
     */
    private function getReviewCommentTotal()
    {
        $model = new Comment;
        return number_format($model->getReviewCommentTotal());
    }

    /**
     * 获取某天的总销售额
     */
    private function getOrderTotalPrice($day)
    {
        return sprintf('%.2f', $this->OrderModel->getOrderTotalPrice($day));
    }

    /**
     * 获取订单总量 (指定日期)
     */
    private function getOrderTotalPriceByDate($days)
    {
        $data = [];
        foreach ($days as $day) {
            $data[] = $this->getOrderTotalPrice($day);
        }
        return $data;
    }

    /**
     * 获取某天的下单用户数
     */
    private function getPayOrderUserTotal($day)
    {
        return number_format($this->OrderModel->getPayOrderUserTotal($day));
    }

}