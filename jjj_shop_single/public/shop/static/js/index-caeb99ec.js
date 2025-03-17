import{a as e,E as t,f as a,l as s,m as i,n as o,v as r}from"./element-plus-68e4b1c7.js";import{S as l}from"./store-e7fa20da.js";import{_ as n}from"./index-d5abae2c.js";import{ap as p,o as d,c,a as u,$ as m,T as h,S as g,W as j,P as b,M as _,X as C}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const w={class:"user"},f={class:"common-level-rail"},k={class:"product-content"},v={class:"table-wrap"},z={width:30,height:30},y={class:"pagination"};const x=n({components:{},inject:["reload"],data:()=>({loading:!0,tableData:[],pageSize:20,totalDataNumber:0,curPage:1,formInline:{user:"",region:""},open_add:!1,open_edit:!1,userModel:{}}),created(){this.getTableList()},methods:{handleCurrentChange(e){let t=this;t.curPage=e,t.loading=!0,t.getTableList()},handleSizeChange(e){this.curPage=1,this.pageSize=e,this.getTableList()},getTableList(){let e=this,t={};t.page=e.curPage,t.list_rows=e.pageSize,l.shoplist(t,!0).then((t=>{e.loading=!1,e.tableData=t.data.list.data,e.totalDataNumber=t.data.list.total})).catch((e=>{}))},addClick(){this.$router.push("/store/store/add")},editClick(e){let t=e.store_id;this.$router.push({path:"/store/store/edit",query:{store_id:t}})},deleteClick(a){let s=this;e.confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{l.deleteShop({store_id:a.store_id},!0).then((e=>{t({message:"恭喜你，门店删除成功",type:"success"}),s.getTableList()})).catch((e=>{}))})).catch((()=>{}))}}},[["render",function(e,t,l,n,x,S){const T=a,D=s,P=i,L=o,q=p("auth"),N=p("img-url"),$=r;return d(),c("div",w,[u("div",f,[m((d(),h(T,{size:"small",type:"primary",icon:"Plus",onClick:S.addClick},{default:g((()=>[j("添加门店")])),_:1},8,["onClick"])),[[q,"/store/store/add"]])]),u("div",k,[u("div",v,[m((d(),h(P,{size:"small",data:x.tableData,border:"",style:{width:"100%"}},{default:g((()=>[b(D,{prop:"store_id",label:"门店ID",width:"60"}),b(D,{label:"Logo",width:"60"},{default:g((e=>[m(u("img",z,null,512),[[N,e.row.logo.file_path]])])),_:1}),b(D,{prop:"store_name",label:"门店名称"}),b(D,{prop:"shop_hours",label:"营业时间"}),b(D,{prop:"linkman",label:"联系人"}),b(D,{prop:"phone",label:"联系电话",width:"100"}),b(D,{prop:"detail_address",label:"门店地址",width:"240"}),b(D,{prop:"is_check",label:"自提核销"},{default:g((e=>[u("span",{class:_({green:1==e.row.is_check.value,gray:0==e.row.is_check.value})},C(e.row.is_check.text),3)])),_:1}),b(D,{prop:"status",label:"门店状态"},{default:g((e=>[u("span",{class:_({green:1==e.row.status.value,gray:0==e.row.status.value})},C(e.row.status.text),3)])),_:1}),b(D,{prop:"create_time",label:"创建时间",width:"140"}),b(D,{fixed:"right",label:"操作",width:"110"},{default:g((e=>[m((d(),h(T,{onClick:t=>S.editClick(e.row),type:"text",size:"small"},{default:g((()=>[j("编辑")])),_:2},1032,["onClick"])),[[q,"/store/store/edit"]]),m((d(),h(T,{onClick:t=>S.deleteClick(e.row),type:"text",size:"small"},{default:g((()=>[j("删除")])),_:2},1032,["onClick"])),[[q,"/store/store/delete"]])])),_:1})])),_:1},8,["data"])),[[$,x.loading]])]),u("div",y,[b(L,{onSizeChange:S.handleSizeChange,onCurrentChange:S.handleCurrentChange,background:"","current-page":x.curPage,"page-size":x.pageSize,layout:"total, prev, pager, next, jumper",total:x.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])])}]]);export{x as default};
