System.register(["./element-plus-legacy-cd39421e.js","./setting-legacy-fcbaee14.js","./index-legacy-4f532ec6.js","./@vue-legacy-3fcc10b7.js","./@vueuse-legacy-bdd63cbd.js","./lodash-es-legacy-7c31c52b.js","./async-validator-legacy-aa1fd2de.js","./dayjs-legacy-b61d7302.js","./call-bind-legacy-93acd607.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-053c792c.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-51ef7ec5.js","./pinia-legacy-9b6e299c.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-bbbea217.js","./side-channel-legacy-25200cf8.js","./object-inspect-legacy-b217d60b.js","./vue-clipboard2-legacy-3536b1d9.js","./clipboard-legacy-531f08f2.js","./vue-ueditor-wrap-legacy-8e203191.js"],(function(e,l){"use strict";var n,r,t,a,u,o,i,s,c,d,m,p,f,_,E,y,g,N,U,v=document.createElement("style");return v.textContent=".tips{color:#ccc}\n",document.head.appendChild(v),{setters:[function(e){n=e.E,r=e.d,t=e.e,a=e.q,u=e.r,o=e.f,i=e.c},function(e){s=e.S},function(e){c=e._},function(e){d=e.o,m=e.c,p=e.P,f=e.S,_=e.Q,E=e.a9,y=e.T,g=e.Y,N=e.a,U=e.W},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l={data:function(){return{form:{printer_id:"",printer_name:"",printer_type:"",sort:1,print_times:"",FEI_E_YUN:{USER:"",UKEY:"",SN:""},PRINT_CENTER:{deviceNo:"",key:""}},loading:!1,type:[]}},created:function(){this.getData()},methods:{getData:function(){var e=this,l=this.$route.query.printer_id;s.printerDetail({printer_id:l},!0).then((function(l){var n=l.data.detail;e.type=l.data.printerType,e.form.printer_name=n.printer_name,e.form.printer_type=n.printer_type.value,e.form.sort=n.sort,e.form.printer_id=n.printer_id,e.form.print_times=n.print_times,"FEI_E_YUN"==n.printer_type.value&&(e.form.FEI_E_YUN.USER=n.printer_config.USER,e.form.FEI_E_YUN.UKEY=n.printer_config.UKEY,e.form.FEI_E_YUN.SN=n.printer_config.SN),"PRINT_CENTER"==n.printer_type.value&&(e.form.PRINT_CENTER.deviceNo=n.printer_config.deviceNo,e.form.PRINT_CENTER.key=n.printer_config.key)})).catch((function(e){}))},onSubmit:function(){var e=this,l=e.form;e.$refs.form.validate((function(r){r&&(e.loading=!0,s.editPrinter(l,!0).then((function(l){e.loading=!1,n({message:"恭喜你，修改成功",type:"success"}),e.$router.push("/setting/printer/index")})).catch((function(l){e.loading=!1})))}))}}},v={class:"product-add"},j=N("div",{class:"common-form"},"编辑小票打印机",-1),R=N("div",{class:"tips"},"目前支持 飞鹅打印机、365云打印",-1),V={key:0},I=N("div",{class:"tips"},"飞鹅云后台注册用户名",-1),b=N("div",{class:"tips"},"飞鹅云后台登录生成的UKEY",-1),T=N("div",{class:"tips"},"打印机编号为9位数字，查看飞鹅打印机底部贴纸上面的编号",-1),Y={key:1},h=N("div",{class:"tips"},"同一订单，打印的次数",-1),S=N("div",{class:"tips"},"数字越小越靠前",-1),C={class:"common-button-wrapper"};e("default",c(l,[["render",function(e,l,n,s,c,F){var x=r,P=t,k=a,q=u,w=o,K=i;return d(),m("div",v,[p(K,{size:"small",ref:"form",model:c.form,"label-width":"200px"},{default:f((function(){return[j,p(P,{label:"打印机名称 ",prop:"printer_name",rules:[{required:!0,message:" "}]},{default:f((function(){return[p(x,{modelValue:c.form.printer_name,"onUpdate:modelValue":l[0]||(l[0]=function(e){return c.form.printer_name=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),p(P,{label:"打印机类型 "},{default:f((function(){return[p(q,{modelValue:c.form.printer_type,"onUpdate:modelValue":l[1]||(l[1]=function(e){return c.form.printer_type=e}),placeholder:"请选择"},{default:f((function(){return[(d(!0),m(_,null,E(c.type,(function(e,l){return d(),y(k,{key:l,label:e,value:l},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"]),R]})),_:1}),"FEI_E_YUN"==c.form.printer_type?(d(),m("div",V,[p(P,{label:"USER",prop:"FEI_E_YUN.USER",rules:[{required:!0,message:" "}]},{default:f((function(){return[p(x,{modelValue:c.form.FEI_E_YUN.USER,"onUpdate:modelValue":l[2]||(l[2]=function(e){return c.form.FEI_E_YUN.USER=e}),class:"max-w460"},null,8,["modelValue"]),I]})),_:1}),p(P,{label:"UKEY",prop:"FEI_E_YUN.UKEY",rules:[{required:!0,message:" "}]},{default:f((function(){return[p(x,{modelValue:c.form.FEI_E_YUN.UKEY,"onUpdate:modelValue":l[3]||(l[3]=function(e){return c.form.FEI_E_YUN.UKEY=e}),class:"max-w460"},null,8,["modelValue"]),b]})),_:1}),p(P,{label:"打印机编号",prop:"FEI_E_YUN.SN",rules:[{required:!0,message:" "}]},{default:f((function(){return[p(x,{modelValue:c.form.FEI_E_YUN.SN,"onUpdate:modelValue":l[4]||(l[4]=function(e){return c.form.FEI_E_YUN.SN=e}),class:"max-w460"},null,8,["modelValue"]),T]})),_:1})])):g("",!0),"PRINT_CENTER"==c.form.printer_type?(d(),m("div",Y,[p(P,{label:"打印机编号 ",prop:"PRINT_CENTER.deviceNo",rules:[{required:!0,message:" "}]},{default:f((function(){return[p(x,{modelValue:c.form.PRINT_CENTER.deviceNo,"onUpdate:modelValue":l[5]||(l[5]=function(e){return c.form.PRINT_CENTER.deviceNo=e}),class:"max-w460"},null,8,["modelValue"])]})),_:1}),p(P,{label:"打印机秘钥",prop:"PRINT_CENTER.key",rules:[{required:!0,message:" "}]},{default:f((function(){return[p(x,{modelValue:c.form.PRINT_CENTER.key,"onUpdate:modelValue":l[6]||(l[6]=function(e){return c.form.PRINT_CENTER.key=e})},null,8,["modelValue"])]})),_:1})])):g("",!0),p(P,{label:"打印联数",prop:"print_times",rules:[{required:!0,message:" "}]},{default:f((function(){return[p(x,{modelValue:c.form.print_times,"onUpdate:modelValue":l[7]||(l[7]=function(e){return c.form.print_times=e}),type:"number",class:"max-w460"},null,8,["modelValue"]),h]})),_:1}),p(P,{label:"排序"},{default:f((function(){return[p(x,{modelValue:c.form.sort,"onUpdate:modelValue":l[8]||(l[8]=function(e){return c.form.sort=e}),type:"number",class:"max-w460"},null,8,["modelValue"]),S]})),_:1}),N("div",C,[p(w,{type:"primary",onClick:F.onSubmit,loading:c.loading},{default:f((function(){return[U("提交")]})),_:1},8,["onClick","loading"])])]})),_:1},8,["model"])])}]]))}}}));
