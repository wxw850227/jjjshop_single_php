import{s as e,E as a,a as t,f as s,l as i,G as o,m as l,n,v as r}from"./element-plus-68e4b1c7.js";import{P as d}from"./page-7eccbdf3.js";import{_ as p}from"./index-d5abae2c.js";import{ap as c,o as m,c as u,a as h,P as g,S as j,W as b,$ as w,T as _,Y as v}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const C={class:"common-level-rail"},f={class:"table-wrap"},y={width:50,height:50},z={class:"pagination"};const S=p({components:{},data:()=>({tableData:[],open_add:!1,open_edit:!1,userModel:{},commentData:[],loading:!0,pageSize:15,totalDataNumber:0,curPage:1}),created(){this.getTableList()},methods:{handleCurrentChange(e){let a=this;a.curPage=e,a.loading=!0,a.getTableList()},handleSizeChange(e){this.curPage=1,this.pageSize=e,this.getTableList()},getTableList(){let e=this,a={};a.page=e.curPage,a.list_rows=e.pageSize,d.menuList(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data,e.totalDataNumber=a.data.list.total})).catch((a=>{e.loading=!1}))},add(){this.$router.push({path:"/page/center/add"})},edit(e){let a=e.menu_id;this.$router.push({path:"/page/center/edit",query:{menu_id:a}})},changeStatus(t){const s=e.service({lock:!0,text:"正在处理",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});d.editMenu({menu_id:t.menu_id,is_show:t.is_show}).then((e=>{s.close()})).catch((e=>{s.close(),a({message:"处理失败，请重试",type:"warning"})}))},del(e){let s=this;t.confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{s.loading=!0,d.deleteMenu({menu_id:e.menu_id},!0).then((e=>{a({message:e.msg,type:"success"}),s.loading=!1,s.getTableList()})).catch((e=>{}))})).catch((()=>{}))}}},[["render",function(e,a,t,d,p,S){const k=s,x=i,P=o,T=l,D=n,L=c("img-url"),V=r;return m(),u("div",null,[h("div",C,[g(k,{size:"small",type:"primary",icon:"Plus",onClick:S.add},{default:j((()=>[b("添加菜单")])),_:1},8,["onClick"])]),h("div",f,[w((m(),_(T,{data:p.tableData,style:{width:"100%"}},{default:j((()=>[g(x,{prop:"name",label:"菜单名称"}),g(x,{prop:"address",label:"图标",width:"250"},{default:j((e=>[w(h("img",y,null,512),[[L,e.row.icon]])])),_:1}),g(x,{prop:"sort",label:"排序",width:"100"}),g(x,{prop:"is_show",label:"是否显示",width:"80"},{default:j((e=>[g(P,{modelValue:e.row.is_show,"onUpdate:modelValue":a=>e.row.is_show=a,"active-value":1,"inactive-value":0,onChange:a=>S.changeStatus(e.row),"active-color":"#13ce66","inactive-color":"#cccccc"},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),g(x,{prop:"create_time",label:"添加时间",width:"140"}),g(x,{prop:"name",label:"操作",width:"110"},{default:j((e=>[g(k,{onClick:a=>S.edit(e.row),type:"text",size:"small"},{default:j((()=>[b("编辑")])),_:2},1032,["onClick"]),""==e.row.sys_tag?(m(),_(k,{key:0,onClick:a=>S.del(e.row),type:"text",size:"small"},{default:j((()=>[b("删除")])),_:2},1032,["onClick"])):v("",!0)])),_:1})])),_:1},8,["data"])),[[V,p.loading]]),h("div",z,[g(D,{onSizeChange:S.handleSizeChange,onCurrentChange:S.handleCurrentChange,background:"","current-page":p.curPage,"page-size":p.pageSize,layout:"total, prev, pager, next, jumper",total:p.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])])}]]);export{S as default};
