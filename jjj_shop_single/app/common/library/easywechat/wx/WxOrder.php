<?php

namespace app\common\library\easywechat\wx;

/**
 * 直播房间
 */
class WxOrder extends WxBase
{
    /**
     * 上传物流单号
     */
    public function uploadExpress($params_arr)
    {
        // 获取 access token 实例
        $accessToken = $this->app->getAccessToken();
        $token = $accessToken->getToken();
        // 微信接口url
        $apiUrl = "https://api.weixin.qq.com/wxa/sec/order/upload_shipping_info?access_token=$token";

        $params = json_encode($params_arr, JSON_UNESCAPED_UNICODE);
        // 执行请求
        $result = $this->post($apiUrl, $params);
        // 返回结果
        $response = $this->jsonDecode($result);
        if (!isset($response['errcode'])) {
            $this->error = '请求错误';
            return false;
        }
        if ($response['errcode'] != 0) {
            if ($response['errcode'] == '9410000') {
                $this->error = 'empty';
            } else {
                if ($response['errcode'] == 40001) {
                    //防止token过期或更换,重新获取
                    $accessToken->getToken(true);
                }
                $this->error = $response['errmsg'];
            }
            return false;
        }
        return true;
    }

    /**
     * 确认收货
     */
    public function confirmOrder()
    {
        // 获取 access token 实例
        $accessToken = $this->app->getAccessToken();
        $token = $accessToken->getToken();
        // 微信接口url
        $apiUrl = "https://api.weixin.qq.com/wxa/business/getliveinfo?access_token=$token";
        // 请求参数
        $params = json_encode(['start' => 0, 'limit' => 100], JSON_UNESCAPED_UNICODE);
        // 执行请求
        $result = $this->post($apiUrl, $params);
        // 返回结果
        $response = $this->jsonDecode($result);
        if (!isset($response['errcode'])) {
            $this->error = '请求错误';
            return false;
        }
        if ($response['errcode'] != 0) {
            if ($response['errcode'] == '9410000') {
                $this->error = 'empty';
            } else {
                if ($response['errcode'] == 40001) {
                    //防止token过期或更换,重新获取
                    $accessToken->getToken(true);
                }
                $this->error = $response['errmsg'];
            }

            return false;
        }
        return $response;
    }

    /**
     * 查询物流公司
     */
    public function getExpress()
    {
        // 获取 access token 实例
        $accessToken = $this->app->getAccessToken();
        $token = $accessToken->getToken();
        // 微信接口url
        $apiUrl = "https://api.weixin.qq.com/cgi-bin/express/delivery/open_msg/get_delivery_list?access_token=$token";
        // 请求参数
        $params = "{}";
        // 执行请求
        $result = $this->post($apiUrl, $params);
        // 返回结果
        $response = $this->jsonDecode($result);
        if (!isset($response['errcode'])) {
            $this->error = '请求错误';
            return false;
        }
        if ($response['errcode'] != 0) {
            if ($response['errcode'] == '9410000') {
                $this->error = 'empty';
            } else {
                if ($response['errcode'] == 40001) {
                    //防止token过期或更换,重新获取
                    $accessToken->getToken(true);
                }
                $this->error = $response['errmsg'];
            }
            return false;
        } else {
            return $response['delivery_list'];
        }

    }
}