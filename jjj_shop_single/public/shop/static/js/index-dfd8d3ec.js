import{_ as a}from"./Upload-b4b0cf8c.js";import{E as e,d as s,e as o,f as t,c as i}from"./element-plus-68e4b1c7.js";import{S as l}from"./setting-688fb592.js";import{_ as m}from"./index-d5abae2c.js";import{ap as r,o as d,c as p,P as n,S as u,a as c,W as j,$ as f,T as h,Y as g}from"./@vue-76da2f05.js";import"./AddCategory-f060626c.js";import"./file-c3df6c02.js";/* empty css                                                               */import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const _={components:{Upload:a},data:()=>({loading:!0,formData:{qq:"",wechat:"",mp_image:""},isupload:!1}),created(){this.getParams()},methods:{getParams(){let a=this;l.getMpService({},!0).then((e=>{1==e.code&&(a.formData=e.data.vars.values,a.loading=!1)})).catch((a=>{}))},onSubmit(){let a=this,s=this.formData;a.$refs.formData.validate((o=>{o&&(a.loading=!0,l.setMpService(s,!0).then((s=>{a.loading=!1,e({message:"恭喜你， 客服设置成功",type:"success"})})).catch((e=>{a.loading=!1})))}))},chooseImg(){this.isupload=!0},returnImgsFunc(a){this.isupload=!1,this.formData.mp_image=a[0].file_path}}},v=c("div",{class:"common-form"},"客服设置",-1),b={class:"ww100"},w={class:"mt10",width:200},y={class:"common-button-wrapper"};const D=m(_,[["render",function(e,l,m,_,D,q){const x=s,k=o,I=t,Q=i,S=a,V=r("img-url");return d(),p("div",null,[n(Q,{size:"small",ref:"formData",model:D.formData,"label-width":"150px"},{default:u((()=>[v,n(k,{label:"QQ",rules:[{required:!0,message:"请输入QQ"}]},{default:u((()=>[n(x,{type:"number",modelValue:D.formData.qq,"onUpdate:modelValue":l[0]||(l[0]=a=>D.formData.qq=a),placeholder:"请输入QQ",class:"max-w460"},null,8,["modelValue"])])),_:1}),n(k,{label:"微信号",rules:[{required:!0,message:"请输入微信号"}]},{default:u((()=>[n(x,{modelValue:D.formData.wechat,"onUpdate:modelValue":l[1]||(l[1]=a=>D.formData.wechat=a),placeholder:"请输入微信号",class:"max-w460"},null,8,["modelValue"])])),_:1}),n(k,{label:"公众号二维码",rules:[{required:!0,message:"请输入上传公众号二维码"}]},{default:u((()=>[c("div",b,[n(I,{onClick:q.chooseImg},{default:u((()=>[j("选择图片")])),_:1},8,["onClick"])]),f(c("img",w,null,512),[[V,D.formData.mp_image]])])),_:1}),c("div",y,[n(I,{size:"small",type:"primary",onClick:q.onSubmit,disabled:D.loading},{default:u((()=>[j("提交")])),_:1},8,["onClick","disabled"])])])),_:1},8,["model"]),D.isupload?(d(),h(S,{key:0,isupload:D.isupload,config:{total:3},onReturnImgs:q.returnImgsFunc},null,8,["isupload","onReturnImgs"])):g("",!0)])}]]);export{D as default};
