<?php

namespace app\job\model\order;

use app\common\model\order\Order as OrderModel;
use app\common\service\product\factory\ProductFactory;
use app\common\library\helper;

/**
 * 订单模型
 */
class Order extends OrderModel
{
    /**
     * 获取订单列表
     */
    public function getCloseList($with = [])
    {
        return $this->with($with)
            ->where('pay_status', '=', 10)
            ->where('order_status', '=', 10)
            ->where('pay_end_time', '<=', time())
            ->where('pay_end_time', '>', 0)
            ->where('is_delete', '=', 0)
            ->where('order_source', '<>', 80)
            ->select();
    }



}
