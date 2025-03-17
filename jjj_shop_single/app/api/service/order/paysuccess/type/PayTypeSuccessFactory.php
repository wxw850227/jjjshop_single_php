<?php

namespace app\api\service\order\paysuccess\type;

use app\common\enum\order\OrderTypeEnum;

/**
 * 支付成功辅助工厂类
 */
class PayTypeSuccessFactory
{
    public static function getFactory($out_trade_no, $order_type, $pay_status = 10)
    {
        switch ($order_type) {
            case OrderTypeEnum::MASTER:
                return new MasterPaySuccessService($out_trade_no, $pay_status);
                break;
        }
        return false;
    }
}