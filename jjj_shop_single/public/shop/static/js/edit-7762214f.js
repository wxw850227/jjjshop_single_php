import{_ as e}from"./GetUser-6c0a1339.js";import{E as a,q as s,r as l,D as o,e as t,d as r,i,F as m,f as d,c as u}from"./element-plus-68e4b1c7.js";import{S as n}from"./store-b3f0a89a.js";import{_ as p,f as c}from"./index-c1104e7d.js";import{o as f,c as _,P as j,S as b,Q as h,a9 as v,T as k,a as g,W as V,bb as y,b9 as x}from"./@vue-76da2f05.js";import"./data-c9bec9a5.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const q={components:{GetUser:e},data:()=>({form:{clerk_id:null,store_id:"",status:"",real_name:"",mobile:""},open_add:!1,storeList:[],loading:!1}),created(){this.form.clerk_id=this.$route.query.clerk_id,this.getParams()},methods:{getParams(){let e=this;n.clerkDetail({clerk_id:e.form.clerk_id},!0).then((a=>{e.form=c(e.form,a.data.detail),e.form.status=a.data.detail.status.value,e.storeList=a.data.store_list})).catch((e=>{}))},onSubmit(){let e=this,s=e.form;e.$refs.form.validate((l=>{l&&(e.loading=!0,n.editClerk(s,!0).then((s=>{a({message:"恭喜你，修改成功",type:"success"}),e.$router.push("/store/clerk/index")})).catch((a=>{e.loading=!0})))}))},cancelFunc(){this.$router.back(-1)}}},w={class:"product-add"},C=(e=>(y("data-v-f2b874b6"),e=e(),x(),e))((()=>g("div",{class:"common-form"},"店员修改",-1))),U={class:"common-button-wrapper"};const z=p(q,[["render",function(a,n,p,c,y,x){const q=s,z=l,F=o,S=t,$=r,D=i,L=m,P=d,G=u,Q=e;return f(),_("div",w,[j(G,{size:"small",ref:"form",model:y.form,"label-width":"200px"},{default:b((()=>[C,j(S,{label:"所属门店"},{default:b((()=>[j(z,{modelValue:y.form.store_id,"onUpdate:modelValue":n[0]||(n[0]=e=>y.form.store_id=e),placeholder:"请选择"},{default:b((()=>[(f(!0),_(h,null,v(y.storeList,((e,a)=>(f(),k(q,{key:a,label:e.store_name,value:e.store_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),g("div",null,[j(F,{underline:!1,disabled:""},{default:b((()=>[V("请选择店员所属的门店，用于核销订单")])),_:1})])])),_:1}),j(S,{label:"店员姓名",prop:"real_name",rules:[{required:!0,message:" "}]},{default:b((()=>[j($,{class:"max-w460",modelValue:y.form.real_name,"onUpdate:modelValue":n[1]||(n[1]=e=>y.form.real_name=e),placeholder:"请输入店员姓名"},null,8,["modelValue"])])),_:1}),j(S,{label:"手机号",prop:"mobile",rules:[{required:!0,message:" "}]},{default:b((()=>[j($,{class:"max-w460",modelValue:y.form.mobile,"onUpdate:modelValue":n[2]||(n[2]=e=>y.form.mobile=e),placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1}),j(S,{label:"状态"},{default:b((()=>[j(L,{modelValue:y.form.status,"onUpdate:modelValue":n[3]||(n[3]=e=>y.form.status=e)},{default:b((()=>[j(D,{label:1},{default:b((()=>[V("启用")])),_:1}),j(D,{label:0},{default:b((()=>[V("禁用")])),_:1})])),_:1},8,["modelValue"])])),_:1}),g("div",U,[j(P,{size:"small",type:"info",onClick:x.cancelFunc},{default:b((()=>[V("取消")])),_:1},8,["onClick"]),j(P,{size:"small",type:"primary",onClick:x.onSubmit,loading:y.loading},{default:b((()=>[V("提交")])),_:1},8,["onClick","loading"])])])),_:1},8,["model"]),j(Q,{is_open:y.open_add,onClose:n[4]||(n[4]=e=>a.closeDialogFunc(e,"add"))},null,8,["is_open"])])}],["__scopeId","data-v-f2b874b6"]]);export{z as default};
