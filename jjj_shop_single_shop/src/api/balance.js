import request from '@/utils/request'

let BalanceApi = {
    /*积分设置*/
    setSettings(data, errorback) {
        return request._post('/shop/user.balance/setting', data, errorback);
    },
    /*获取设置*/
    getSettings(data, errorback) {
      return request._get('/shop/user.balance/setting', data, errorback);
    },
    /*获取积分列表*/
    getBalanceLog(data, errorback) {
      return request._get('/shop/user.balance/log', data, errorback);
    },
}
export default BalanceApi;
