<?php

namespace app\common\model\order;

use app\common\enum\order\OrderSourceEnum;
use app\common\library\easywechat\AppWx;
use app\common\library\easywechat\wx\WxOrder;
use app\common\model\BaseModel;
use app\common\enum\settings\DeliveryTypeEnum;
use app\common\enum\order\OrderPayStatusEnum;
use app\common\enum\order\OrderTypeEnum;
use app\common\enum\order\OrderPayTypeEnum;
use app\common\library\helper;
use app\common\model\settings\Express as ExpressModel;
use app\common\model\settings\Setting as SettingModel;
use app\common\service\order\OrderService;
use app\common\service\order\OrderCompleteService;
use app\common\model\store\Order as StoreOrderModel;

/**
 * 订单模型模型
 */
class Order extends BaseModel
{
    protected $pk = 'order_id';
    protected $name = 'order';

    /**
     * 追加字段
     * @var string[]
     */
    protected $append = [
        'state_text',
        'order_source_text',
        'pay_end_time_text',
    ];


    /**
     * 订单商品列表
     * @return \think\model\relation\HasMany
     */
    public function product()
    {
        return $this->hasMany('app\\common\\model\\order\\OrderProduct', 'order_id', 'order_id')->hidden(['content']);
    }


    /**
     * 关联订单收货地址表
     * @return \think\model\relation\HasOne
     */
    public function address()
    {
        return $this->hasOne('app\\common\\model\\order\\OrderAddress');
    }

    /**
     * 关联自提订单联系方式
     * @return \think\model\relation\HasOne
     */
    public function extract()
    {
        return $this->hasOne('app\\common\\model\\order\\OrderExtract');
    }

    /**
     * 关联物流公司表
     * @return \think\model\relation\BelongsTo
     */
    public function express()
    {
        return $this->belongsTo('app\\common\\model\\settings\\Express', 'express_id', 'express_id');
    }

    /**
     * 关联自提门店表
     * @return \think\model\relation\BelongsTo
     */
    public function extractStore()
    {
        return $this->belongsTo('app\\common\\model\\store\\Store', 'extract_store_id', 'store_id');
    }

    /**
     * 关联门店店员表
     * @return \think\model\relation\BelongsTo
     */
    public function extractClerk()
    {
        return $this->belongsTo('app\\common\\model\\store\\Clerk', 'extract_clerk_id');
    }

    /**
     * 关联用户表
     * @return \think\model\relation\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('app\\common\\model\\user\\User', 'user_id', 'user_id');
    }

    /**
     * 预售结束时间
     */
    public function getPayEndTimeTextAttr($value, $data)
    {
        return (isset($data['pay_end_time']) && $data['pay_end_time'] && is_numeric($data['pay_end_time'])) ? date('Y-m-d H:i:s', $data['pay_end_time']) : '';
    }

    /**
     * 订单状态文字描述
     * @param $value
     * @param $data
     * @return string
     */
    public function getStateTextAttr($value, $data)
    {
        // 订单状态
        if (in_array($data['order_status'], [20, 30])) {
            $orderStatus = [20 => '已取消', 30 => '已完成'];
            return $orderStatus[$data['order_status']];
        }
        // 付款状态
        if ($data['pay_status'] == 10) {
            return '待付款';
        }
        // 发货状态
        if ($data['delivery_status'] == 10) {
            return '已付款，待发货';
        }
        if ($data['receipt_status'] == 10) {
            return '已发货，待收货';
        }
        return $value;
    }


    /**
     * 付款状态
     * @param $value
     * @return array
     */
    public function getPayTypeAttr($value)
    {
        return ['text' => OrderPayTypeEnum::data()[$value]['name'], 'value' => $value];
    }

    /**
     * 订单来源
     * @param $value
     * @return array
     */
    public function getOrderSourceTextAttr($value, $data)
    {
        return OrderSourceEnum::data()[$data['order_source']]['name'];
    }

    /**
     * 付款状态
     * @param $value
     * @return array
     */
    public function getPayStatusAttr($value)
    {
        return ['text' => OrderPayStatusEnum::data()[$value]['name'], 'value' => $value];
    }

    /**
     * 改价金额（差价）
     * @param $value
     * @return array
     */
    public function getUpdatePriceAttr($value)
    {
        return [
            'symbol' => $value < 0 ? '-' : '+',
            'value' => sprintf('%.2f', abs($value))
        ];
    }

    /**
     * 发货状态
     * @param $value
     * @return array
     */
    public function getDeliveryStatusAttr($value)
    {
        $status = [10 => '待发货', 20 => '已发货'];
        return ['text' => $status[$value], 'value' => $value];
    }

    /**
     * 收货状态
     * @param $value
     * @return array
     */
    public function getReceiptStatusAttr($value)
    {
        $status = [10 => '待收货', 20 => '已收货'];
        return ['text' => $status[$value], 'value' => $value];
    }

    /**
     * 收货状态
     * @param $value
     * @return array
     */
    public function getOrderStatusAttr($value)
    {
        $status = [10 => '进行中', 20 => '已取消', 21 => '待取消', 30 => '已完成'];
        return ['text' => $status[$value], 'value' => $value];
    }

    /**
     * 配送方式
     * @param $value
     * @return array
     */
    public function getDeliveryTypeAttr($value)
    {
        return ['text' => DeliveryTypeEnum::data()[$value]['name'], 'value' => $value];
    }

    /**
     * 订单详情
     */
    public static function detail($where, $with = ['user', 'address', 'product' => ['image', 'refund'], 'extract', 'express', 'extractStore.logo', 'extractClerk'])
    {
        is_array($where) ? $filter = $where : $filter['order_id'] = (int)$where;
        return (new static())->with($with)->where($filter)->find();
    }

    /**
     * 订单详情
     */
    public static function detailByNo($order_no, $with = ['user', 'address', 'product' => ['image', 'refund'], 'extract', 'express', 'extractStore.logo', 'extractClerk'])
    {
        return (new static())->with($with)->where('order_no', '=', $order_no)->find();
    }

    /**
     * 批量获取订单列表
     * @param $orderIds
     * @param array $with
     * @return array
     */
    public function getListByIds($orderIds, $with = [])
    {
        $data = $this->getListByInArray('order_id', $orderIds, $with);
        return helper::arrayColumn2Key($data, 'order_id');
    }

    /**
     * 批量更新订单
     * @param $orderIds
     * @param $data
     * @return bool
     */
    public function onBatchUpdate($orderIds, $data)
    {
        return $this->where('order_id', 'in', $orderIds)->save($data);
    }

    /**
     * 批量获取订单列表
     * @param $field
     * @param $data
     * @param array $with
     * @return \think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    private function getListByInArray($field, $data, $with = [])
    {
        return $this->with($with)
            ->where($field, 'in', $data)
            ->where('is_delete', '=', 0)
            ->select();
    }

    /**
     * 生成订单号
     * @return string
     */
    public function orderNo()
    {
        return OrderService::createOrderNo();
    }

    /**
     * 确认核销（自提订单）
     * @param $extractClerkId
     * @return bool|mixed
     */
    public function verificationOrder($extractClerkId)
    {
        if (
            $this['pay_status']['value'] != 20
            || $this['delivery_type']['value'] != DeliveryTypeEnum::EXTRACT
            || $this['delivery_status']['value'] == 20
            || in_array($this['order_status']['value'], [20, 21])
        ) {
            $this->error = '该订单不满足核销条件';
            return false;
        }
        return $this->transaction(function () use ($extractClerkId) {
            // 更新订单状态：已发货、已收货
            $status = $this->save([
                'extract_clerk_id' => $extractClerkId,  // 核销员
                'delivery_status' => 20,
                'delivery_time' => time(),
                'receipt_status' => 20,
                'receipt_time' => time(),
                'order_status' => 30
            ]);
            // 新增订单核销记录
            StoreOrderModel::add(
                $this['order_id'],
                $this['extract_store_id'],
                $this['extract_clerk_id'],
                OrderTypeEnum::MASTER
            );
            // 执行订单完成后的操作
            $OrderCompleteService = new OrderCompleteService(OrderTypeEnum::MASTER);
            $OrderCompleteService->complete([$this], static::$app_id);
            $this->sendWxExpress('', '');
            return $status;
        });
    }

    public function sendWxExpress($express_id, $express_no)
    {
        //判断是否开启小程序发货
        $setting = SettingModel::getItem('store', $this['app_id']);
        if ($this['wx_delivery_status'] != 10 || !$setting['is_send_wx']) {
            return false;
        }
        // 如果是小程序微信支付，则提交
        if ($this['pay_type']['value'] != 20 || $this['pay_source'] != 'wx' || $this['transaction_id'] == '') {
            return false;
        }
        sleep(1);
        $express = null;
        if ($this['delivery_type']['value'] == 10) {
            $express = ExpressModel::detail($express_id);
            $logistics_type = 1;
            if (!$express['wx_code']) {
                $logistics_type = 4;
            }
        } elseif ($this['delivery_type']['value'] == 20) {
            $logistics_type = 4;
        } elseif ($this['delivery_type']['value'] == 30) {
            $logistics_type = 3;
        }
        // 请求参数
        $params_arr = [
            // 订单，需要上传物流信息的订单
            'order_key' => [
                // 订单单号类型，用于确认需要上传详情的订单。枚举值1，使用下单商户号和商户侧单号；枚举值2，使用微信支付单号。
                "order_number_type" => 2,
                // 原支付交易对应的微信订单号
                "transaction_id" => $this['transaction_id']
            ],
            // 发货模式，发货模式枚举值：1、UNIFIED_DELIVERY（统一发货）2、SPLIT_DELIVERY（分拆发货） 示例值: UNIFIED_DELIVERY
            "delivery_mode" => 1,
            // 物流模式，发货方式枚举值：1、实体物流配送采用快递公司进行实体物流配送形式 2、同城配送 3、虚拟商品，虚拟商品，例如话费充值，点卡等，无实体配送形式 4、用户自提
            "logistics_type" => $logistics_type,//$this->getLogisticsType($this['delivery_type']),
            // 物流信息列表，发货物流单列表，支持统一发货（单个物流单）和分拆发货（多个物流单）两种模式，多重性: [1, 10]
            "shipping_list" => [
                [
                    // 物流单号，物流快递发货时必填，示例值: 323244567777 字符字节限制: [1, 128]
                    "tracking_no" => $this['delivery_type']['value'] == 10 ? $express_no : '',
                    // 物流公司编码，快递公司ID，参见「查询物流公司编码列表」，物流快递发货时必填， 示例值: DHL 字符字节限制: [1, 128]
                    "express_company" => $this['delivery_type']['value'] == 10 ? $express['wx_code'] : '',
                    // 商品信息，例如：微信红包抱枕*1个，限120个字以内
                    "item_desc" => $this['product'][0]['product_name'],
                    // 联系方式，当发货的物流公司为顺丰时，联系方式为必填，收件人或寄件人联系方式二选一
                    "contact" => [
                        // 收件人联系方式，收件人联系方式为，采用掩码传输，最后4位数字不能打掩码 示例值: `189****1234, 021-****1234, ****1234, 0**2-***1234, 0**2-******23-10, ****123-8008` 值限制: 0 ≤ value ≤ 1024
                        "receiver_contact" => $this['delivery_type']['value'] == 10 ? $this->desensitize($this['address']['phone'], 3, 4) : ''
                    ]
                ]
            ],
            // 上传时间，用于标识请求的先后顺序 示例值: `2022-12-15T13:29:35.120+08:00`
            "upload_time" => $this->getUploadTime(),
            // 支付者，支付者信息
            "payer" => [
                // 用户标识，用户在小程序appid下的唯一标识。 下单前需获取到用户的Openid 示例值: oUpF8uMuAJO_M2pxb1Q9zNjWeS6o 字符字节限制: [1, 128]
                "openid" => $this['user']['open_id']
            ]
        ];
        // 小程序配置信息
        $app = AppWx::getApp($this['app_id']);
        $model = new WxOrder($app);
        if ($model->uploadExpress($params_arr)) {
            $this->save(['wx_delivery_status' => 20]);
            return true;
        } else {
            log_write($model->getError());
            $this->error = $model->getError();
            return false;
        }
    }

    private function getUploadTime()
    {
        $microtime = microtime();
        list($microSeconds, $timeSeconds) = explode(' ', $microtime);
        $milliseconds = round($microSeconds * 1000);
        return date('Y-m-d') . 'T' . date('H:i:s') . '.' . $milliseconds . '+08:00';
    }

    /**
     * 脱敏
     *
     * @authors: Msy
     * @Created-Time: 2022/10/17 17:54
     * @param $string 需要脱敏的字符
     * @param $start  开始位置
     * @param $length 脱敏长度
     * @param $re     替换字符
     * @return string
     */
    public function desensitize($string, $start = 0, $length = 0, $re = '*')
    {
        if (empty($string) || empty($length) || empty($re)) return $string;
        $end = $start + $length;
        $strlen = mb_strlen($string);
        $str_arr = array();
        for ($i = 0; $i < $strlen; $i++) {
            if ($i >= $start && $i < $end) {
                $str_arr[] = $re;
            } else {
                $str_arr[] = mb_substr($string, $i, 1);
            }
        }
        return implode('', $str_arr);
    }

}