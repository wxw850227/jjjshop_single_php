import{E as e,d as o,e as l,c as r,f as s,o as i}from"./element-plus-68e4b1c7.js";import{O as a}from"./order-7442ee1f.js";import{d as t}from"./vuedraggable-13be42ee.js";import{_ as m}from"./index-c1104e7d.js";import{o as d,c as p,P as n,S as c,a as u,W as j}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-407f4729.js";import"./sortablejs-9c07ead7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const f={class:"dialog-footer"};const b=m({components:{draggable:t},data:()=>({loading:!1,formLabelWidth:"120px",dialogVisible:!1,form:{order_no:"",cancel_remark:""}}),props:["open_edit","order_no"],created(){this.dialogVisible=this.open_edit,this.form.order_no=this.order_no},methods:{submit(){let o=this,l=o.form;o.$refs.form.validate((r=>{r&&(o.loading=!0,a.orderCancel(l,!0).then((l=>{o.loading=!1,e({message:l.msg,type:"success"}),o.dialogFormVisible(!0)})).catch((e=>{o.loading=!1})))}))},dialogFormVisible(e){e?this.$emit("closeDialog",{type:"success",openDialog:!1}):this.$emit("closeDialog",{type:"error",openDialog:!1})}}},[["render",function(e,a,t,m,b,g){const h=o,_=l,V=r,v=s,y=i;return d(),p("div",null,[n(y,{title:"取消订单",modelValue:b.dialogVisible,"onUpdate:modelValue":a[2]||(a[2]=e=>b.dialogVisible=e),onClose:g.dialogFormVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},{footer:c((()=>[u("div",f,[n(v,{onClick:g.dialogFormVisible},{default:c((()=>[j("取 消")])),_:1},8,["onClick"]),n(v,{type:"primary",onClick:g.submit,loading:b.loading},{default:c((()=>[j("确 定")])),_:1},8,["onClick","loading"])])])),default:c((()=>[n(V,{size:"small",ref:"form",model:b.form},{default:c((()=>[n(_,{label:"订单号","label-width":b.formLabelWidth,prop:"order_no",rules:[{required:!0,message:" "}]},{default:c((()=>[n(h,{modelValue:b.form.order_no,"onUpdate:modelValue":a[0]||(a[0]=e=>b.form.order_no=e),placeholder:"请输入订单号",class:"max-w460",readonly:!0},null,8,["modelValue"])])),_:1},8,["label-width"]),n(_,{label:"备注","label-width":b.formLabelWidth,prop:"cancel_remark",rules:[{required:!0,message:" "}]},{default:c((()=>[n(h,{type:"textarea",modelValue:b.form.cancel_remark,"onUpdate:modelValue":a[1]||(a[1]=e=>b.form.cancel_remark=e),placeholder:"请输入备注"},null,8,["modelValue"])])),_:1},8,["label-width"])])),_:1},8,["model"])])),_:1},8,["modelValue","onClose"])])}]]);export{b as default};
