import{E as e,d as s,e as l,f as a,i as o,F as t,g as i,c as r,v as m}from"./element-plus-68e4b1c7.js";import{_ as n}from"./Setlink-f9e4d770.js";import{_ as d}from"./Upload-b4b0cf8c.js";import{P as p}from"./page-7eccbdf3.js";import{_ as u,f as c}from"./index-d5abae2c.js";import{ap as f,$ as h,o as _,c as g,P as j,S as y,a as b,W as k,T as v,Y as x,X as V}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./Article-6004f402.js";import"./article-ea099f88.js";import"./product-a5c451ce.js";import"./AddCategory-f060626c.js";import"./file-c3df6c02.js";/* empty css                                                               */import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const w={components:{Upload:d,Setlink:n},data:()=>({loading:!0,isupload:!1,is_linkset:!1,form:{menu_id:0,name:"",icon:"",sort:1,is_show:"0",path:"",path_name:"",sys_tag:""}}),created(){this.getDetail()},methods:{changeLink(){this.is_linkset=!0},closeLinkset(e){this.is_linkset=!1,null!=e&&(e.url.startsWith("/")?this.form.path=e.url:this.form.path="/"+e.url,this.form.path_name="链接到 "+e.type+" "+e.name)},openUpload(){this.isupload=!0},returnImgsFunc(e){null!=e&&(this.form.icon=e[0].file_path),this.isupload=!1},getDetail(){let e=this;const s=e.$route.query.menu_id;p.menuDetail({menu_id:s},!0).then((s=>{e.form=c(e.form,s.data.model),e.loading=!1})).catch((e=>{}))},onSubmit(){let s=this,l=s.form;s.$refs.form.validate((a=>{a&&p.editMenu(l,!0).then((l=>{e({message:l.msg,type:"success"}),s.$router.push("/page/center/index")})).catch((e=>{}))}))},cancelFunc(){this.$router.push({path:"/page/center/index"})}}},C={class:"product-add pb50"},U=b("div",{class:"common-form"},"编辑菜单",-1),q={class:"mt10",width:48,alt:""},S=b("div",{style:{color:"red"}},"图标大小为:48*48",-1),z={class:"url-box flex-1"},D=b("span",null,null,-1),F={class:"tips",id:"tips",style:{color:"#000"}},I=b("div",{class:"url-box ml10",style:{float:"right"}},null,-1),L={class:"common-button-wrapper"};const $=u(w,[["render",function(e,p,u,c,w,$){const P=s,A=l,M=a,R=d,W=o,E=t,J=i,K=n,N=r,O=f("img-url"),T=m;return h((_(),g("div",C,[j(N,{size:"small",model:w.form,ref:"form","label-width":"100px"},{default:y((()=>[U,j(A,{label:"菜单名称",prop:"name",rules:[{required:!0,message:" "}]},{default:y((()=>[j(P,{modelValue:w.form.name,"onUpdate:modelValue":p[0]||(p[0]=e=>w.form.name=e),placeholder:"请输入菜单名称",class:"max-w460"},null,8,["modelValue"])])),_:1}),j(A,{label:"图标",prop:"icon",rules:[{required:!0,message:" "}]},{default:y((()=>[b("div",null,[j(M,{type:"primary",onClick:$.openUpload},{default:y((()=>[k("上传图片")])),_:1},8,["onClick"]),h(b("img",q,null,512),[[O,w.form.icon]]),S,w.isupload?(_(),v(R,{key:0,isupload:w.isupload,onReturnImgs:$.returnImgsFunc},{default:y((()=>[k("上传图片")])),_:1},8,["isupload","onReturnImgs"])):x("",!0)])])),_:1}),j(A,{label:"状态"},{default:y((()=>[j(E,{modelValue:w.form.is_show,"onUpdate:modelValue":p[1]||(p[1]=e=>w.form.is_show=e)},{default:y((()=>[j(W,{label:1},{default:y((()=>[k("显示")])),_:1}),j(W,{label:0},{default:y((()=>[k("隐藏")])),_:1})])),_:1},8,["modelValue"])])),_:1}),j(A,{label:"排序",prop:"sort",rules:[{required:!0,message:" "}]},{default:y((()=>[j(P,{type:"number",modelValue:w.form.sort,"onUpdate:modelValue":p[2]||(p[2]=e=>w.form.sort=e),placeholder:"请输入排序",class:"max-w460"},null,8,["modelValue"])])),_:1}),j(A,{label:"链接",prop:"path",rules:[{required:!0,message:" "}]},{default:y((()=>[j(J,null,{default:y((()=>[b("div",z,[j(P,{disabled:""!=w.form.sys_tag,modelValue:w.form.path,"onUpdate:modelValue":p[3]||(p[3]=e=>w.form.path=e),type:"text",class:"max-w460",style:{width:"380px","margin-right":"6px"}},null,8,["disabled","modelValue"]),j(M,{disabled:""!=w.form.sys_tag,type:"primary",onClick:p[4]||(p[4]=e=>$.changeLink())},{default:y((()=>[k("选择链接"),D])),_:1},8,["disabled"]),b("div",F,V(w.form.path_name),1),j(P,{modelValue:w.form.path_name,"onUpdate:modelValue":p[5]||(p[5]=e=>w.form.path_name=e),type:"hidden",class:"max-w460"},null,8,["modelValue"])]),I])),_:1})])),_:1}),w.is_linkset?(_(),v(K,{key:0,is_linkset:w.is_linkset,onCloseDialog:$.closeLinkset},{default:y((()=>[k("选择链接")])),_:1},8,["is_linkset","onCloseDialog"])):x("",!0),b("div",L,[j(M,{size:"small",type:"info",onClick:$.cancelFunc,loading:w.loading},{default:y((()=>[k("取消")])),_:1},8,["onClick","loading"]),j(M,{size:"small",type:"primary",onClick:$.onSubmit,loading:w.loading},{default:y((()=>[k("提交")])),_:1},8,["onClick","loading"])])])),_:1},8,["model"])])),[[T,w.loading]])}]]);export{$ as default};
