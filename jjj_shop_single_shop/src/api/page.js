import request from '@/utils/request'

let PageApi = {

    /*获取数据*/
    detail(data, errorback) {
        return request._post('/shop/page.page/detail', data, errorback);
    },
    /*上架样式*/
    toAddPage(data, errorback) {
        return request._get('/shop/page.page/add', data, errorback);
    },
    /*上架样式*/
    addPage(data, errorback) {
        return request._post('/shop/page.page/add', data, errorback);
    },
    /*首页模板列表*/
    HomeList(data, errorback) {
        return request._post('/shop/page.page/list', data, errorback);
    },
    /*页面列表*/
    PageList(data, errorback) {
        return request._post('/shop/page.page/index', data, errorback);
    },
    /*删除页面*/
    deletePage(data, errorback) {
        return request._post('/shop/page.page/delete', data, errorback);
    },
    /*设为首页*/
    setHome(data, errorback) {
        return request._post('/shop/page.page/setHome', data, errorback);
    },
    /*设为首页*/
    setPage(data, errorback) {
        return request._post('/shop/page.page/setPage', data, errorback);
    },
    /*编辑页面*/
    editPage(data, errorback) {
        return request._get('/shop/page.page/edit', data, errorback);
    },
    /*编辑页面*/
    pageEdit(data, errorback) {
        return request._post('/shop/page.page/edit', data, errorback);
    },
    /*保存编辑页面*/
    addhome(data, errorback) {
        return request._post('/shop/page.page/addPage', data, errorback);
    },
    /*编辑页面*/
    getHome(data, errorback) {
        return request._get('/shop/page.page/addPage', data, errorback);
    },
    /*保存编辑页面*/
    addhome(data, errorback) {
        return request._post('/shop/page.page/addPage', data, errorback);
    },
    getEdit(data, errorback) {
        return request._get('/shop/page.page/editPage', data, errorback);
    },
    editHome(data, errorback) {
        return request._post('/shop/page.page/editPage', data, errorback);
    },
    /*获取分类*/
    getCategory(data, errorback) {
        return request._get('/shop/page.page/category', data, errorback);
    },
    /*提交分类*/
    postCategory(data, errorback) {
        return request._post('/shop/page.page/category', data, errorback);
    },
    getTabbar(data, errorback) {
        return request._get('/shop/page.tabbar/index', data, errorback);
    },
    editTabbar(data, errorback) {
        return request._post('/shop/page.tabbar/edit', data, errorback);
    },
    /*个人中心菜单列表*/
    menuList(data, errorback) {
      return request._post('/shop/page.center/index', data, errorback);
    },
    /*添加个人中心菜单*/
    addMenu(data, errorback) {
      return request._post('/shop/page.center/add', data, errorback);
    },
    /*个人中心菜单详情*/
    menuDetail(data, errorback) {
      return request._get('/shop/page.center/edit', data, errorback);
    },
    /*修改个人中心菜单*/
    editMenu(data, errorback) {
      return request._post('/shop/page.center/edit', data, errorback);
    },
    /*删除个人中心菜单*/
    deleteMenu(data, errorback) {
      return request._post('/shop/page.center/delete', data, errorback);
    },
    /*主题详情*/
    themeDetail(data, errorback) {
      return request._get('/shop/page.theme/index', data, errorback);
    },
    /*修改广告*/
    editTheme(data, errorback) {
      return request._post('/shop/page.theme/index', data, errorback);
    },
}

export default PageApi;
