import{E as s,d as t,e as a,f as e,c as o}from"./element-plus-68e4b1c7.js";import{A as p}from"./appsetting-e0b6b507.js";import{_ as r}from"./index-c1104e7d.js";import{o as i,c as m,P as l,S as d,a as n,W as c,bb as u,b9 as j}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const f={data:()=>({form:{}}),created(){this.getData()},methods:{getData(){let s=this;p.appwxDetail({},!0).then((t=>{null!=t.data.data&&(s.form=t.data.data)})).catch((s=>{}))},onSubmit(){let t=this,a=this.form;p.editAppWx(a,!0).then((a=>{s({message:"恭喜你，设置成功",type:"success"}),t.$router.push("/appsetting/appwx/index")})).catch((s=>{}))}}},h={class:"product-add"},b=(s=>(u("data-v-4ee4a88d"),s=s(),j(),s))((()=>n("div",{class:"common-form"},"小程序设置",-1))),x={class:"common-button-wrapper"};const w=r(f,[["render",function(s,p,r,u,j,f){const w=t,v=a,_=e,y=o;return i(),m("div",h,[l(y,{size:"small",ref:"form",model:j.form,"label-width":"250px"},{default:d((()=>[b,l(v,{label:"AppID 小程序ID"},{default:d((()=>[l(w,{modelValue:j.form.wxapp_id,"onUpdate:modelValue":p[0]||(p[0]=s=>j.form.wxapp_id=s),class:"max-w460"},null,8,["modelValue"])])),_:1}),l(v,{label:"AppSecret 小程序密钥"},{default:d((()=>[l(w,{modelValue:j.form.wxapp_secret,"onUpdate:modelValue":p[1]||(p[1]=s=>j.form.wxapp_secret=s),type:"password",class:"max-w460"},null,8,["modelValue"])])),_:1}),n("div",x,[l(_,{type:"primary",onClick:f.onSubmit},{default:d((()=>[c("提交")])),_:1},8,["onClick"])])])),_:1},8,["model"])])}],["__scopeId","data-v-4ee4a88d"]]);export{w as default};
