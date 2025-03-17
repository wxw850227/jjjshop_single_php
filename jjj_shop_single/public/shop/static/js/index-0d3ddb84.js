import{a as e,E as t,f as s,l as a,m as i,n as o,v as l}from"./element-plus-68e4b1c7.js";import{_ as r,A as n}from"./index-d5abae2c.js";import d from"./Add-c2afd896.js";import p from"./Edit-8e7e04b9.js";import{ae as c,ap as u,o as m,c as h,a as g,$ as _,T as j,S as b,W as C,P as y,Q as f,a9 as k,X as L,Y as v}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const z={class:"user"},w={class:"common-level-rail"},x={class:"product-content"},T={class:"table-wrap"},S={key:0},D={key:1,class:"gray"},P={class:"pagination"};const A=r({components:{Add:d,Edit:p},inject:["reload"],data:()=>({loading:!0,role_loading:!0,tableData:[],pageSize:20,totalDataNumber:0,curPage:1,formInline:{user:"",region:""},open_add:!1,open_edit:!1,curModel:{},roleList:[]}),created(){this.getTableList()},methods:{handleCurrentChange(e){let t=this;t.curPage=e,t.loading=!0,t.getTableList()},handleSizeChange(e){this.curPage=1,this.pageSize=e,this.getTableList()},getTableList(){let e=this,t={};t.page=e.curPage,t.list_rows=e.pageSize,n.userList(t,!0).then((t=>{e.loading=!1,e.role_loading=!1,e.roleList=t.data.roleList,e.tableData=t.data.list.data,e.totalDataNumber=t.data.list.total})).catch((e=>{}))},addClick(){this.role_loading||(this.open_add=!0)},closeAdd(e){this.open_add=!1,e&&"success"==e.type&&this.getTableList()},editClick(e){this.curModel=e,this.open_edit=!0},closeEdit(e){this.open_edit=!1,e&&"success"==e.type&&this.getTableList()},deleteClick(s){let a=this;e.confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{a.loading=!0,n.userDelete({shop_user_id:s.shop_user_id},!0).then((e=>{a.loading=!1,1==e.code?(t({message:"恭喜你，该管理员删除成功",type:"success"}),a.getTableList()):a.loading=!1})).catch((e=>{a.loading=!1}))})).catch((()=>{}))}}},[["render",function(e,t,r,n,d,p){const A=s,E=a,M=i,N=o,q=c("Add"),B=c("Edit"),I=u("auth"),K=l;return m(),h("div",z,[g("div",w,[_((m(),j(A,{size:"small",type:"primary",icon:"Plus",onClick:p.addClick},{default:b((()=>[C("添加管理员")])),_:1},8,["onClick"])),[[I,"/auth/user/add"]])]),g("div",x,[g("div",T,[_((m(),j(M,{size:"small",data:d.tableData,border:"",style:{width:"100%"}},{default:b((()=>[y(E,{prop:"shop_user_id",label:"管理员ID"}),y(E,{prop:"user_name",label:"用户名"}),y(E,{prop:"role.role_name",label:"所属角色"},{default:b((e=>[0==e.row.is_super?(m(),h("div",S,[(m(!0),h(f,null,k(e.row.userRole,((e,t)=>(m(),h("span",{class:"mr10 green",key:t},L(e.role.role_name),1)))),128))])):v("",!0),1==e.row.is_super?(m(),h("div",D," 超级管理员 ")):v("",!0)])),_:1}),y(E,{prop:"create_time",label:"添加时间"}),y(E,{fixed:"right",label:"操作",width:"110"},{default:b((e=>[e.row.is_super<1?_((m(),j(A,{key:0,onClick:t=>p.editClick(e.row),type:"text",size:"small"},{default:b((()=>[C("编辑")])),_:2},1032,["onClick"])),[[I,"/auth/user/edit"]]):v("",!0),e.row.is_super<1?_((m(),j(A,{key:1,onClick:t=>p.deleteClick(e.row),type:"text",size:"small"},{default:b((()=>[C("删除")])),_:2},1032,["onClick"])),[[I,"/auth/user/delete"]]):v("",!0)])),_:1})])),_:1},8,["data"])),[[K,d.loading]])]),g("div",P,[y(N,{onSizeChange:p.handleSizeChange,onCurrentChange:p.handleCurrentChange,background:"","current-page":d.curPage,"page-size":d.pageSize,layout:"total, prev, pager, next, jumper",total:d.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])]),y(q,{open:d.open_add,roleList:d.roleList,onClose:p.closeAdd},null,8,["open","roleList","onClose"]),y(B,{open:d.open_edit,roleList:d.roleList,shop_user_id:d.curModel.shop_user_id,onClose:p.closeEdit},null,8,["open","roleList","shop_user_id","onClose"])])}]]);export{A as default};
