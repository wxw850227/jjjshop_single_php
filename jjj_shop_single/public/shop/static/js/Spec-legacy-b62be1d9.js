System.register(["./element-plus-legacy-cd39421e.js","./Single-legacy-f89c3ee6.js","./Many-legacy-da594a26.js","./index-legacy-058fe4de.js","./@vue-legacy-3fcc10b7.js","./@vueuse-legacy-bdd63cbd.js","./lodash-es-legacy-7c31c52b.js","./async-validator-legacy-aa1fd2de.js","./dayjs-legacy-b61d7302.js","./call-bind-legacy-93acd607.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-053c792c.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./product-legacy-44b94f10.js","./Upload-legacy-bb7b8c53.js","./AddCategory-legacy-933ea9bc.js","./file-legacy-a3869a11.js","./Upload.vue_vue_type_style_index_0_scoped_e92f80dd_lang-legacy-00f7475a.js","./vue-router-legacy-51ef7ec5.js","./pinia-legacy-9b6e299c.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-bbbea217.js","./side-channel-legacy-25200cf8.js","./object-inspect-legacy-b217d60b.js","./vue-clipboard2-legacy-3536b1d9.js","./clipboard-legacy-531f08f2.js","./vue-ueditor-wrap-legacy-8e203191.js"],(function(e,l){"use strict";var n,c,u,a,t,s,o,r,d,y,i,f,g,m,j;return{setters:[function(e){n=e.i,c=e.F,u=e.e},function(e){a=e.default},function(e){t=e.default},function(e){s=e._},function(e){o=e.ae,r=e.o,d=e.c,y=e.P,i=e.S,f=e.W,g=e.T,m=e.Y,j=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l={components:{Single:a,Many:t},inject:["form"]},p={class:"basic-setting-content pl16 pr16"},_=j("div",{class:"common-form"},"规格/库存",-1),v={key:0,class:"red ww100"};e("default",s(l,[["render",function(e,l,a,t,s,j){var b=n,k=c,S=u,h=o("Single"),V=o("Many");return r(),d("div",p,[_,y(S,{label:"库存计算方式："},{default:i((function(){return[y(k,{modelValue:j.form.model.deduct_stock_type,"onUpdate:modelValue":l[0]||(l[0]=function(e){return j.form.model.deduct_stock_type=e})},{default:i((function(){return[y(b,{label:10},{default:i((function(){return[f("下单减库存")]})),_:1}),y(b,{label:20},{default:i((function(){return[f("付款减库存")]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),y(S,{label:"产品规格："},{default:i((function(){return[y(k,{modelValue:j.form.model.spec_type,"onUpdate:modelValue":l[1]||(l[1]=function(e){return j.form.model.spec_type=e})},{default:i((function(){return[!j.form.isSpecLocked||j.form.isSpecLocked&&10==j.form.model.spec_type?(r(),g(b,{key:0,label:10},{default:i((function(){return[f("单规格")]})),_:1})):m("",!0),!j.form.isSpecLocked||j.form.isSpecLocked&&20==j.form.model.spec_type?(r(),g(b,{key:1,label:20},{default:i((function(){return[f("多规格")]})),_:1})):m("",!0)]})),_:1},8,["modelValue"]),j.form.isSpecLocked?(r(),d("div",v,"此商品正在参加活动，不能修改规格")):m("",!0)]})),_:1}),10==j.form.model.spec_type?(r(),g(h,{key:0})):m("",!0),20==j.form.model.spec_type?(r(),g(V,{key:1})):m("",!0)])}]]))}}}));
