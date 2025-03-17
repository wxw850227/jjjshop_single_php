<?php

namespace app\common\model\settings;

use app\common\model\BaseModel;

/**
 * 退货地址模型
 */
class ReturnAddress extends BaseModel
{
    protected $name = 'return_address';
    protected $pk = 'address_id';

    /**
     * 退货地址详情
     */
    public static function detail($address_id)
    {
        return (new static())->find($address_id);
    }

}