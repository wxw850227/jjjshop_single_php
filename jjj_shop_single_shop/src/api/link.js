import request from '@/utils/request'
let LinkApi = {
    /*获取数据列表*/
    getList(data, errorback) {
        return request._post('/shop/data.link/index', data, errorback);
    },
    /*获取数据列表*/
    getPageList(data, errorback) {
        return request._post('/shop/data.link/getPageList', data, errorback);
    },
}
export default LinkApi;
