import{E as s,i as t,e,f as a,c as o}from"./element-plus-68e4b1c7.js";import{A as p}from"./appsetting-7ec45d29.js";import{_ as r}from"./index-d5abae2c.js";import{o as i,c as m,P as l,S as n,a as d,W as c}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const u={data:()=>({form:{passport_open:0,passport_type:10}}),created(){this.getData()},methods:{getData(){let s=this;p.appDetail({},!0).then((t=>{s.form.passport_open=t.data.data.passport_open,s.form.passport_type=t.data.data.passport_type})).catch((s=>{}))},onSubmit(){let t=this,e=this.form;p.editApp(e,!0).then((e=>{s({message:"恭喜你，设置成功",type:"success"}),t.$router.push("/appsetting/app/index")})).catch((s=>{}))},handleCheckedCitiesChange(s){}}},j={class:"product-add"},h=d("div",{class:"common-form"},"通行证设置",-1),f=d("div",{class:"gray"},[c(" 目前仅支持微信开放平台，未来会支持手机号、用户名。如未注册或未绑定微信开放平台，请前往 "),d("a",{href:"https://open.weixin.qq.com",target:"_blank",class:"blue"},"微信开放平台")],-1),b={class:"common-button-wrapper"};const _=r(u,[["render",function(s,p,r,u,_,y){const v=t,g=e,x=a,k=o;return i(),m("div",j,[l(k,{size:"small",ref:"form",model:_.form,"label-width":"200px"},{default:n((()=>[h,l(g,{label:"通行证类型"},{default:n((()=>[d("div",null,[l(v,{modelValue:_.form.passport_type,"onUpdate:modelValue":p[0]||(p[0]=s=>_.form.passport_type=s),label:10},{default:n((()=>[c("微信开放平台")])),_:1},8,["modelValue"])]),f])),_:1}),d("div",b,[l(x,{type:"primary",onClick:y.onSubmit},{default:n((()=>[c("提交")])),_:1},8,["onClick"])])])),_:1},8,["model"])])}]]);export{_ as default};
