import{q as e,r as a,e as t,d as l,x as s,f as o,c as r,l as i,m as n,n as d,v as m}from"./element-plus-68e4b1c7.js";import{S as p}from"./store-b3f0a89a.js";import{_ as u}from"./index-c1104e7d.js";import{o as c,c as h,a as g,P as b,S as j,Q as f,a9 as _,T as v,W as z,$ as C,X as S}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const y={data:()=>({loading:!0,tableData:[],storeList:[],pageSize:20,totalDataNumber:0,curPage:1,formInline:{store_id:"",search:"",create_time:""},open_add:!1,open_edit:!1,userModel:{}}),created(){this.getTableList()},methods:{handleCurrentChange(e){let a=this;a.curPage=e,a.loading=!0,a.getTableList()},handleSizeChange(e){this.curPage=1,this.pageSize=e,this.getTableList()},getTableList(){let e=this,a=e.formInline;a.page=e.curPage,a.list_rows=e.pageSize,e.loading=!0,p.orderList(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data,e.totalDataNumber=a.data.list.total,e.storeList=a.data.store_list})).catch((a=>{e.loading=!1}))},onSubmit(){this.curPage=1,this.getTableList()}}},I={class:"user"},D={class:"common-seach-wrap"},L={class:"block"},V=g("span",{class:"demonstration"},null,-1),k={class:"product-content"},w={class:"table-wrap"},x={class:"fb orange"},P={class:"pagination"};const T=u(y,[["render",function(p,u,y,T,Y,q){const M=e,N=a,U=t,Q=l,W=s,X=o,$=r,A=i,B=n,E=d,F=m;return c(),h("div",I,[g("div",D,[b($,{size:"small",inline:!0,model:Y.formInline,class:"demo-form-inline"},{default:j((()=>[b(U,{label:"所属门店"},{default:j((()=>[b(N,{modelValue:Y.formInline.store_id,"onUpdate:modelValue":u[0]||(u[0]=e=>Y.formInline.store_id=e),placeholder:"请选择"},{default:j((()=>[b(M,{label:"全部",value:"0"}),(c(!0),h(f,null,_(Y.storeList,((e,a)=>(c(),v(M,{key:a,label:e.store_name,value:e.shop_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),b(U,{label:"核销员姓名"},{default:j((()=>[b(Q,{modelValue:Y.formInline.search,"onUpdate:modelValue":u[1]||(u[1]=e=>Y.formInline.search=e),placeholder:"请输入核销员姓名"},null,8,["modelValue"])])),_:1}),b(U,{label:"起始时间"},{default:j((()=>[g("div",L,[V,b(W,{size:"small",modelValue:Y.formInline.create_time,"onUpdate:modelValue":u[2]||(u[2]=e=>Y.formInline.create_time=e),type:"daterange","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])])),_:1}),b(U,null,{default:j((()=>[b(X,{type:"primary",icon:"Search",onClick:q.onSubmit},{default:j((()=>[z("查询")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),g("div",k,[g("div",w,[C((c(),v(B,{size:"small",data:Y.tableData,border:"",style:{width:"100%"}},{default:j((()=>[b(A,{prop:"store_id",label:"ID"}),b(A,{prop:"store.store_name",label:"核销门店"},{default:j((e=>[g("span",x,S(e.row.store.store_name),1)])),_:1}),b(A,{prop:"clerk.real_name",label:"核销员"}),b(A,{prop:"order.order_no",label:"订单号"}),b(A,{prop:"order_type.text",label:"订单类型"}),b(A,{prop:"create_time",label:"核销时间"})])),_:1},8,["data"])),[[F,Y.loading]])]),g("div",P,[b(E,{onSizeChange:q.handleSizeChange,onCurrentChange:q.handleCurrentChange,background:"","current-page":Y.curPage,"page-size":Y.pageSize,layout:"total, prev, pager, next, jumper",total:Y.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])])}]]);export{T as default};
