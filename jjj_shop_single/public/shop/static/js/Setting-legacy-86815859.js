System.register(["./element-plus-legacy-cd39421e.js","./sign-legacy-18dd74e3.js","./UE-legacy-26c9cc6e.js","./@vue-legacy-3fcc10b7.js","./index-legacy-058fe4de.js","./@vueuse-legacy-bdd63cbd.js","./lodash-es-legacy-7c31c52b.js","./async-validator-legacy-aa1fd2de.js","./dayjs-legacy-b61d7302.js","./call-bind-legacy-93acd607.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-053c792c.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./Upload-legacy-bb7b8c53.js","./AddCategory-legacy-933ea9bc.js","./file-legacy-a3869a11.js","./Upload.vue_vue_type_style_index_0_scoped_e92f80dd_lang-legacy-00f7475a.js","./vue-router-legacy-51ef7ec5.js","./pinia-legacy-9b6e299c.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-bbbea217.js","./side-channel-legacy-25200cf8.js","./object-inspect-legacy-b217d60b.js","./vue-clipboard2-legacy-3536b1d9.js","./clipboard-legacy-531f08f2.js","./vue-ueditor-wrap-legacy-8e203191.js"],(function(e,n){"use strict";var l,a,r,t,i,o,u,s,d,c,f,m,p,g,_,v,y,b,h,w,j,x,V,C,U,k,q=document.createElement("style");return q.textContent=".open-sign[data-v-dae5b1ed]{padding:20px;background:#e2f0ff}.reward-list .reward-item[data-v-dae5b1ed]{margin-bottom:10px;padding:20px 20px 0}.reward-list .delete-reward[data-v-dae5b1ed]{position:absolute;top:-10px;right:-10px;cursor:pointer;z-index:10}.el-button--small.is-circle[data-v-dae5b1ed]{padding:4px}\n",document.head.appendChild(q),{setters:[function(e){l=e.E,a=e.G,r=e.d,t=e.e,i=e.i,o=e.h,u=e.f,s=e.j,d=e.c},function(e){c=e.S},function(e){f=e.U},function(e){m=e.ae,p=e.o,g=e.c,_=e.P,v=e.S,y=e.a,b=e.$,h=e.W,w=e.Y,j=e.Q,x=e.a9,V=e.a0,C=e.bb,U=e.b9},function(e){k=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n={components:{Uediter:f},data:function(){var e=this;return{ueditor:{text:"",config:{initialFrameWidth:400,initialFrameHeight:500}},form:{is_open:!1,is_increase:!1,increase_reward:0,no_increase:0,ever_sign:0,reward_data:[]},loading:!0,rules:{ever_sign:[{required:!0,message:"每日签到送积分有误",trigger:"blur"}],increase_reward:[{required:!0,message:"请输入第二天起递增积分数",trigger:"blur"}],no_increase:[{required:!0,message:"请输入第几天不再递增",trigger:"blur"}],reward_data:[{validator:function(e,n,l){n.length<1?l(new Error("请添加至少一项额外奖励！")):l()},required:!0,trigger:"blur"}],day:[{validator:function(n,l,a){e.form.reward_data.lenght<1||""===l&&a(new Error("天数不能为空！")),a()},required:!0,trigger:"blur"}],point:[{validator:function(e,n,l){""===n?l(new Error("请输入连续签到积分数！")):l()},required:!0,trigger:"blur"}]}}},created:function(){this.getData()},methods:{contentChangeFunc:function(e){this.ueditor.text=e},getData:function(){var e=this;e.loading=!0,c.getData().then((function(n){e.loading=!1;var l=n.data.vars.values;if(1==l.is_increase&&(e.form.is_increase=!0),1==l.is_open&&(e.form.is_open=!0,e.form.increase_reward=l.increase_reward,e.form.no_increase=l.no_increase,e.form.ever_sign=l.ever_sign,e.form.ever_sign=l.ever_sign,e.ueditor.text=l.content,l.reward_data)){for(var a=l.reward_data.length,r=0;r<a;r++){var t=l.reward_data[r];1==t.is_coupon?t.is_coupon=!0:t.is_coupon=!1,1==t.is_point?t.is_point=!0:t.is_point=!1}e.form.reward_data=l.reward_data}})).catch((function(e){}))},onSubmit:function(){var e=this,n=e.form;n.is_open&&(n.content=e.ueditor.text),e.loading=!0,e.$refs.ruleForm.validate((function(a){a&&c.saveData(n,!0).then((function(n){l({message:"恭喜你，保存成功",type:"success"}),e.getData()})).catch((function(e){}))}))},getContent:function(){return this.editor?this.editor.getContent():""},addReward:function(){this.form.reward_data.push({day:0,is_point:!1,point:0,is_coupon:!1,coupon:[]})},deleteRewardClick:function(e){this.form.reward_data.splice(e,1)}}},q=function(e){return C("data-v-dae5b1ed"),e=e(),U(),e},z={key:0},E={class:"open-sign"},F=q((function(){return y("span",{class:"gray9"},"是否开启签到有礼",-1)})),D={class:"mt16"},S=q((function(){return y("div",{class:"common-form"},"每日签到固定奖励",-1)})),R={class:"max-w460 d-s-c"},P={class:"flex-1"},$=q((function(){return y("span",{class:"ml10"},"积分",-1)})),W={key:0,class:"max-w460 border p-0-20 pt16 mt10"},A={class:"d-s-c"},G={class:"flex-1"},H=q((function(){return y("span",{class:"ml10"},"积分",-1)})),I={class:"d-s-c"},J={class:"flex-1"},N=q((function(){return y("span",{class:"ml10"},"天起不再递增",-1)})),O=q((function(){return y("div",{class:"common-form"},"连续签到额外奖励 （达到额外奖励最大天数时，继续签到不会再获得额外奖励，断签后重新开始计算）",-1)})),Q={class:"reward-list max-w460"},Y={class:"d-s-c"},B={class:"flex-1"},K=q((function(){return y("span",{class:"ml10 pr16"},"天",-1)})),L={class:"d-s-c"},M={key:0},T={class:"d-s-c"},X={class:"flex-1"},Z=q((function(){return y("span",{class:"ml10 pr16"},"积分",-1)})),ee=q((function(){return y("div",{class:"common-form"},"规则",-1)})),ne={class:"edit_container"},le={class:"common-button-wrapper"};e("default",k(n,[["render",function(e,n,l,c,f,C){var U=a,k=r,q=t,ae=i,re=o,te=u,ie=s,oe=m("Uediter"),ue=d;return f.loading?w("",!0):(p(),g("div",z,[_(ue,{size:"small",model:f.form,rules:f.rules,ref:"ruleForm","label-width":"100px"},{default:v((function(){return[y("div",E,[F,_(U,{modelValue:f.form.is_open,"onUpdate:modelValue":n[0]||(n[0]=function(e){return f.form.is_open=e}),class:"ml10"},null,8,["modelValue"])]),b(y("div",D,[S,_(q,{label:"每日签到送",prop:"ever_sign"},{default:v((function(){return[y("div",R,[y("div",P,[_(k,{modelValue:f.form.ever_sign,"onUpdate:modelValue":n[1]||(n[1]=function(e){return f.form.ever_sign=e}),placeholder:"0",type:"number"},null,8,["modelValue"])]),$])]})),_:1}),_(q,{label:"递增奖励"},{default:v((function(){return[_(re,null,{default:v((function(){return[_(ae,{modelValue:f.form.is_increase,"onUpdate:modelValue":n[2]||(n[2]=function(e){return f.form.is_increase=e}),label:!0},{default:v((function(){return[h("有")]})),_:1},8,["modelValue"]),_(ae,{modelValue:f.form.is_increase,"onUpdate:modelValue":n[3]||(n[3]=function(e){return f.form.is_increase=e}),label:!1},{default:v((function(){return[h("无")]})),_:1},8,["modelValue"])]})),_:1}),f.form.is_increase?(p(),g("div",W,[_(q,{label:"第二天起递增奖励","label-width":"120px",prop:"increase_reward"},{default:v((function(){return[y("div",A,[y("div",G,[_(k,{modelValue:f.form.increase_reward,"onUpdate:modelValue":n[4]||(n[4]=function(e){return f.form.increase_reward=e}),placeholder:"请输入第二天起递增积分数",min:"0",type:"number"},null,8,["modelValue"])]),H])]})),_:1}),_(q,{label:"第","label-width":"120px",prop:"no_increase"},{default:v((function(){return[y("div",I,[y("div",J,[_(k,{modelValue:f.form.no_increase,"onUpdate:modelValue":n[5]||(n[5]=function(e){return f.form.no_increase=e}),placeholder:"请输入第几天不再递增",min:"0",type:"number"},null,8,["modelValue"])]),N])]})),_:1})])):w("",!0)]})),_:1}),O,_(q,{label:"额外奖励"},{default:v((function(){return[y("div",Q,[(p(!0),g(j,null,x(f.form.reward_data,(function(e,n){return p(),g("div",{class:"reward-item pr border",key:n},[_(te,{class:"delete-reward",onClick:function(e){return C.deleteRewardClick(n)},type:"danger",size:"small",icon:"Close",circle:""},null,8,["onClick"]),_(q,{label:"连续签到",prop:"reward_data."+n+".day",rules:f.rules.day},{default:v((function(){return[y("div",Y,[y("div",B,[_(k,{modelValue:e.day,"onUpdate:modelValue":function(n){return e.day=n},placeholder:"请输入连续签到天数",class:"max-w460",type:"number",min:"0"},null,8,["modelValue","onUpdate:modelValue"])]),K])]})),_:2},1032,["prop","rules"]),_(q,{label:"积分奖励"},{default:v((function(){return[y("div",L,[y("div",null,[_(ie,{modelValue:e.is_point,"onUpdate:modelValue":function(n){return e.is_point=n}},null,8,["modelValue","onUpdate:modelValue"])]),e.is_point?(p(),g("div",M,[_(q,{label:"送","label-width":"40px",prop:"reward_data."+n+".point",rules:f.rules.point,style:{"margin-bottom":"0"}},{default:v((function(){return[y("div",T,[y("div",X,[_(k,{modelValue:e.point,"onUpdate:modelValue":function(n){return e.point=n},placeholder:"请输入连续签到天数的积分",type:"number",min:"0"},null,8,["modelValue","onUpdate:modelValue"])]),Z])]})),_:2},1032,["prop","rules"])])):w("",!0)])]})),_:2},1024)])})),128))]),_(re,null,{default:v((function(){return[_(te,{size:"small",icon:"Plus",onClick:C.addReward},{default:v((function(){return[h("添加")]})),_:1},8,["onClick"])]})),_:1})]})),_:1}),ee,_(q,{label:"规则说明："},{default:v((function(){return[y("div",ne,[_(oe,{text:f.ueditor.text,config:f.ueditor.config,ref:"ue",onContentChange:C.contentChangeFunc},null,8,["text","config","onContentChange"])])]})),_:1})],512),[[V,f.form.is_open]]),y("div",le,[_(te,{type:"primary",size:"small",onClick:C.onSubmit,disabled:f.loading},{default:v((function(){return[h("提交")]})),_:1},8,["onClick","disabled"])])]})),_:1},8,["model","rules"])]))}],["__scopeId","data-v-dae5b1ed"]]))}}}));
