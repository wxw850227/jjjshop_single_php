!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n,o){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,n||"default");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}System.register(["./index-legacy-058fe4de.js"],(function(e,n){"use strict";var o;return{setters:[function(e){o=e.r}],execute:function(){var n;e("P",(t(n={detail:function(e,t){return o._post("/shop/page.page/detail",e,t)},toAddPage:function(e,t){return o._get("/shop/page.page/add",e,t)},addPage:function(e,t){return o._post("/shop/page.page/add",e,t)},HomeList:function(e,t){return o._post("/shop/page.page/list",e,t)},PageList:function(e,t){return o._post("/shop/page.page/index",e,t)},deletePage:function(e,t){return o._post("/shop/page.page/delete",e,t)},setHome:function(e,t){return o._post("/shop/page.page/setHome",e,t)},setPage:function(e,t){return o._post("/shop/page.page/setPage",e,t)},editPage:function(e,t){return o._get("/shop/page.page/edit",e,t)},pageEdit:function(e,t){return o._post("/shop/page.page/edit",e,t)},addhome:function(e,t){return o._post("/shop/page.page/addPage",e,t)},getHome:function(e,t){return o._get("/shop/page.page/addPage",e,t)}},"addhome",(function(e,t){return o._post("/shop/page.page/addPage",e,t)})),t(n,"getEdit",(function(e,t){return o._get("/shop/page.page/editPage",e,t)})),t(n,"editHome",(function(e,t){return o._post("/shop/page.page/editPage",e,t)})),t(n,"getCategory",(function(e,t){return o._get("/shop/page.page/category",e,t)})),t(n,"postCategory",(function(e,t){return o._post("/shop/page.page/category",e,t)})),t(n,"getTabbar",(function(e,t){return o._get("/shop/page.tabbar/index",e,t)})),t(n,"editTabbar",(function(e,t){return o._post("/shop/page.tabbar/edit",e,t)})),t(n,"menuList",(function(e,t){return o._post("/shop/page.center/index",e,t)})),t(n,"addMenu",(function(e,t){return o._post("/shop/page.center/add",e,t)})),t(n,"menuDetail",(function(e,t){return o._get("/shop/page.center/edit",e,t)})),t(n,"editMenu",(function(e,t){return o._post("/shop/page.center/edit",e,t)})),t(n,"deleteMenu",(function(e,t){return o._post("/shop/page.center/delete",e,t)})),t(n,"themeDetail",(function(e,t){return o._get("/shop/page.theme/index",e,t)})),t(n,"editTheme",(function(e,t){return o._post("/shop/page.theme/index",e,t)})),n))}}}))}();
