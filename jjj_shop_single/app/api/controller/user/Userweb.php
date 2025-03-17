<?php

namespace app\api\controller\user;

use app\api\controller\Controller;
use app\api\model\order\Order as OrderModel;
use app\common\enum\order\OrderPayTypeEnum;
use app\common\enum\order\OrderTypeEnum;
use app\api\model\user\UserWeb as UserModel;

/**
 * h5 web用户管理
 */
class Userweb extends Controller
{

    /**
     * 用户自动登录,默认微信小程序
     */
    public function login()
    {
        $model = new UserModel;
        $user_id = $model->login($this->request->post());
        if ($user_id == 0) {
            return $this->renderError($model->getError() ?: '登录失败');
        }
        return $this->renderSuccess('', [
            'user_id' => $user_id,
            'token' => $model->getToken()
        ]);
    }

    /**
     * 手机号码注册
     */
    public function register()
    {
        $data = $this->request->post();
        $model = new UserModel;
        if ($model->phoneRegister($data)) {
            return $this->renderSuccess('注册成功');
        }
        return $this->renderError($model->getError() ?: '注册失败');

    }


    public function payH5($order_id, $order_type = OrderTypeEnum::MASTER)
    {
        $user = $this->getUser();
        if ($order_type == OrderTypeEnum::MASTER) {
            // 订单详情
            $model = OrderModel::getUserOrderDetail($order_id, $user['user_id']);
            // 构建支付请求
            $payment = OrderModel::onOrderPayment($user, $model, OrderPayTypeEnum::WECHAT, 'payH5');
            $return_Url = urlencode(base_url() . "h5/pages/order/myorder");
        }

        return $this->renderSuccess('', [
            'order' => $model,  // 订单详情
            'mweb_url' => $payment['mweb_url'],
            'return_Url' => $return_Url
        ]);
    }

    public function bindMobile()
    {
        $model = new UserModel;
        if ($model->bindMobile($this->getUser(), $this->request->post())) {
            return $this->renderSuccess('绑定成功');
        }
        return $this->renderError($model->getError() ?: '绑定失败');
    }

}
