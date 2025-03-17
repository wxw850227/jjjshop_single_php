import{E as e,d as a,e as l,i as o,f as i,c as d}from"./element-plus-68e4b1c7.js";import{S as n}from"./setting-9399e923.js";import{_ as m}from"./index-c1104e7d.js";import{o as t,c as u,P as s,S as r,W as c,a as p,Y as f,bb as g,b9 as V}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const _={data:()=>({form:{radio:"local",max_image:"",max_video:"",engine:{qiniu:{},aliyun:{},qcloud:{}}},loading:!1}),created(){this.getData()},methods:{getData(){let e=this;n.storageDetail({},!0).then((a=>{let l=a.data.vars.values;e.form.radio=l.default,e.form.max_image=l.max_image,e.form.max_video=l.max_video,e.form.engine.qiniu=l.engine.qiniu,e.form.engine.aliyun=l.engine.aliyun,e.form.engine.qcloud=l.engine.qcloud})).catch((e=>{}))},onSubmit(){let a=this;a.loading=!0;let l=this.form;n.editStorage(l,!0).then((l=>{a.loading=!1,e({message:"恭喜你，上传设置成功",type:"success"})})).catch((e=>{a.loading=!1}))},getRadio(e){}}},b=e=>(g("data-v-d7792c99"),e=e(),V(),e),h={class:"product-add"},y=b((()=>p("div",{class:"common-form"},"文件上传设置",-1))),j=b((()=>p("div",{class:"tips"},"修改后请修改php上传配置后生效",-1))),q=b((()=>p("div",{class:"tips"},"修改后请修改php上传配置后生效",-1))),v={key:0},k=b((()=>p("div",{class:"tips"},"请补全http:// 或 https://，例如：http://static.cloud.com",-1))),x={key:1},U=b((()=>p("div",{class:"tips"},"请补全http:// 或 https://，例如：http://static.cloud.com",-1))),S={key:2},w=b((()=>p("div",{class:"tips"},"请填写地域简称，例如：ap-beijing、ap-hongkong、eu-frankfurt",-1))),C=b((()=>p("div",{class:"tips"},"请补全http:// 或 https://，例如：http://static.cloud.com",-1))),K={class:"common-button-wrapper"};const R=m(_,[["render",function(e,n,m,g,V,_){const b=a,R=l,D=o,E=i,A=d;return t(),u("div",h,[s(A,{size:"small",ref:"form",model:V.form,"label-width":"200px"},{default:r((()=>[y,s(R,{label:"最大图片上传"},{default:r((()=>[s(b,{modelValue:V.form.max_image,"onUpdate:modelValue":n[0]||(n[0]=e=>V.form.max_image=e),class:"max-w460"},{append:r((()=>[c("M")])),_:1},8,["modelValue"]),j])),_:1}),s(R,{label:"最大视频上传"},{default:r((()=>[s(b,{modelValue:V.form.max_video,"onUpdate:modelValue":n[1]||(n[1]=e=>V.form.max_video=e),class:"max-w460"},{append:r((()=>[c("M")])),_:1},8,["modelValue"]),q])),_:1}),s(R,{label:"默认上传方式"},{default:r((()=>[p("div",null,[s(D,{modelValue:V.form.radio,"onUpdate:modelValue":n[2]||(n[2]=e=>V.form.radio=e),label:"local",onChange:_.getRadio},{default:r((()=>[c("本地 (不推荐)")])),_:1},8,["modelValue","onChange"]),s(D,{modelValue:V.form.radio,"onUpdate:modelValue":n[3]||(n[3]=e=>V.form.radio=e),label:"qiniu",onChange:_.getRadio},{default:r((()=>[c("七牛云存储")])),_:1},8,["modelValue","onChange"]),s(D,{modelValue:V.form.radio,"onUpdate:modelValue":n[4]||(n[4]=e=>V.form.radio=e),label:"aliyun",onChange:_.getRadio},{default:r((()=>[c("阿里云OSS")])),_:1},8,["modelValue","onChange"]),s(D,{modelValue:V.form.radio,"onUpdate:modelValue":n[5]||(n[5]=e=>V.form.radio=e),label:"qcloud",onChange:_.getRadio},{default:r((()=>[c("腾讯云COS")])),_:1},8,["modelValue","onChange"])])])),_:1}),"qiniu"==V.form.radio?(t(),u("div",v,[s(R,{label:"存储空间名称 Bucket"},{default:r((()=>[s(b,{modelValue:V.form.engine.qiniu.bucket,"onUpdate:modelValue":n[6]||(n[6]=e=>V.form.engine.qiniu.bucket=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),s(R,{label:"ACCESS_KEY AK"},{default:r((()=>[s(b,{modelValue:V.form.engine.qiniu.access_key,"onUpdate:modelValue":n[7]||(n[7]=e=>V.form.engine.qiniu.access_key=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),s(R,{label:"SECRET_KEY SK"},{default:r((()=>[s(b,{modelValue:V.form.engine.qiniu.secret_key,"onUpdate:modelValue":n[8]||(n[8]=e=>V.form.engine.qiniu.secret_key=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),s(R,{label:"空间域名 Domain"},{default:r((()=>[s(b,{modelValue:V.form.engine.qiniu.domain,"onUpdate:modelValue":n[9]||(n[9]=e=>V.form.engine.qiniu.domain=e),class:"max-w460"},null,8,["modelValue"]),k])),_:1})])):f("",!0),"aliyun"==V.form.radio?(t(),u("div",x,[s(R,{label:"存储空间名称 Bucket"},{default:r((()=>[s(b,{modelValue:V.form.engine.aliyun.bucket,"onUpdate:modelValue":n[10]||(n[10]=e=>V.form.engine.aliyun.bucket=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),s(R,{label:"AccessKeyId"},{default:r((()=>[s(b,{modelValue:V.form.engine.aliyun.access_key_id,"onUpdate:modelValue":n[11]||(n[11]=e=>V.form.engine.aliyun.access_key_id=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),s(R,{label:"AccessKeySecret"},{default:r((()=>[s(b,{modelValue:V.form.engine.aliyun.access_key_secret,"onUpdate:modelValue":n[12]||(n[12]=e=>V.form.engine.aliyun.access_key_secret=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),s(R,{label:"空间域名 Domain"},{default:r((()=>[s(b,{modelValue:V.form.engine.aliyun.domain,"onUpdate:modelValue":n[13]||(n[13]=e=>V.form.engine.aliyun.domain=e),class:"max-w460"},null,8,["modelValue"]),U])),_:1})])):f("",!0),"qcloud"==V.form.radio?(t(),u("div",S,[s(R,{label:"存储空间名称 Bucket"},{default:r((()=>[s(b,{modelValue:V.form.engine.qcloud.bucket,"onUpdate:modelValue":n[14]||(n[14]=e=>V.form.engine.qcloud.bucket=e)},null,8,["modelValue"])])),_:1}),s(R,{label:"所属地域 Region"},{default:r((()=>[s(b,{modelValue:V.form.engine.qcloud.region,"onUpdate:modelValue":n[15]||(n[15]=e=>V.form.engine.qcloud.region=e)},null,8,["modelValue"]),w])),_:1}),s(R,{label:"SecretId"},{default:r((()=>[s(b,{modelValue:V.form.engine.qcloud.secret_id,"onUpdate:modelValue":n[16]||(n[16]=e=>V.form.engine.qcloud.secret_id=e)},null,8,["modelValue"])])),_:1}),s(R,{label:"SecretKey"},{default:r((()=>[s(b,{modelValue:V.form.engine.qcloud.secret_key,"onUpdate:modelValue":n[17]||(n[17]=e=>V.form.engine.qcloud.secret_key=e)},null,8,["modelValue"])])),_:1}),s(R,{label:"空间域名 Domain"},{default:r((()=>[s(b,{modelValue:V.form.engine.qcloud.domain,"onUpdate:modelValue":n[18]||(n[18]=e=>V.form.engine.qcloud.domain=e)},null,8,["modelValue"]),C])),_:1})])):f("",!0),p("div",K,[s(E,{type:"primary",onClick:_.onSubmit,loading:V.loading},{default:r((()=>[c("提交")])),_:1},8,["onClick","loading"])])])),_:1},8,["model"])])}],["__scopeId","data-v-d7792c99"]]);export{R as default};
