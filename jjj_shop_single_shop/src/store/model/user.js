import { defineStore } from 'pinia';
import { setCookie, getCookie, delCookie } from '@/utils/base.js';
import { setStorage, getStorage } from '@/utils/storageData';
import AuthApi from '@/api/auth.js';
import UserApi from '@/api/user.js';
import configObj from '@/config'; 
let { strongToken, renderMenu, menu } = configObj;
import { handRouterTable, handMenuData } from '@/utils/router';
export const useUserStore = defineStore('main', {
	state: () => {
		return {
			token: getStorage(strongToken),
			userInfo: getStorage('userInfo'),
			list: {},
			menus: getStorage(menu),
			renderMenus: getStorage(renderMenu),
		};
	},
	getters: {},
	actions: {
		bus_on(name, fn) {
			let self = this;
			self.list[name] = self.list[name] || [];
			self.list[name].push(fn);
		},
		// 发布
		bus_emit(name, data) {
			let self = this;
			if (self.list[name]) {
				self.list[name].forEach((fn) => {
					fn(data);
				});
			}
		},
		// 取消订阅
		bus_off(name) {
			let self = this;
			if (self.list[name]) {
				delete self.list[name];
			}
		},
		/**
		 * @description 登录
		 * @param {*} token
		 */
		async afterLogin(info) {
			this.userInfo = this.userInfo || {};
			const { data: { token, user_name, version, shop_name, app_id } } = info;
			const { data: { menus }} = await AuthApi.getRoleList({
				token,
			});
			let renderMenusList = handMenuData(JSON.parse(JSON.stringify(menus)));
			let menusList = handRouterTable(JSON.parse(JSON.stringify(menus)));
			setStorage(JSON.stringify(menusList), menu);
			setStorage(JSON.stringify(renderMenusList), renderMenu); 
			this.userInfo.userName = user_name;
			this.userInfo.version = version;
			this.userInfo.shopName = shop_name;
			this.userInfo.AppID = app_id;
			this.token = token;
			this.renderMenus = renderMenusList;
			this.menus = menusList;
			setStorage(JSON.stringify(token), strongToken); 
			setStorage(JSON.stringify(this.userInfo),'userInfo'); 
		},
		/**
		 * @description 退出登录
		 * @param {*} token
		 */
		afterLogout() {
			sessionStorage.clear();
			// deleteSessionStorage(null);
			// delCookie(strongToken,null);
			this.token = null;
			this.menus = null;
			this.userInfo = null;
			setStorage(null, 'userInfo');
		},
	}
});
export default useUserStore;