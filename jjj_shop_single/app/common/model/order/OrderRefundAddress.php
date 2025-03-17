<?php

namespace app\common\model\order;

use app\common\model\BaseModel;

/**
 * 售后地址模型
 * Class OrderRefundAddress
 * @package app\common\model\order
 */
class OrderRefundAddress extends BaseModel
{
    protected $name = 'order_refund_address';
    protected $pk = 'id';
    protected $updateTime = false;
}

