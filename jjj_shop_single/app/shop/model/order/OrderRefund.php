<?php

namespace app\shop\model\order;

use app\common\model\order\OrderRefund as OrderRefundModel;
use app\shop\model\user\User as UserModel;
use app\common\service\order\OrderRefundService;
use app\common\service\message\MessageService;

/**
 * 售后管理模型
 */
class OrderRefund extends OrderRefundModel
{

    /**
     * 获取售后单列表
     */
    public function getList($query = [])
    {

        $model = $this;
        // 查询条件：订单号
        if (isset($query['order_no']) && !empty($query['order_no'])) {
            $model = $model->where('order.order_no', 'like', "%{$query['order_no']}%");
        }
        // 查询条件：起始日期
        if (isset($query['create_time']) && !empty($query['create_time'])) {
            $sta_time = array_shift($query['create_time']);
            $end_time = array_pop($query['create_time']);
            $model = $model->whereBetweenTime('m.create_time', $sta_time, date('Y-m-d 23:59:59', strtotime($end_time)));
        }
        // 售后类型
        if (isset($query['type']) && $query['type'] > 0) {
            $model = $model->where('m.type', '=', $query['type']);
        }

        // 售后单状态(选项卡)
        if (isset($query['status']) && $query['status'] >= 0) {
            $model = $model->where('m.status', '=', $query['status']);
        }

        // 获取列表数据
        $list = $model->alias('m')
            ->field('m.*, order.order_no')
            ->with(['orderproduct.image', 'orderMaster', 'user'])
            ->join('order', 'order.order_id = m.order_id')
            ->order(['m.create_time' => 'desc'])
            ->paginate($query);
        return $list;
    }

    public function groupCount($query)
    {
        $model = $this;
        // 查询条件：订单号
        if (isset($query['order_no']) && !empty($query['order_no'])) {
            $model = $model->where('order.order_no', 'like', "%{$query['order_no']}%");
        }
        // 查询条件：起始日期
        if (isset($query['create_time']) && !empty($query['create_time'])) {
            $sta_time = array_shift($query['create_time']);
            $end_time = array_pop($query['create_time']);
            $model = $model->whereBetweenTime('m.create_time', $sta_time, $end_time);
        }
        // 售后类型
        if (isset($query['type']) && $query['type'] > 0) {
            $model = $model->where('m.type', '=', $query['type']);
        }

        // 获取列表数据
        return $model->alias('m')
            ->field('m.status,COUNT(*) as total')
            ->join('order', 'order.order_id = m.order_id')
            ->group('m.status')->select()->toArray();
    }

    /**
     * 商家审核
     */
    public function audit($data)
    {
        if ($data['is_agree'] == 20 && empty($data['refuse_desc'])) {
            $this->error = '请输入拒绝原因';
            return false;
        }
        if ($data['is_agree'] == 10 && $this['type']['value'] != 30 && empty($data['address_id'])) {
            $this->error = '请选择退货地址';
            return false;
        }
        $this->startTrans();
        try {
            // 拒绝申请, 标记售后单状态为已拒绝
            $data['is_agree'] == 20 && $data['status'] = 10;
            // 同意换货申请, 标记售后单状态为已完成
//            $data['is_agree'] == 10 && $this['type']['value'] == 20 && $data['status'] = 20;
            // 更新退款单状态
            $this->save($data);
            // 同意售后申请, 记录退货地址
            if ($data['is_agree'] == 10 && $this['type']['value'] != 30) {
                $model = new OrderRefundAddress();
                $model->add($this['order_refund_id'], $data['address_id']);
            }
            // 订单详情
            $order = Order::detail($this['order_id']);
            // 发送模板消息
            (new MessageService)->refund(self::detail($this['order_refund_id']), $order['order_no'], 'audit');
            // 如果是仅退款
            if ($data['is_agree'] == 10 && $this['type']['value'] == 30) {
                $total_refund = $this['orderproduct']['total_pay_price'];
                if ($data['refund_money'] > $total_refund) {
                    $this->error = '退款金额不能大于商品实付款金额';
                    return false;
                }
                $this->refundMoney($order, $data);
            }
            // 事务提交
            $this->commit();
            return true;
        } catch (\Exception $e) {
            $this->error = $e->getMessage();
            $this->rollback();
            return false;
        }
    }

    /**
     * 确认收货并退款
     */
    public function receipt($data)
    {
        // 订单详情
        $order = Order::detail($this['order_id']);
        $total_refund = $this['orderproduct']['total_pay_price'];
        if ($data['refund_money'] > $total_refund) {
            $this->error = '退款金额不能大于商品实付款金额';
            return false;
        }
        $this->transaction(function () use ($order, $data) {
            $this->refundMoney($order, $data);
        });
        return true;
    }

    private function refundMoney($order, $data)
    {
        $update = [
            'is_receipt' => 1,
            'status' => 20
        ];
        if ($this['type']['value'] == 20) {
            $update['send_express_id'] = $data['send_express_id'];
            $update['send_express_no'] = $data['send_express_no'];
            $update['deliver_time'] = time();
            $update['is_plate_send'] = 1;
        }
        $data['refund_money'] > 0 && $update['refund_money'] = $data['refund_money'];
        // 更新售后单状态
        $this->save($update);
        // 消减用户的实际消费金额
        // 条件：判断订单是否已结算
        if ($order['is_settled'] == true) {
            (new UserModel)->setDecUserExpend($order['user_id'], $data['refund_money']);
        }
        // 执行原路退款
        $data['refund_money'] > 0 && (new OrderRefundService)->execute($order, $data['refund_money']);
        $data['refund_money'] > 0 && $order->save(['refund_money' => $order['refund_money'] + $data['refund_money']]);
        // 发送模板消息
        (new MessageService)->refund(self::detail($this['order_refund_id']), $order['order_no'], 'receipt');
    }


    /**
     * 统计售后订单
     */
    public function getRefundOrderTotal()
    {
        $filter['is_agree'] = 0;
        return $this->where($filter)->count();
    }


    /**
     * 获取退款订单总数 (可指定某天)
     * 已同意的退款
     */
    public function getOrderRefundData($startDate, $endDate, $type)
    {
        $model = $this;
        $model = $model->where('create_time', '>=', strtotime($startDate));
        if (is_null($endDate)) {
            $model = $model->where('create_time', '<', strtotime($startDate) + 86400);
        } else {
            $model = $model->where('create_time', '<', strtotime($endDate) + 86400);
        }

        $model = $model->where('is_agree', '=', 10);

        if ($type == 'order_refund_money') {
            // 退款金额
            return $model->sum('refund_money');
        } else if ($type == 'order_refund_total') {
            // 退款数量
            return $model->count();
        }
        return 0;
    }
}