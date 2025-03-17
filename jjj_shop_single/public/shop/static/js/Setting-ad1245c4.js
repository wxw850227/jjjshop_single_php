import{E as e,G as a,d as r,e as l,i as s,h as o,f as i,j as t,c as d}from"./element-plus-68e4b1c7.js";import{S as n}from"./sign-d641b576.js";import{U as m}from"./UE-de93c921.js";import{ae as p,o as u,c,P as _,S as f,a as g,$ as v,W as b,Y as h,Q as w,a9 as j,a0 as V,bb as y,b9 as x}from"./@vue-76da2f05.js";import{_ as U}from"./index-c1104e7d.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./Upload-3b016181.js";import"./AddCategory-35fb7824.js";import"./file-9f429f58.js";/* empty css                                                               */import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const C={components:{Uediter:m},data(){return{ueditor:{text:"",config:{initialFrameWidth:400,initialFrameHeight:500}},form:{is_open:!1,is_increase:!1,increase_reward:0,no_increase:0,ever_sign:0,reward_data:[]},loading:!0,rules:{ever_sign:[{required:!0,message:"每日签到送积分有误",trigger:"blur"}],increase_reward:[{required:!0,message:"请输入第二天起递增积分数",trigger:"blur"}],no_increase:[{required:!0,message:"请输入第几天不再递增",trigger:"blur"}],reward_data:[{validator:(e,a,r)=>{a.length<1?r(new Error("请添加至少一项额外奖励！")):r()},required:!0,trigger:"blur"}],day:[{validator:(e,a,r)=>{this.form.reward_data.lenght<1||""===a&&r(new Error("天数不能为空！")),r()},required:!0,trigger:"blur"}],point:[{validator:(e,a,r)=>{""===a?r(new Error("请输入连续签到积分数！")):r()},required:!0,trigger:"blur"}]}}},created(){this.getData()},methods:{contentChangeFunc(e){this.ueditor.text=e},getData(){let e=this;e.loading=!0,n.getData().then((a=>{e.loading=!1;let r=a.data.vars.values;if(1==r.is_increase&&(e.form.is_increase=!0),1==r.is_open&&(e.form.is_open=!0,e.form.increase_reward=r.increase_reward,e.form.no_increase=r.no_increase,e.form.ever_sign=r.ever_sign,e.form.ever_sign=r.ever_sign,e.ueditor.text=r.content,r.reward_data)){let a=r.reward_data.length;for(let e=0;e<a;e++){let a=r.reward_data[e];1==a.is_coupon?a.is_coupon=!0:a.is_coupon=!1,1==a.is_point?a.is_point=!0:a.is_point=!1}e.form.reward_data=r.reward_data}})).catch((e=>{}))},onSubmit(){let a=this,r=a.form;r.is_open&&(r.content=a.ueditor.text),a.loading=!0,a.$refs.ruleForm.validate((l=>{l&&n.saveData(r,!0).then((r=>{e({message:"恭喜你，保存成功",type:"success"}),a.getData()})).catch((e=>{}))}))},getContent:function(){return this.editor?this.editor.getContent():""},addReward(){this.form.reward_data.push({day:0,is_point:!1,point:0,is_coupon:!1,coupon:[]})},deleteRewardClick(e){this.form.reward_data.splice(e,1)}}},k=e=>(y("data-v-dae5b1ed"),e=e(),x(),e),q={key:0},z={class:"open-sign"},F=k((()=>g("span",{class:"gray9"},"是否开启签到有礼",-1))),D={class:"mt16"},E=k((()=>g("div",{class:"common-form"},"每日签到固定奖励",-1))),R={class:"max-w460 d-s-c"},S={class:"flex-1"},P=k((()=>g("span",{class:"ml10"},"积分",-1))),$={key:0,class:"max-w460 border p-0-20 pt16 mt10"},W={class:"d-s-c"},A={class:"flex-1"},G=k((()=>g("span",{class:"ml10"},"积分",-1))),H={class:"d-s-c"},I={class:"flex-1"},J=k((()=>g("span",{class:"ml10"},"天起不再递增",-1))),N=k((()=>g("div",{class:"common-form"},"连续签到额外奖励 （达到额外奖励最大天数时，继续签到不会再获得额外奖励，断签后重新开始计算）",-1))),O={class:"reward-list max-w460"},Q={class:"d-s-c"},Y={class:"flex-1"},B=k((()=>g("span",{class:"ml10 pr16"},"天",-1))),K={class:"d-s-c"},L={key:0},M={class:"d-s-c"},T={class:"flex-1"},X=k((()=>g("span",{class:"ml10 pr16"},"积分",-1))),Z=k((()=>g("div",{class:"common-form"},"规则",-1))),ee={class:"edit_container"},ae={class:"common-button-wrapper"};const re=U(C,[["render",function(e,n,m,y,x,U){const C=a,k=r,re=l,le=s,se=o,oe=i,ie=t,te=p("Uediter"),de=d;return x.loading?h("",!0):(u(),c("div",q,[_(de,{size:"small",model:x.form,rules:x.rules,ref:"ruleForm","label-width":"100px"},{default:f((()=>[g("div",z,[F,_(C,{modelValue:x.form.is_open,"onUpdate:modelValue":n[0]||(n[0]=e=>x.form.is_open=e),class:"ml10"},null,8,["modelValue"])]),v(g("div",D,[E,_(re,{label:"每日签到送",prop:"ever_sign"},{default:f((()=>[g("div",R,[g("div",S,[_(k,{modelValue:x.form.ever_sign,"onUpdate:modelValue":n[1]||(n[1]=e=>x.form.ever_sign=e),placeholder:"0",type:"number"},null,8,["modelValue"])]),P])])),_:1}),_(re,{label:"递增奖励"},{default:f((()=>[_(se,null,{default:f((()=>[_(le,{modelValue:x.form.is_increase,"onUpdate:modelValue":n[2]||(n[2]=e=>x.form.is_increase=e),label:!0},{default:f((()=>[b("有")])),_:1},8,["modelValue"]),_(le,{modelValue:x.form.is_increase,"onUpdate:modelValue":n[3]||(n[3]=e=>x.form.is_increase=e),label:!1},{default:f((()=>[b("无")])),_:1},8,["modelValue"])])),_:1}),x.form.is_increase?(u(),c("div",$,[_(re,{label:"第二天起递增奖励","label-width":"120px",prop:"increase_reward"},{default:f((()=>[g("div",W,[g("div",A,[_(k,{modelValue:x.form.increase_reward,"onUpdate:modelValue":n[4]||(n[4]=e=>x.form.increase_reward=e),placeholder:"请输入第二天起递增积分数",min:"0",type:"number"},null,8,["modelValue"])]),G])])),_:1}),_(re,{label:"第","label-width":"120px",prop:"no_increase"},{default:f((()=>[g("div",H,[g("div",I,[_(k,{modelValue:x.form.no_increase,"onUpdate:modelValue":n[5]||(n[5]=e=>x.form.no_increase=e),placeholder:"请输入第几天不再递增",min:"0",type:"number"},null,8,["modelValue"])]),J])])),_:1})])):h("",!0)])),_:1}),N,_(re,{label:"额外奖励"},{default:f((()=>[g("div",O,[(u(!0),c(w,null,j(x.form.reward_data,((e,a)=>(u(),c("div",{class:"reward-item pr border",key:a},[_(oe,{class:"delete-reward",onClick:e=>U.deleteRewardClick(a),type:"danger",size:"small",icon:"Close",circle:""},null,8,["onClick"]),_(re,{label:"连续签到",prop:"reward_data."+a+".day",rules:x.rules.day},{default:f((()=>[g("div",Q,[g("div",Y,[_(k,{modelValue:e.day,"onUpdate:modelValue":a=>e.day=a,placeholder:"请输入连续签到天数",class:"max-w460",type:"number",min:"0"},null,8,["modelValue","onUpdate:modelValue"])]),B])])),_:2},1032,["prop","rules"]),_(re,{label:"积分奖励"},{default:f((()=>[g("div",K,[g("div",null,[_(ie,{modelValue:e.is_point,"onUpdate:modelValue":a=>e.is_point=a},null,8,["modelValue","onUpdate:modelValue"])]),e.is_point?(u(),c("div",L,[_(re,{label:"送","label-width":"40px",prop:"reward_data."+a+".point",rules:x.rules.point,style:{"margin-bottom":"0"}},{default:f((()=>[g("div",M,[g("div",T,[_(k,{modelValue:e.point,"onUpdate:modelValue":a=>e.point=a,placeholder:"请输入连续签到天数的积分",type:"number",min:"0"},null,8,["modelValue","onUpdate:modelValue"])]),X])])),_:2},1032,["prop","rules"])])):h("",!0)])])),_:2},1024)])))),128))]),_(se,null,{default:f((()=>[_(oe,{size:"small",icon:"Plus",onClick:U.addReward},{default:f((()=>[b("添加")])),_:1},8,["onClick"])])),_:1})])),_:1}),Z,_(re,{label:"规则说明："},{default:f((()=>[g("div",ee,[_(te,{text:x.ueditor.text,config:x.ueditor.config,ref:"ue",onContentChange:U.contentChangeFunc},null,8,["text","config","onContentChange"])])])),_:1})],512),[[V,x.form.is_open]]),g("div",ae,[_(oe,{type:"primary",size:"small",onClick:U.onSubmit,disabled:x.loading},{default:f((()=>[b("提交")])),_:1},8,["onClick","disabled"])])])),_:1},8,["model","rules"])]))}],["__scopeId","data-v-dae5b1ed"]]);export{re as default};
