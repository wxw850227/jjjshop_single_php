System.register(["./element-plus-legacy-cd39421e.js","./setting-legacy-705b8215.js","./index-legacy-058fe4de.js","./@vue-legacy-3fcc10b7.js","./@vueuse-legacy-bdd63cbd.js","./lodash-es-legacy-7c31c52b.js","./async-validator-legacy-aa1fd2de.js","./dayjs-legacy-b61d7302.js","./call-bind-legacy-93acd607.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-053c792c.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-51ef7ec5.js","./pinia-legacy-9b6e299c.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-bbbea217.js","./side-channel-legacy-25200cf8.js","./object-inspect-legacy-b217d60b.js","./vue-clipboard2-legacy-3536b1d9.js","./clipboard-legacy-531f08f2.js","./vue-ueditor-wrap-legacy-8e203191.js"],(function(e,l){"use strict";var n,a,t,s,u,o,r,c,d,i,m,f,g,y=document.createElement("style");return y.textContent=".tips{color:#ccc}\n",document.head.appendChild(y),{setters:[function(e){n=e.E,a=e.d,t=e.e,s=e.f,u=e.c},function(e){o=e.S},function(e){r=e._},function(e){c=e.o,d=e.c,i=e.P,m=e.S,f=e.a,g=e.W},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l={data:function(){return{loading:!1,form:{address_id:"",name:"",phone:"",sort:1,detail:""}}},created:function(){this.getData()},methods:{getData:function(){var e=this,l=this.$route.query.address_id;o.addressDetail({address_id:l},!0).then((function(l){var n=l.data.detail;e.form.address_id=n.address_id,e.form.name=n.name,e.form.phone=n.phone,e.form.detail=n.detail,e.form.sort=n.sort})).catch((function(e){}))},onSubmit:function(){var e=this,l=e.form;e.$refs.form.validate((function(a){a&&(e.loading=!0,o.editAddress(l,!0).then((function(l){e.loading=!1,n({message:"恭喜你，修改成功",type:"success"}),e.$router.push("/setting/address/index")})).catch((function(l){e.loading=!1})))}))}}},y={class:"product-add"},p=f("div",{class:"common-form"},"修改退货地址",-1),j=f("div",{class:"tips"},"数字越小越靠前",-1),h={class:"common-button-wrapper"};e("default",r(l,[["render",function(e,l,n,o,r,v){var b=a,V=t,_=s,x=u;return c(),d("div",y,[i(x,{size:"small",ref:"form",model:r.form,"label-width":"200px"},{default:m((function(){return[p,i(V,{label:"收货人姓名 ",prop:"name",rules:[{required:!0,message:" "}]},{default:m((function(){return[i(b,{modelValue:r.form.name,"onUpdate:modelValue":l[0]||(l[0]=function(e){return r.form.name=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),i(V,{label:"联系电话",prop:"phone",rules:[{required:!0,message:" "}]},{default:m((function(){return[i(b,{modelValue:r.form.phone,"onUpdate:modelValue":l[1]||(l[1]=function(e){return r.form.phone=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),i(V,{label:"详细地址",prop:"detail",rules:[{required:!0,message:" "}]},{default:m((function(){return[i(b,{modelValue:r.form.detail,"onUpdate:modelValue":l[2]||(l[2]=function(e){return r.form.detail=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),i(V,{label:"排序"},{default:m((function(){return[i(b,{modelValue:r.form.sort,"onUpdate:modelValue":l[3]||(l[3]=function(e){return r.form.sort=e}),type:"number",class:"max-w460"},null,8,["modelValue"]),j]})),_:1}),f("div",h,[i(_,{size:"small",type:"primary",onClick:l[4]||(l[4]=function(e){return v.onSubmit()}),loading:r.loading},{default:m((function(){return[g("提交")]})),_:1},8,["loading"])])]})),_:1},8,["model"])])}]]))}}}));
