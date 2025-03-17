import{E as e,a,C as t,u as l,w as o,q as s,r,e as i,d as c,f as d,c as u,l as p,m as n,n as m,v as h}from"./element-plus-68e4b1c7.js";import{P as g}from"./product-03ba16fa.js";import{_}from"./index-c1104e7d.js";import{ap as y,o as C,c as b,a as f,P as k,S as v,W as j,X as z,Q as w,a9 as x,T as S,$ as D,Y as N}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const P={class:"product-list"},V={class:"common-seach-wrap"},F={class:"common-level-rail"},q={class:"product-content"},$={class:"table-wrap"},L={class:"product-info"},T={class:"pic"},U={alt:""},E={class:"info"},I={class:"name"},M={class:"price"},Q={key:0},W={key:1,class:"green"},X={class:"pagination"};const Y=_({components:{},data:()=>({activeName:"sell",activeIndex:"0",loading:!0,pageSize:10,totalDataNumber:0,curPage:1,searchForm:{product_name:"",category_id:""},tableData:[],categoryList:[],product_count:{}}),created(){this.getData()},methods:{handleCurrentChange(e){let a=this;a.loading=!0,a.curPage=e,a.getData()},handleSizeChange(e){this.pageSize=e,this.getData()},handleClick(e,a){let t=this;t.curPage=1,t.activeName=e,t.getData()},getData(){let e=this,a=e.searchForm;a.page=e.curPage,a.list_rows=e.pageSize,a.type=e.activeName,e.loading=!0,g.productList(a,!0).then((a=>{e.loading=!1,e.tableData=a.data.list.data,e.categoryList=a.data.category,e.totalDataNumber=a.data.list.total,e.product_count=a.data.product_count})).catch((a=>{e.loading=!1}))},onSubmit(){this.curPage=1,this.getData()},addClick(){this.$router.push("/product/product/add")},editClick(e){this.$router.push({path:"/product/product/edit",query:{product_id:e.product_id,scene:"edit"}})},linkClick:function(a){let t="pages/product/detail/detail?product_id="+a;this.$copyText(t).then((function(a){e({showClose:!0,message:"复制成功",type:"success"})}),(function(a){e({showClose:!0,message:"复制失败",type:"error"})}))},copyClick(e){this.$router.push({path:"/product/product/edit",query:{product_id:e.product_id,scene:"copy"}})},delClick:function(t){let l=this,o="";o=30==t.product_status?"删除后不可恢复，确认删除该记录吗?":"删除后将移动到回收站，确定删除该记录吗?",a.confirm(o,"提示",{type:"warning"}).then((()=>{g.delProduct({product_id:t.product_id}).then((a=>{e({message:"删除成功",type:"success"}),l.getData()}))}))},changeStatus(t,l){let o=this,s="";10==l?s="确认要上架该商品吗?":(s="确认要下架该商品吗?","recovery"==o.activeName&&(s="确认要移动该商品到仓库吗?")),a.confirm(s,"提示",{type:"warning"}).then((()=>{g.changeStatus({product_id:t.product_id,state:l}).then((a=>{e({message:"操作成功",type:"success"}),o.getData()}))}))}}},[["render",function(e,a,g,_,Y,A){const B=t,G=l,H=o,J=s,K=r,O=i,R=c,Z=d,ee=u,ae=p,te=n,le=m,oe=y("auth"),se=y("img-url"),re=h;return C(),b("div",P,[f("div",V,[k(H,{modelValue:Y.activeName,"onUpdate:modelValue":a[0]||(a[0]=e=>Y.activeName=e),onTabChange:A.handleClick},{default:v((()=>[k(G,{label:"出售中",name:"sell"},{label:v((()=>[j(" 出售中 "),k(B,{size:"small"},{default:v((()=>[j(z(Y.product_count.sell),1)])),_:1})])),_:1}),k(G,{label:"仓库中",name:"lower"},{label:v((()=>[j(" 仓库中 "),k(B,{size:"small"},{default:v((()=>[j(z(Y.product_count.lower),1)])),_:1})])),_:1}),k(G,{label:"回收站",name:"recovery"},{label:v((()=>[j(" 回收站 "),k(B,{size:"small"},{default:v((()=>[j(z(Y.product_count.recovery),1)])),_:1})])),_:1}),k(G,{label:"库存紧张",name:"stock"},{label:v((()=>[j(" 库存紧张 "),k(B,{size:"small"},{default:v((()=>[j(z(Y.product_count.stock),1)])),_:1})])),_:1}),k(G,{label:"已售罄",name:"over"},{label:v((()=>[j(" 已售罄 "),k(B,{size:"small"},{default:v((()=>[j(z(Y.product_count.over),1)])),_:1})])),_:1})])),_:1},8,["modelValue","onTabChange"]),k(ee,{size:"small",inline:!0,model:Y.searchForm,class:"demo-form-inline"},{default:v((()=>[k(O,{label:"商品分类"},{default:v((()=>[k(K,{size:"small",modelValue:Y.searchForm.category_id,"onUpdate:modelValue":a[1]||(a[1]=e=>Y.searchForm.category_id=e),placeholder:"所有分类"},{default:v((()=>[k(J,{label:"全部",value:"0"}),(C(!0),b(w,null,x(Y.categoryList,((e,a)=>(C(),S(J,{key:a,label:e.name,value:e.category_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),k(O,{label:"商品名称"},{default:v((()=>[k(R,{size:"small",modelValue:Y.searchForm.product_name,"onUpdate:modelValue":a[2]||(a[2]=e=>Y.searchForm.product_name=e),placeholder:"请输入商品名称"},null,8,["modelValue"])])),_:1}),k(O,null,{default:v((()=>[k(Z,{size:"small",type:"primary",icon:"Search",onClick:A.onSubmit},{default:v((()=>[j("查询")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])]),f("div",F,[D((C(),S(Z,{size:"small",type:"primary",icon:"Plus",onClick:A.addClick},{default:v((()=>[j("添加产品")])),_:1},8,["onClick"])),[[oe,"/product/product/add"]])]),f("div",q,[f("div",$,[D((C(),S(te,{size:"small",data:Y.tableData,border:"",style:{width:"100%"}},{default:v((()=>[k(ae,{prop:"product_name",label:"产品",width:"400px"},{default:v((e=>[f("div",L,[f("div",T,[D(f("img",U,null,512),[[se,e.row.image[0].file_path]])]),f("div",E,[f("div",I,z(e.row.product_name),1),f("div",M,"￥"+z(e.row.product_price),1)])])])),_:1}),k(ae,{prop:"category.name",label:"分类"}),k(ae,{prop:"sales_actual",label:"实际销量"}),k(ae,{prop:"product_stock",label:"库存"}),k(ae,{prop:"view_times",label:"点击数"}),k(ae,{prop:"product_status.text",label:"商品属性"},{default:v((e=>[0==e.row.is_virtual?(C(),b("span",Q,"实物商品")):N("",!0),1==e.row.is_virtual?(C(),b("span",W,"虚拟商品")):N("",!0)])),_:1}),k(ae,{prop:"create_time",label:"发布时间"}),k(ae,{prop:"product_sort",label:"排序"}),k(ae,{fixed:"right",label:"操作",width:"210"},{default:v((e=>[D((C(),S(Z,{onClick:a=>A.editClick(e.row),type:"text",size:"small"},{default:v((()=>[j("编辑")])),_:2},1032,["onClick"])),[[oe,"/product/product/edit"]]),"sell"==Y.activeName?D((C(),S(Z,{key:0,onClick:a=>A.changeStatus(e.row,20),type:"text",size:"small"},{default:v((()=>[j("下架")])),_:2},1032,["onClick"])),[[oe,"/product/product/edit"]]):N("",!0),"lower"==Y.activeName?D((C(),S(Z,{key:1,onClick:a=>A.changeStatus(e.row,10),type:"text",size:"small"},{default:v((()=>[j("上架")])),_:2},1032,["onClick"])),[[oe,"/product/product/edit"]]):N("",!0),"recovery"==Y.activeName?D((C(),S(Z,{key:2,onClick:a=>A.changeStatus(e.row,20),type:"text",size:"small"},{default:v((()=>[j("恢复")])),_:2},1032,["onClick"])),[[oe,"/product/product/edit"]]):N("",!0),D((C(),S(Z,{onClick:a=>A.delClick(e.row),type:"text",size:"small"},{default:v((()=>[j("删除")])),_:2},1032,["onClick"])),[[oe,"/product/product/delete"]]),D((C(),S(Z,{onClick:a=>A.copyClick(e.row),type:"text",size:"small"},{default:v((()=>[j("复制")])),_:2},1032,["onClick"])),[[oe,"/product/product/add"]]),k(Z,{onClick:a=>A.linkClick(e.row.product_id),type:"text",size:"small"},{default:v((()=>[j("链接")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[re,Y.loading]])])]),f("div",X,[k(le,{onSizeChange:A.handleSizeChange,onCurrentChange:A.handleCurrentChange,background:"","current-page":Y.curPage,"page-size":Y.pageSize,layout:"total, prev, pager, next, jumper",total:Y.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])}]]);export{Y as default};
