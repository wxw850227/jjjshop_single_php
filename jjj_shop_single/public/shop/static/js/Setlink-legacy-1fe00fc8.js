System.register(["./element-plus-legacy-cd39421e.js","./index-legacy-058fe4de.js","./@vue-legacy-3fcc10b7.js","./Article-legacy-0b7d0668.js","./product-legacy-44b94f10.js"],(function(e,a){"use strict";var t,n,l,i,u,o,c,r,s,d,g,p,m,h,f,v,y,b,_,D,k,C,V,F,x,w,P,S,z,T,L,N,U=document.createElement("style");return U.textContent=".table-wrap.setlink-product-table .product-info .pic[data-v-d4e513fe]{width:20px;height:20px;background:#FFFFFF}.table-wrap.setlink-product-table .product-info .pic img[data-v-d4e513fe]{width:20px;height:20px}.marketing-box .el-tree-node__content[data-v-d4e513fe]{height:30px}.marketing-box .el-tree-node__content[data-v-d4e513fe]{margin-bottom:10px}.marketing-box .el-tabs__item{font-size:12px}.setlink-footer-btn{width:160px}.setlink-set-link{width:500px}\n",document.head.appendChild(U),{setters:[function(e){t=e.q,n=e.r,l=e.v,i=e.d,u=e.e,o=e.c,c=e.u,r=e.w,s=e.y,d=e.f,g=e.l,p=e.m,m=e.n,h=e.o},function(e){f=e._,v=e.r},function(e){y=e.o,b=e.T,_=e.S,D=e.c,k=e.Q,C=e.a9,V=e.$,F=e.P,x=e.a,w=e.ap,P=e.Y,S=e.W,z=e.X,T=e.ae},function(e){L=e._},function(e){N=e.P}],execute:function(){var a=f({data:function(){return{pages:[{url:"/pages/user/address/address",name:"收货地址",type:"菜单"},{url:"/pages/coupon/coupon",name:"领券中心",type:"菜单"},{url:"/pages/user/my-coupon/my-coupon",name:"我的优惠券",type:"菜单"},{url:"/pages/user/my_attention/my_attention",name:"我的收藏",type:"菜单"},{url:"/pages/plus/signin/signin",name:"签到有礼",type:"菜单"},{url:"/pages/user/evaluate/list",name:"我的评价",type:"菜单"},{url:"/pages/user/set/set",name:"设置",type:"菜单"},{url:"scanQrcode",name:"扫一扫",type:"菜单"}],activePage:"收货地址"}},created:function(){this.changeFunc(this.pages[0])},methods:{changeFunc:function(e){this.$emit("changeData",e)}}},[["render",function(e,a,l,i,u,o){var c=t,r=n;return y(),b(r,{modelValue:u.activePage,"onUpdate:modelValue":a[0]||(a[0]=function(e){return u.activePage=e}),placeholder:"请选择",class:"percent-w100",onChange:o.changeFunc,"value-key":"url"},{default:_((function(){return[(y(!0),D(k,null,C(u.pages,(function(e){return y(),b(c,{key:e.url,"value-key":e.name,label:e.name,value:e},null,8,["value-key","label","value"])})),128))]})),_:1},8,["modelValue","onChange"])}]]),U=function(e,a){return v._post("/shop/data.link/getPageList",e,a)},$=e("b",f({data:function(){return{loading:!0,pages:[],activePage:{}}},created:function(){this.getData()},methods:{getData:function(){var e=this;U({},!0).then((function(a){e.loading=!1;for(var t=[],n=0,l=a.data.list.length;n<l;n++){var i=a.data.list[n],u={url:"pages/diy-page/diy-page?page_id="+i.page_id,name:i.page_name,type:"自定义页面"};t.push(u)}e.pages=t,e.pages.length>0&&(e.activePage=e.pages[0],e.changeFunc(e.activePage))})).catch((function(a){e.loading=!1}))},changeFunc:function(e){this.$emit("changeData",e)}}},[["render",function(e,a,i,u,o,c){var r=t,s=n,d=l;return V((y(),b(s,{modelValue:o.activePage,"onUpdate:modelValue":a[0]||(a[0]=function(e){return o.activePage=e}),placeholder:"请选择",class:"percent-w100",onChange:c.changeFunc,"value-key":"url"},{default:_((function(){return[(y(!0),D(k,null,C(o.pages,(function(e){return y(),b(r,{key:e.url,label:e.name,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"])),[[d,o.loading]])}]])),A={data:function(){return{formmodel:{}}},created:function(){this.changeFunc("")},methods:{changeFunc:function(e){var a={name:"https://"+e,url:"pages/webview/webview?url=https://"+e,type:"H5"};this.$emit("changeData",a)}}},j=x("p",null,"注意一：链接的网页必须支持SSL ，链接必须以 https:// 开头，否则无法跳转",-1),H=x("p",null,"注意二：链接的域名必须是备案域名，否则无法跳转",-1),I=x("p",null,"注意三：您的网站域名必须加到微信小程序公众平台的业务域名处,详细说明？",-1),M=e("H",f(A,[["render",function(e,a,t,n,l,c){var r=i,s=u,d=o;return y(),b(d,{"label-width":"80px",model:l.formmodel},{default:_((function(){return[F(s,{label:"https://"},{default:_((function(){return[F(r,{modelValue:l.formmodel.name,"onUpdate:modelValue":a[0]||(a[0]=function(e){return l.formmodel.name=e}),onInput:c.changeFunc},null,8,["modelValue","onInput"])]})),_:1}),F(s,{label:""},{default:_((function(){return[j,H,I]})),_:1})]})),_:1},8,["model"])}]])),O={class:"marketing-box"},Q=e("M",f({data:function(){return{activeTab:"signin",pages:[],activePage:null,signinList:[{id:0,url:"pages/plus/signin/signin",name:"签到",type:"营销"}],couponList:[{id:0,url:"pages/coupon/coupon",name:"优惠券",type:"营销"}]}},watch:{activeTab:function(e,a){var t=this;t.pages=[],e!=a&&("signin"==e?t.pages=t.signinList:"coupon"==e&&(t.pages=t.couponList),t.autoSend())}},created:function(){this.pages=this.signinList,this.autoSend()},methods:{autoSend:function(){this.pages.length>0&&(this.activePage=this.pages[0],this.changeFunc())},changeFunc:function(e){this.$emit("changeData",this.activePage)}}},[["render",function(e,a,l,i,u,o){var s=c,d=r,g=t,p=n;return y(),D("div",O,[F(d,{modelValue:u.activeTab,"onUpdate:modelValue":a[0]||(a[0]=function(e){return u.activeTab=e})},{default:_((function(){return[F(s,{label:"签到",name:"signin"}),F(s,{label:"优惠券",name:"coupon"})]})),_:1},8,["modelValue"]),F(p,{modelValue:u.activePage,"onUpdate:modelValue":a[1]||(a[1]=function(e){return u.activePage=e}),placeholder:"请选择",class:"percent-w100",onChange:o.changeFunc,"value-key":"id"},{default:_((function(){return[(y(!0),D(k,null,C(u.pages,(function(e,a){return y(),b(g,{key:a,label:e.name,value:e},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"])])}]])),q=e("a",f({data:function(){return{pages:[{url:"pages/index/index",name:"首页",type:"页面"},{url:"pages/product/category",name:"分类",type:"页面"},{url:"pages/article/list/list",name:"文章首页",type:"页面"},{url:"pages/cart/cart",name:"购物车",type:"页面"},{url:"pages/order/myorder",name:"订单",type:"页面"},{url:"pages/user/index/index",name:"我的",type:"页面"}],activePage:"首页"}},created:function(){this.changeFunc(this.pages[0])},methods:{changeFunc:function(e){this.$emit("changeData",e)}}},[["render",function(e,a,l,i,u,o){var c=t,r=n;return y(),b(r,{modelValue:u.activePage,"onUpdate:modelValue":a[0]||(a[0]=function(e){return u.activePage=e}),placeholder:"请选择",class:"percent-w100",onChange:o.changeFunc,"value-key":"url"},{default:_((function(){return[(y(!0),D(k,null,C(u.pages,(function(e){return y(),b(c,{key:e.url,"value-key":e.name,label:e.name,value:e},null,8,["value-key","label","value"])})),128))]})),_:1},8,["modelValue","onChange"])}]])),E={class:"marketing-box"},K={key:0,class:"product"},W={class:"product-content"},X={class:"table-wrap type-table"},Y={key:1,class:"product-list"},B={class:"common-seach-wrap"},G={class:"product-content"},J={class:"table-wrap setlink-product-table"},R={class:"product-info"},Z={class:"pic"},ee={alt:""},ae={class:"info"},te={class:"name text-ellipsis"},ne={class:"red"},le={class:"pagination"},ie=e("P",f({data:function(){return{loading:!0,activeTab:"type",categoryList:[],categoryActive:[],searchForm:{product_name:""},tableData:[],pageSize:5,totalDataNumber:0,curPage:1,activePage:null}},created:function(){this.getCategory()},watch:{activeTab:function(e,a){e!=a&&(this.tableData=[],"type"==e&&this.autoType(),"detail"==e&&this.getData())}},methods:{getCategory:function(){var e=this;e.loading=!0,N.catList({},!0).then((function(a){e.categoryList=a.data.list,e.autoType(),e.loading=!1})).catch((function(a){e.loading=!1}))},autoType:function(e){if(e|=0,this.categoryActive=[],this.categoryList.length>0){var a=this.categoryList[e];this.categoryActive.push(a.category_id),a.child&&void 0!==a.child&&a.child.length>0?(this.categoryActive.push(a.child[0].category_id),this.changeFunc(a.child[0])):(e++,this.autoType(e))}},changeCategory:function(e){var a=this.$refs.cascader.getCheckedNodes();this.changeFunc(a[0].data)},handleCurrentChange:function(e){this.curPage=e,this.getData()},handleSizeChange:function(e){this.pageSize=e,this.curPage=0,this.getData()},getData:function(){var e=this;e.loading=!0;var a={};a.page=e.curPage,a.list_rows=e.pageSize,a.product_name=e.searchForm.product_name,N.productList(a,!0).then((function(a){e.loading=!1,e.tableData=a.data.list.data,e.totalDataNumber=a.data.list.total,1==e.curPage&&e.tableData.length>0&&e.changeFunc(e.tableData[0])})).catch((function(a){e.loading=!1}))},onSubmit:function(){this.curPage=0,this.getData()},changeFunc:function(e){var a={};"type"==this.activeTab&&(a.name=e.name,a.url="pages/product/list/list?category_id="+e.category_id,a.type="商品分类"),"detail"==this.activeTab&&(a.name=e.product_name,a.url="pages/product/detail/detail?product_id="+e.product_id,a.type="商品详情"),this.$emit("changeData",a)}}},[["render",function(e,a,t,n,h,f){var v=c,b=r,k=s,C=i,T=u,L=d,N=o,U=g,$=p,A=m,j=l,H=w("img-url");return y(),D("div",E,[F(b,{modelValue:h.activeTab,"onUpdate:modelValue":a[0]||(a[0]=function(e){return h.activeTab=e})},{default:_((function(){return[F(v,{label:"分类",name:"type"}),F(v,{label:"详情",name:"detail"})]})),_:1},8,["modelValue"]),"type"==h.activeTab?(y(),D("div",K,[V((y(),D("div",W,[x("div",X,[F(k,{class:"ww100",ref:"cascader",modelValue:h.categoryActive,"onUpdate:modelValue":a[1]||(a[1]=function(e){return h.categoryActive=e}),options:h.categoryList,props:{children:"child",value:"category_id",label:"name"},onChange:f.changeCategory},null,8,["modelValue","options","onChange"])])])),[[j,h.loading]])])):P("",!0),"detail"==h.activeTab?V((y(),D("div",Y,[x("div",B,[F(N,{size:"small",inline:!0,model:h.searchForm,class:"demo-form-inline"},{default:_((function(){return[F(T,{label:"商品名称"},{default:_((function(){return[F(C,{size:"small",modelValue:h.searchForm.product_name,"onUpdate:modelValue":a[2]||(a[2]=function(e){return h.searchForm.product_name=e}),placeholder:"请输入商品名称"},null,8,["modelValue"])]})),_:1}),F(T,null,{default:_((function(){return[F(L,{size:"small",icon:"Search",onClick:f.onSubmit},{default:_((function(){return[S("查询")]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["model"])]),x("div",G,[x("div",J,[F($,{size:"small",data:h.tableData,border:"",style:{width:"100%"}},{default:_((function(){return[F(U,{prop:"product_name",label:"产品"},{default:_((function(e){return[x("div",R,[x("div",Z,[V(x("img",ee,null,512),[[H,e.row.image[0].file_path]])]),x("div",ae,[x("div",te,z(e.row.product_name),1)])])]})),_:1}),F(U,{prop:"product_price",label:"价格",width:"100"},{default:_((function(e){return[x("span",ne,z(e.row.product_price),1)]})),_:1}),F(U,{label:"操作",width:"80"},{default:_((function(e){return[F(L,{size:"small",onClick:function(a){return f.changeFunc(e.row)}},{default:_((function(){return[S("选择")]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])])]),x("div",le,[F(A,{onSizeChange:f.handleSizeChange,onCurrentChange:f.handleCurrentChange,background:"","current-page":h.curPage,"page-size":h.pageSize,layout:"total, prev, pager, next, jumper",total:h.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])),[[j,h.loading]]):P("",!0)])}],["__scopeId","data-v-d4e513fe"]])),ue={data:function(){return{formmodel:{}}},methods:{changeFunc:function(e){this.$emit("changeData",e)}}},oe=x("p",null,"注意一：同一个小程序链接其他小程序，最多只能链接10个，超过将不生效",-1),ce=x("p",null,"注意二：不能填写自身小程序appid",-1),re=x("p",null,"注意三：小程序链接留空默认跳到小程序首页",-1),se=e("S",f(ue,[["render",function(e,a,t,n,l,c){var r=i,s=u,d=o;return y(),b(d,{"label-width":"80px",model:l.formmodel},{default:_((function(){return[F(s,{label:"appid "},{default:_((function(){return[F(r,{modelValue:l.formmodel.name,"onUpdate:modelValue":a[0]||(a[0]=function(e){return l.formmodel.name=e})},null,8,["modelValue"])]})),_:1}),F(s,{label:"页面路径 "},{default:_((function(){return[F(r,{modelValue:l.formmodel.name,"onUpdate:modelValue":a[1]||(a[1]=function(e){return l.formmodel.name=e})},null,8,["modelValue"])]})),_:1}),F(s,{label:""},{default:_((function(){return[oe,ce,re]})),_:1})]})),_:1},8,["model"])}]])),de={components:{Pages:q,Marketing:Q,ProductIndex:ie,Article:L,SmallProgram:se,H5:M,DiyPage:$,Menu:a},data:function(){return{dialogVisible:!0,activeData:null,activeName:"pages"}},props:["is_linkset"],created:function(){this.dialogVisible=this.is_linkset},methods:{dialogFormVisible:function(e){e?(-1!=this.activeData.url.indexOf("giftpackage")&&(this.activeData.name="礼包购-"+this.activeData.name),-1!=this.activeData.url.indexOf("invite")&&(this.activeData.name="邀请有礼-"+this.activeData.name),this.$emit("closeDialog",this.activeData)):this.$emit("closeDialog",null)},activeDataFunc:function(e){this.activeData=e}}},ge={class:"dialog-footer d-b-c"},pe={class:"flex-1"},me={key:0,class:"d-s-s d-c tl"},he={class:"text-ellipsis setlink-set-link"},fe=x("span",null,"当前链接：",-1),ve={class:"gray9"},ye=x("span",{class:"p-0-10 gray"},"/",-1),be={class:"blue"},_e={class:"text-ellipsis gray",style:{"font-size":"10px"}},De={key:1,class:"tl"},ke={class:"setlink-footer-btn"};e("_",f(de,[["render",function(e,t,n,l,i,u){var o=q,s=c,g=Q,p=T("ProductIndex"),m=L,f=M,v=$,k=a,C=r,V=d,w=h;return y(),b(w,{title:"超链接设置",modelValue:i.dialogVisible,"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.dialogVisible=e}),onClose:u.dialogFormVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"800px"},{footer:_((function(){return[x("div",ge,[x("div",pe,[null!=i.activeData?(y(),D("div",me,[x("p",he,[fe,x("span",ve,z(i.activeData.type),1),ye,x("span",be,z(i.activeData.name),1)]),x("p",_e,z(i.activeData.url),1)])):(y(),D("div",De," 暂无 "))]),x("div",ke,[F(V,{size:"small",onClick:t[1]||(t[1]=function(e){return u.dialogFormVisible(!1)})},{default:_((function(){return[S("取 消")]})),_:1}),F(V,{size:"small",type:"primary",onClick:t[2]||(t[2]=function(e){return u.dialogFormVisible(!0)})},{default:_((function(){return[S("确 定")]})),_:1})])])]})),default:_((function(){return[F(C,{type:"border-card",modelValue:i.activeName,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.activeName=e})},{default:_((function(){return[F(s,{label:"页面",name:"pages"},{default:_((function(){return["pages"==i.activeName?(y(),b(o,{key:0,onChangeData:u.activeDataFunc},null,8,["onChangeData"])):P("",!0)]})),_:1}),F(s,{label:"营销",name:"market"},{default:_((function(){return["market"==i.activeName?(y(),b(g,{key:0,onChangeData:u.activeDataFunc},null,8,["onChangeData"])):P("",!0)]})),_:1}),F(s,{label:"产品",name:"product"},{default:_((function(){return["product"==i.activeName?(y(),b(p,{key:0,onChangeData:u.activeDataFunc},null,8,["onChangeData"])):P("",!0)]})),_:1}),F(s,{label:"文章",name:"Article"},{default:_((function(){return["Article"==i.activeName?(y(),b(m,{key:0,onChangeData:u.activeDataFunc},null,8,["onChangeData"])):P("",!0)]})),_:1}),F(s,{label:"H5",name:"H5"},{default:_((function(){return["H5"==i.activeName?(y(),b(f,{key:0,onChangeData:u.activeDataFunc},null,8,["onChangeData"])):P("",!0)]})),_:1}),F(s,{label:"自定义",name:"diypage"},{default:_((function(){return["diypage"==i.activeName?(y(),b(v,{key:0,onChangeData:u.activeDataFunc},null,8,["onChangeData"])):P("",!0)]})),_:1}),F(s,{label:"我的菜单",name:"menu"},{default:_((function(){return["menu"==i.activeName?(y(),b(k,{key:0,onChangeData:u.activeDataFunc},null,8,["onChangeData"])):P("",!0)]})),_:1})]})),_:1},8,["modelValue"])]})),_:1},8,["modelValue","onClose"])}]]))}}}));
