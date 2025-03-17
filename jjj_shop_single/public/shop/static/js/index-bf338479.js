import{a as e,E as a,f as t,q as l,r as s,e as i,d as r,c as o,l as n,m as d,n as c,v as p}from"./element-plus-68e4b1c7.js";import{S as m}from"./store-b3f0a89a.js";import{_ as u}from"./index-c1104e7d.js";import{ap as h,o as g,c as b,a as f,$ as k,T as j,S as _,W as C,P as v,Q as w,a9 as y,Y as z,M as x,X as S}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const D={class:"user clearfix"},T={class:"common-level-rail fl"},I={class:"common-seach-wrap fr"},L={class:"product-content"},P={class:"table-wrap"},N={key:0,width:30,height:30},V={class:"pagination"};const q=u({components:{},data:()=>({loading:!0,tableData:[],storeList:[],pageSize:20,totalDataNumber:0,curPage:1,formInline:{shop_id:"",search:""},open_add:!1,open_edit:!1,userModel:{}}),created(){this.getTableList()},methods:{handleCurrentChange(e){let a=this;a.curPage=e,a.loading=!0,a.getTableList()},handleSizeChange(e){this.curPage=1,this.pageSize=e,this.getTableList()},getTableList(){let e=this,a={};a.page=e.curPage,a.list_rows=e.pageSize,m.clerklist(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data,e.totalDataNumber=a.data.list.total,e.storeList=a.data.store_list.data})).catch((a=>{e.loading=!1}))},onSubmit(){let e=this;e.loading=!0;let a=this.formInline;m.clerklist(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data,e.totalDataNumber=a.data.list.total})).catch((a=>{e.loading=!1}))},addClick(){this.$router.push("/store/clerk/add")},editClick(e){let a=e.clerk_id;this.$router.push({path:"/store/clerk/edit",query:{clerk_id:a}})},deleteClick(t){let l=this;e.confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{l.loading=!0,m.deleteClerk({clerk_id:t},!0).then((e=>{l.loading=!1,1==e.code&&(a({message:"恭喜你，店员删除成功",type:"success"}),l.getTableList())})).catch((e=>{l.loading=!1}))})).catch((()=>{l.loading=!1}))}}},[["render",function(e,a,m,u,q,U){const $=t,B=l,M=s,E=i,Q=r,W=o,X=n,Y=d,A=c,F=h("auth"),G=h("img-url"),H=p;return g(),b("div",D,[f("div",T,[k((g(),j($,{size:"small",type:"primary",icon:"Plus",onClick:U.addClick},{default:_((()=>[C("添加店员")])),_:1},8,["onClick"])),[[F,"/store/clerk/add"]])]),f("div",I,[v(W,{size:"small",inline:!0,model:q.formInline,class:"demo-form-inline"},{default:_((()=>[v(E,{label:""},{default:_((()=>[v(M,{modelValue:q.formInline.store_id,"onUpdate:modelValue":a[0]||(a[0]=e=>q.formInline.store_id=e),placeholder:"所属门店"},{default:_((()=>[v(B,{label:"全部",value:"0"}),(g(!0),b(w,null,y(q.storeList,((e,a)=>(g(),j(B,{key:a,label:e.store_name,value:e.store_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(E,{label:""},{default:_((()=>[v(Q,{modelValue:q.formInline.search,"onUpdate:modelValue":a[1]||(a[1]=e=>q.formInline.search=e),placeholder:"请输入店员姓名/手机号"},null,8,["modelValue"])])),_:1}),v(E,null,{default:_((()=>[v($,{type:"primary",icon:"Search",onClick:U.onSubmit},{default:_((()=>[C("查询")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),f("div",L,[f("div",P,[k((g(),j(Y,{size:"small",data:q.tableData,border:"",style:{width:"100%"}},{default:_((()=>[v(X,{prop:"clerk_id",label:"门店ID",width:"60"}),v(X,{prop:"nickName",label:"微信头像",width:"70"},{default:_((e=>[e.row.user?k((g(),b("img",N,null,512)),[[G,e.row.user.avatarUrl]]):z("",!0)])),_:1}),v(X,{prop:"user.nickName",label:"\t微信昵称"}),v(X,{prop:"store.store_name",label:"所属门店"}),v(X,{prop:"real_name",label:"店员姓名"}),v(X,{prop:"mobile",label:"店员手机号"}),v(X,{prop:"status.text",label:"状态"},{default:_((e=>[f("span",{class:x({green:1==e.row.status.value,gray:0==e.row.status.value})},S(e.row.status.text),3)])),_:1}),v(X,{prop:"create_time",label:"添加时间"}),v(X,{fixed:"right",label:"操作",width:"110"},{default:_((e=>[k((g(),j($,{onClick:a=>U.editClick(e.row),type:"text",size:"small"},{default:_((()=>[C("编辑")])),_:2},1032,["onClick"])),[[F,"/store/clerk/edit"]]),k((g(),j($,{onClick:a=>U.deleteClick(e.row.clerk_id),type:"text",size:"small"},{default:_((()=>[C("删除")])),_:2},1032,["onClick"])),[[F,"/store/clerk/delete"]])])),_:1})])),_:1},8,["data"])),[[H,q.loading]])]),f("div",V,[v(A,{onSizeChange:U.handleSizeChange,onCurrentChange:U.handleCurrentChange,background:"","current-page":q.curPage,"page-size":q.pageSize,layout:"total, prev, pager, next, jumper",total:q.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])])}]]);export{q as default};
