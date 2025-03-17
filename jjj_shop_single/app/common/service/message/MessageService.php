<?php

namespace app\common\service\message;

use app\common\model\settings\Setting as SettingModel;
use app\common\model\user\User as UserModel;
use app\common\enum\order\OrderTypeEnum;
use app\common\model\settings\MessageSettings as MessageSettingsModel;
use app\common\model\settings\Message as MessageModel;
use app\common\enum\order\OrderPayTypeEnum;

/**
 * 消息通知服务
 */
class MessageService
{
    /**
     * 订单支付成功后通知
     */
    public function payment($order, $orderType = OrderTypeEnum::MASTER)
    {
        $message = MessageModel::detailByEname('order_pay_user');
        $settings = MessageSettingsModel::detailByMessageId($message['message_id'], $order['app_id']);
        if (!$settings) {
            return;
        }
        $data = [
            // 订单编号
            'order_no' => $order['order_no'],
            // 商品名称
            'product_name' => $this->formatProductName($order['product']),
            // 订单金额
            'pay_price' => $order['pay_price'],
            // 支付方式
            'pay_type' => OrderPayTypeEnum::data()[$order['pay_type']['value']]['name'],
            // 支付时间
            'pay_time' => date('Y-m-d H:i:s', $order['pay_time'])
        ];

        //发送小程序订阅消息
        if ($settings['wx_status'] == 1 && $order['user']['open_id'] != '') {
            WxMessageService::send($data, $settings['wx_template'], $order['user']['open_id'], $order['app_id']);
        }
        //发送短信消息
        if ($settings['sms_status'] == 1 && $order['user']['mobile'] != '') {
            SmsMessageService::send($data, $settings['sms_template'], $order['user']['mobile'], $order['app_id']);
        }

        // 商家短信通知
        $this->newOrder($order, $data, $orderType);
    }

    /**
     * 商家短信通知
     */
    public function newOrder($order, $data, $orderType = OrderTypeEnum::MASTER)
    {
        $message = MessageModel::detailByEname('order_pay_store');
        $settings = MessageSettingsModel::detailByMessageId($message['message_id']);
        if (!$settings || $settings['sms_status'] == 0) {
            return;
        }
        // 商家短信通知
        $smsConfig = SettingModel::getItem('sms', $order['app_id']);
        $phone = $smsConfig['engine']['aliyun']['accept_phone'];

        if(empty($phone)){
            return;
        }
        SmsMessageService::send($data, $settings['sms_template'], $phone, $order['app_id']);
    }

    /**
     * 后台发货通知
     */
    public function delivery($order, $orderType = OrderTypeEnum::MASTER)
    {
        $message = MessageModel::detailByEname('order_delivery_user');
        $settings = MessageSettingsModel::detailByMessageId($message['message_id']);
        if (!$settings) {
            return;
        }
        $data = [
            // 订单编号
            'order_no' => $order['order_no'],
            // 商品信息
            'product_name' => $this->formatProductName($order['product']),
            //收货人
            'name' => $order['address']['name'],
            // 收货地址
            'address' => implode('', $order['address']['region']) . $order['address']['detail'],
            // 物流公司
            'express_name' => $order['express']['express_name'],
            // 物流单号
            'express_no' => $order['express_no'],
            // 发货时间
            'express_time' => date('Y-m-d H:i:s', $order['delivery_time']),
        ];

        //发送小程序订阅消息
        if ($settings['wx_status'] == 1 && $order['user']['open_id'] != '') {
            WxMessageService::send($data, $settings['wx_template'], $order['user']['open_id'], $order['app_id']);
        }
        //发送短信消息
        if ($settings['sms_status'] == 1 && $order['user']['mobile'] != '') {
            SmsMessageService::send($data, $settings['sms_template'], $order['user']['mobile'], $order['app_id']);
        }
    }

    /**
     * 后台售后单状态通知
     * $sence场景，audit 审核  receipt 确认退款
     */
    public function refund($refund, $order_no, $sence = 'audit')
    {
        $message = MessageModel::detailByEname('order_refund_user');
        $settings = MessageSettingsModel::detailByMessageId($message['message_id']);
        if (!$settings) {
            return;
        }
        $data = [
            // 订单编号
            'order_no' => $order_no,
            // 商品名称
            'product_name' => $refund['order_product']['product_name'],
            // 售后类型
            'type' => $refund['type']['text'],
            // 处理结果
            'status' => $sence == 'audit'? $refund['is_agree']['text'] : $refund['status']['text'],
            // 处理时间
            'process_time' => date('Y-m-d H:i:s', time()),
            // 拒绝原因
            'refuse_desc' => $refund['refuse_desc']?: '无',
        ];

        //发送小程序订阅消息
        if ($settings['wx_status'] == 1 && $refund['user']['open_id'] != '') {
            WxMessageService::send($data, $settings['wx_template'], $refund['user']['open_id'], $refund['app_id']);
        }
        //发送短信消息
        if ($settings['sms_status'] == 1 && $refund['user']['mobile'] != '') {
            SmsMessageService::send($data, $settings['sms_template'], $refund['user']['mobile'], $refund['app_id']);
        }
    }


    /**
     * 格式化商品名称
     */
    private function formatProductName($productData)
    {
        $str = '';
        foreach ($productData as $product) {
            $str .= $product['product_name'] . ' ';
        }
        return $str;
    }

}