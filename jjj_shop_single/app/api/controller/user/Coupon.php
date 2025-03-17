<?php

namespace app\api\controller\user;

use app\api\controller\Controller;
use app\api\model\plus\coupon\UserCoupon as UserCouponModel;

/**
 * 用户优惠券
 */
class Coupon extends Controller
{
    // 当前用户
    private $user;

    /**
     * 构造方法
     */
    public function initialize()
    {
        parent::initialize();
        $this->user = $this->getUser();
    }

    /**
     * 优惠券列表
     */
    public function lists($data_type = 'all')
    {
        $is_use = false;
        $is_expire = false;
        switch ($data_type) {
            case 'not_use':
                $is_use = false;
                break;
            case 'is_use':
                $is_use = true;
                break;
            case 'is_expire':
                $is_expire = true;
                break;
        }
        $list = (new UserCouponModel())->getPageList($this->user['user_id'], $is_use, $is_expire, $this->postData());
        return $this->renderSuccess('', compact('list'));
    }

    /**
     * 领取优惠券
     */
    public function receive($coupon_id)
    {
        $model = new UserCouponModel();
        if ($model->receive($this->user, $coupon_id)) {
            return $this->renderSuccess([], '领取成功');
        }
        return $this->renderError($model->getError() ?: '添加失败');
    }

    /**
     * 批量领取优惠券
     */
    public function receiveList($coupon_ids)
    {
        if ((new UserCouponModel())->receiveList($this->user, $coupon_ids)) {
            return $this->renderSuccess('领取成功', '');
        }
        return $this->renderError('领取失败');
    }
}