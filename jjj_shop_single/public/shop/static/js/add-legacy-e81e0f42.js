System.register(["./element-plus-legacy-cd39421e.js","./setting-legacy-705b8215.js","./index-legacy-058fe4de.js","./@vue-legacy-3fcc10b7.js","./@vueuse-legacy-bdd63cbd.js","./lodash-es-legacy-7c31c52b.js","./async-validator-legacy-aa1fd2de.js","./dayjs-legacy-b61d7302.js","./call-bind-legacy-93acd607.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-053c792c.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-51ef7ec5.js","./pinia-legacy-9b6e299c.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-bbbea217.js","./side-channel-legacy-25200cf8.js","./object-inspect-legacy-b217d60b.js","./vue-clipboard2-legacy-3536b1d9.js","./clipboard-legacy-531f08f2.js","./vue-ueditor-wrap-legacy-8e203191.js"],(function(e,l){"use strict";var n,o,a,s,t,u,c,r,i,d,m,f,p,g,y=document.createElement("style");return y.textContent=".tips{color:#ccc}\n",document.head.appendChild(y),{setters:[function(e){n=e.E,o=e.d,a=e.D,s=e.e,t=e.f,u=e.c},function(e){c=e.S},function(e){r=e._},function(e){i=e.o,d=e.c,m=e.P,f=e.S,p=e.a,g=e.W},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l={data:function(){return{loading:!1,form:{express_name:"",express_code:"",wx_code:"",sort:1}}},created:function(){},methods:{onSubmit:function(){var e=this,l=this.form;e.$refs.form.validate((function(o){o&&(e.loading=!0,c.addExpress(l,!0).then((function(l){e.loading=!1,n({message:"恭喜你，添加成功",type:"success"}),e.$router.push("/setting/express/index")})).catch((function(l){e.loading=!1})))}))},gotoCompany:function(){var e=window.location.protocol+"//"+window.location.host;window.location.href=e+"/express.xlsx"},gotoWxCompany:function(){var e=window.location.protocol+"//"+window.location.host;window.location.href=e+"/wx_express.xlsx"}}},y={class:"product-add"},x=p("div",{class:"common-form"},"新增物流公司",-1),j={class:"tips"},w=p("div",{class:"tips"},"用于快递100API查询物流信息，务必填写正确",-1),v={class:"tips"},_=p("div",{class:"tips"},"用于向小程序发货的物流公司id，下载微信物流表格对比快递100物流公司编码表，务必填写正确，没有找到编码不填",-1),h=p("div",{class:"tips"},"数字越小越靠前",-1),b={class:"common-button-wrapper"};e("default",r(l,[["render",function(e,l,n,c,r,V){var C=o,k=a,S=s,q=t,U=u;return i(),d("div",y,[m(U,{size:"small",ref:"form",model:r.form,"label-width":"200px"},{default:f((function(){return[x,m(S,{label:"物流公司名称 ",prop:"express_name",rules:[{required:!0,message:" "}]},{default:f((function(){return[m(C,{modelValue:r.form.express_name,"onUpdate:modelValue":l[0]||(l[0]=function(e){return r.form.express_name=e}),class:"max-w460"},null,8,["modelValue"]),p("div",j,[g("请对照 "),m(k,{type:"primary",underline:!1,onClick:l[1]||(l[1]=function(e){return V.gotoCompany()})},{default:f((function(){return[g(" 物流公司编码表 ")]})),_:1}),g(" 填写 ")])]})),_:1}),m(S,{label:"物流公司代码 ",prop:"express_code",rules:[{required:!0,message:" "}]},{default:f((function(){return[m(C,{modelValue:r.form.express_code,"onUpdate:modelValue":l[2]||(l[2]=function(e){return r.form.express_code=e}),class:"max-w460"},null,8,["modelValue"]),w]})),_:1}),m(S,{label:"微信物流公司id ",prop:"wx_code"},{default:f((function(){return[m(C,{modelValue:r.form.wx_code,"onUpdate:modelValue":l[3]||(l[3]=function(e){return r.form.wx_code=e}),class:"max-w460"},null,8,["modelValue"]),p("div",v,[g("请对照 "),m(k,{type:"primary",underline:!1,onClick:l[4]||(l[4]=function(e){return V.gotoWxCompany()})},{default:f((function(){return[g(" 微信物流公司编码表 ")]})),_:1}),g(" 填写 ")]),_]})),_:1}),m(S,{label:"排序"},{default:f((function(){return[m(C,{modelValue:r.form.sort,"onUpdate:modelValue":l[5]||(l[5]=function(e){return r.form.sort=e}),type:"number",class:"max-w460"},null,8,["modelValue"]),h]})),_:1}),p("div",b,[m(q,{type:"primary",onClick:V.onSubmit,loading:r.loading},{default:f((function(){return[g("提交")]})),_:1},8,["onClick","loading"])])]})),_:1},8,["model"])])}]]))}}}));
