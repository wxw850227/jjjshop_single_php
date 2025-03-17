import request from '@/utils/request'

let AppSettingApi = {
  /*小程序*/
  appwxDetail(data, errorback) {
    return request._get('/shop/appsetting.appwx/index', data, errorback);
  },
  /*小程序*/
  editAppWx(data, errorback) {
    return request._post('/shop/appsetting.appwx/index', data, errorback);
  },
  /*公众号*/
  appmpDetail(data, errorback) {
    return request._get('/shop/appsetting.appmp/index', data, errorback);
  },
  /*公众号*/
  editAppMp(data, errorback) {
    return request._post('/shop/appsetting.appmp/index', data, errorback);
  },
  /*app*/
  appDetail(data, errorback) {
    return request._get('/shop/appsetting.app/index', data, errorback);
  },
  /*app*/
  editApp(data, errorback) {
    return request._post('/shop/appsetting.app/index', data, errorback);
  },
  /*app开放平台*/
  appopenDetail(data, errorback) {
    return request._get('/shop/appsetting.appopen/index', data, errorback);
  },
  /*app开放平台*/
  editAppOpen(data, errorback) {
    return request._post('/shop/appsetting.appopen/index', data, errorback);
  },
  /*app分享*/
  appshareDetail(data, errorback) {
    return request._get('/shop/appsetting.appshare/index', data, errorback);
  },
  /*app分享*/
  editAppShare(data, errorback) {
    return request._post('/shop/appsetting.appshare/index', data, errorback);
  },
  /*app升级-列表*/
  appUpdateList(data, errorback) {
    return request._post('/shop/appsetting.appupdate/index', data, errorback);
  },
  /*app升级-新增*/
  addAppUpdate(data, errorback) {
    return request._get('/shop/appsetting.appupdate/add', data, errorback);
  },
  /*app升级-修改*/
  editAppUpdate(data, errorback) {
    return request._post('/shop/appsetting.appupdate/edit', data, errorback);
  },
  /*app升级-删除*/
  delAppUpdate(data, errorback) {
    return request._post('/shop/appsetting.appupdate/delete', data, errorback);
  },
  /*h5支付宝支付*/
  h5AlipayDetail(data, errorback) {
    return request._get('/shop/appsetting.apph5/pay', data, errorback);
  },
  /*app支付宝支付*/
  editH5Alipay(data, errorback) {
    return request._post('/shop/appsetting.apph5/pay', data, errorback);
  },
  /*支付方式*/
  payDetail(data, errorback) {
    return request._get('/shop/appsetting.app/pay', data, errorback);
  },
  /*支付方式*/
  editPay(data, errorback) {
    return request._post('/shop/appsetting.app/pay', data, errorback);
  },
}

export default AppSettingApi;
