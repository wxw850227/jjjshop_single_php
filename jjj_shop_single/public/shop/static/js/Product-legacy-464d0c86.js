System.register(["./element-plus-legacy-cd39421e.js","./product-legacy-c9834749.js","./index-legacy-4f532ec6.js","./@vue-legacy-3fcc10b7.js"],(function(e,t){"use strict";var l,n,a,i,o,r,u,c,s,d,h,g,f,p,m,y,b,C,_,v,k,S,z,V,w,x=document.createElement("style");return x.textContent=".no-list .el-checkbox{display:none}\n",document.head.appendChild(x),{setters:[function(e){l=e.E,n=e.q,a=e.r,i=e.e,o=e.f,r=e.d,u=e.c,c=e.l,s=e.m,d=e.n,h=e.o,g=e.v},function(e){f=e.P},function(e){p=e._},function(e){m=e.o,y=e.T,b=e.S,C=e.a,_=e.P,v=e.W,k=e.Y,S=e.c,z=e.Q,V=e.a9,w=e.$}],execute:function(){var t={class:"common-seach-wrap"},x={class:"product-content"},I={class:"table-wrap"},D=["src"],L={class:"pagination"},P={class:"dialog-footer"};e("_",p({data:function(){return{loading:!0,curPage:1,pageSize:20,totalDataNumber:0,formInline:{},cateList:[],productList:[],status:[{id:10,name:"上架"},{id:20,name:"下架"}],multipleSelection:[],formLabelWidth:"120px",dialogVisible:!1,type:"error",params:null}},props:["isproduct","excludeIds","islist"],watch:{isproduct:function(e,t){e!=t&&e&&(this.dialogVisible=e,this.type="error",this.params=null,this.getData())}},created:function(){},methods:{selectableFunc:function(e){return"boolean"!=typeof e.noChoose||e.noChoose},handleCurrentChange:function(e){this.curPage=e,this.getData()},handleSizeChange:function(e){this.curPage=1,this.pageSize=e,this.getData()},getData:function(){var e=this,t=e.formInline;t.page=e.curPage,t.list_rows=e.pageSize,f.chooseLists(t,!0).then((function(t){1==t.code&&(e.loading=!1,e.cateList=t.data.category,e.excludeIds&&void 0!==e.excludeIds&&e.excludeIds.length>0?t.data.list.data.forEach((function(t){e.excludeIds.indexOf(t.product_id)>-1?t.noChoose=!1:t.noChoose=!0})):e.islist||t.data.list.data.forEach((function(e){e.noChoose=!0})),e.productList=t.data.list.data,e.totalDataNumber=t.data.list.total)})).catch((function(e){}))},SingleFunc:function(e){this.multipleSelection=[e],this.addClerk()},addClerk:function(){var e=this,t=null;e.multipleSelection.length<1?l({message:"请至少选择一件产品商品！",type:"error"}):(e.islist&&void 0!==e.islist?(e.multipleSelection.forEach((function(e){e.image=e.image[0].file_path})),t=e.multipleSelection):(t=e.multipleSelection[0]).image=t.image[0].file_path,e.params=t,e.type="success",e.dialogVisible=!1)},dialogFormVisible:function(){this.$emit("closeDialog",{type:this.type,openDialog:!1,params:this.params})},tableCurrentChange:function(e){this.multipleSelection=e}}},[["render",function(e,l,f,p,F,j){var E=n,N=a,U=i,W=o,$=r,q=u,M=c,O=s,Q=d,T=h,Y=g;return m(),y(T,{title:"选择商品",modelValue:F.dialogVisible,"onUpdate:modelValue":l[3]||(l[3]=function(e){return F.dialogVisible=e}),onClose:j.dialogFormVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"900px"},{footer:b((function(){return[C("div",P,[_(W,{size:"small",onClick:l[2]||(l[2]=function(e){return F.dialogVisible=!1})},{default:b((function(){return[v("取 消")]})),_:1}),f.islist?(m(),y(W,{key:0,size:"small",type:"primary",onClick:j.addClerk},{default:b((function(){return[v("确 定")]})),_:1},8,["onClick"])):k("",!0)])]})),default:b((function(){return[C("div",t,[_(q,{inline:!0,size:"small",model:F.formInline,class:"demo-form-inline"},{default:b((function(){return[_(U,{label:"商品分类"},{default:b((function(){return[_(N,{modelValue:F.formInline.category_id,"onUpdate:modelValue":l[0]||(l[0]=function(e){return F.formInline.category_id=e}),placeholder:"请选择商品分类"},{default:b((function(){return[(m(!0),S(z,null,V(F.cateList,(function(e){return m(),S(z,{key:e.category_id},[_(E,{value:0,label:"全部"}),_(E,{value:e.category_id,label:e.name},null,8,["value","label"]),e.child&&e.child.length>0?(m(!0),S(z,{key:0},V(e.child,(function(e){return m(),S(z,{key:e.category_id},[_(E,{value:e.category_id,label:e.name,style:{"padding-left":"30px"}},null,8,["value","label"]),e.child&&e.child.length>0?(m(!0),S(z,{key:0},V(e.child,(function(e){return m(),y(E,{key:e.category_id,value:e.category_id,label:e.name,style:{"padding-left":"60px"}},null,8,["value","label"])})),128)):k("",!0)],64)})),128)):k("",!0)],64)})),128))]})),_:1},8,["modelValue"])]})),_:1}),_(U,{label:"商品名称"},{default:b((function(){return[_($,{placeholder:"请输入商品名称",modelValue:F.formInline.search,"onUpdate:modelValue":l[1]||(l[1]=function(e){return F.formInline.search=e})},{append:b((function(){return[_(W,{icon:"Search",onClick:j.getData},{default:b((function(){return[v("查询")]})),_:1},8,["onClick"])]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["model"])]),C("div",x,[C("div",I,[w((m(),y(O,{size:"small",data:F.productList,border:"",style:{width:"100%"},"highlight-current-row":"",onSelectionChange:j.tableCurrentChange},{default:b((function(){return[_(M,{width:"70",label:"商品图片"},{default:b((function(e){var t=e.row;return[C("img",{src:t.image&&t.image[0].file_path,width:"30",height:"30"},null,8,D)]})),_:1}),_(M,{prop:"product_name",label:"商品名称"}),_(M,{prop:"category.name",width:"100",label:"商品分类"}),_(M,{prop:"create_time",width:"140",label:"添加时间"}),f.islist?(m(),y(M,{key:0,type:"selection",selectable:j.selectableFunc,width:"44"},null,8,["selectable"])):k("",!0),f.islist?k("",!0):(m(),y(M,{key:1,width:"80",label:"单选"},{default:b((function(e){var t=e.row;return[t.noChoose?(m(),y(W,{key:0,size:"small",onClick:function(e){return j.SingleFunc(t)}},{default:b((function(){return[v("选择")]})),_:2},1032,["onClick"])):(m(),y(W,{key:1,size:"small",disabled:""},{default:b((function(){return[v("已选")]})),_:1}))]})),_:1}))]})),_:1},8,["data","onSelectionChange"])),[[Y,F.loading]])]),C("div",L,[_(Q,{onSizeChange:j.handleSizeChange,onCurrentChange:j.handleCurrentChange,background:"","current-page":F.curPage,"page-sizes":[2,10,20,50,100],"page-size":F.pageSize,layout:"total, prev, pager, next, jumper",total:F.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])]})),_:1},8,["modelValue","onClose"])}]]))}}}));
