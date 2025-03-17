import{i as e,F as a,e as t,y as l,d as o,B as s,f as r,H as d,j as u,c}from"./element-plus-68e4b1c7.js";import{P as i}from"./product-a5c451ce.js";import{d as m}from"./vuedraggable-13be42ee.js";import{ae as n,ap as p,o as h,c as g,a as f,X as y,P as b,S as _,W as V,Q as j,T as w,Y as I,$ as S,a1 as C,a0 as P}from"./@vue-76da2f05.js";import{_ as k}from"./index-d5abae2c.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-407f4729.js";import"./sortablejs-9c07ead7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const v={components:{draggable:m},data:()=>({loading:!0,CategoryList:[],currCategory:[],productNameShow:!1,productPriceShow:!1,linePriceShow:!1,sellingPointShow:!1,productSalesShow:!1}),props:["curItem","selectedIndex","opts"],created(){this.getData(),this.productNameShow=1==this.curItem.style.show.productName,this.productPriceShow=1==this.curItem.style.show.productPrice,this.linePriceShow=1==this.curItem.style.show.linePrice,this.sellingPointShow=1==this.curItem.style.show.sellingPoint,this.productSalesShow=1==this.curItem.style.show.productSales},watch:{selectedIndex:function(e,a){this.currCategory=this.currCategoryAuto(this.CategoryList)}},methods:{getData(){let e=this;i.catList({page_id:e.page_id},!0).then((a=>{e.CategoryList=a.data.list,e.currCategory=e.currCategoryAuto(a.data.list),e.loading=!1})).catch((a=>{e.loading=!1}))},currCategoryAuto(e){let a=[];for(let t=0;t<e.length;t++){let l=e[t];if(l.category_id==this.curItem.params.auto.category){a.push(l.category_id);break}if("[object Array]"==Object.prototype.toString.call(l.child)&&l.child.length>0)for(let e=0;e<l.child.length;e++)if(l.child[e].category_id==this.curItem.params.auto.category){a.push(l.category_id),a.push(l.child[e].category_id);break}}return a},check(e,a){let t=e?1:0;this.curItem.style.show[a]=t},changeCategory(e){let a=this.$refs.cascader.getCheckedNodes();this.curItem.params.auto.category=a[0].data.category_id}}},U={class:"common-form"},x={class:"d-s-c f-w"},N={class:"item"},L={class:"delete-box"},A={alt:""},$=f("div",{class:"p-10-0 mb16 f14 border-b"},[f("span",{class:"gray6"},"组件样式")],-1),z={class:"d-s-c"};const D=k(v,[["render",function(i,m,k,v,D,q){const E=e,F=a,B=t,H=l,M=o,O=n("CircleCloseFilled"),Q=s,R=n("draggable"),T=r,W=d,X=u,Y=c,G=p("img-url");return h(),g("div",null,[f("div",U,[f("span",null,y(k.curItem.name),1)]),b(Y,{size:"small",model:k.curItem,"label-width":"100px"},{default:_((()=>[b(B,{label:"商品来源："},{default:_((()=>[b(F,{modelValue:k.curItem.params.source,"onUpdate:modelValue":m[0]||(m[0]=e=>k.curItem.params.source=e)},{default:_((()=>[b(E,{label:"auto"},{default:_((()=>[V("自动获取")])),_:1}),b(E,{label:"choice"},{default:_((()=>[V("手动选择")])),_:1})])),_:1},8,["modelValue"])])),_:1}),"auto"==k.curItem.params.source?(h(),g(j,{key:0},[b(B,{label:"商品分类："},{default:_((()=>[D.CategoryList.length>0?(h(),w(H,{key:0,class:"ww100",modelValue:D.currCategory,"onUpdate:modelValue":m[1]||(m[1]=e=>D.currCategory=e),ref:"cascader",options:D.CategoryList,props:{checkStrictly:!0,children:"child",value:"category_id",label:"name"},onChange:q.changeCategory},null,8,["modelValue","options","onChange"])):I("",!0)])),_:1}),b(B,{label:"商品排序："},{default:_((()=>[b(F,{modelValue:k.curItem.params.auto.productSort,"onUpdate:modelValue":m[2]||(m[2]=e=>k.curItem.params.auto.productSort=e)},{default:_((()=>[b(E,{label:"all"},{default:_((()=>[V("综合")])),_:1}),b(E,{label:"sales"},{default:_((()=>[V("销量")])),_:1}),b(E,{label:"price"},{default:_((()=>[V("价格")])),_:1})])),_:1},8,["modelValue"])])),_:1}),b(B,{label:"显示数量："},{default:_((()=>[b(M,{modelValue:k.curItem.params.auto.showNum,"onUpdate:modelValue":m[3]||(m[3]=e=>k.curItem.params.auto.showNum=e),class:"w-auto"},null,8,["modelValue"])])),_:1})],64)):I("",!0),"choice"==k.curItem.params.source?(h(),w(B,{key:1,label:"商品列表："},{default:_((()=>[b(R,{modelValue:k.curItem.data,"onUpdate:modelValue":m[4]||(m[4]=e=>k.curItem.data=e),options:{draggable:".item",animation:500},class:"choice-product-list"},{item:_((({element:e,index:a})=>[f("div",x,[f("div",N,[f("div",L,[b(Q,{size:20,onClick:e=>i.$parent.onEditorDeleleData(a,k.selectedIndex)},{default:_((()=>[b(O)])),_:2},1032,["onClick"])]),S(f("img",A,null,512),[[G,e.image]])])])])),_:1},8,["modelValue","options"]),f("div",null,[b(T,{icon:"Plus",onClick:m[5]||(m[5]=C((e=>i.$parent.openProduct(k.curItem.data,!0)),["stop"]))},{default:_((()=>[V("选择产品")])),_:1})])])),_:1})):I("",!0),$,b(B,{label:"背景颜色："},{default:_((()=>[f("div",z,[b(W,{modelValue:k.curItem.style.background,"onUpdate:modelValue":m[6]||(m[6]=e=>k.curItem.style.background=e)},null,8,["modelValue"]),b(T,{type:"button",style:{"margin-left":"10px"},onClick:m[7]||(m[7]=C((e=>i.$parent.onEditorResetColor(k.curItem.style,"background","#ffffff")),["stop"]))},{default:_((()=>[V("重置")])),_:1})])])),_:1}),b(B,{label:"商品排序："},{default:_((()=>[b(F,{modelValue:k.curItem.style.display,"onUpdate:modelValue":m[8]||(m[8]=e=>k.curItem.style.display=e)},{default:_((()=>[b(E,{label:"list"},{default:_((()=>[V("列表平铺")])),_:1}),b(E,{label:"slide",disabled:1==k.curItem.style.column},{default:_((()=>[V("横向滑动")])),_:1},8,["disabled"])])),_:1},8,["modelValue"])])),_:1}),b(B,{label:"分列数量："},{default:_((()=>[b(F,{modelValue:k.curItem.style.column,"onUpdate:modelValue":m[9]||(m[9]=e=>k.curItem.style.column=e)},{default:_((()=>[b(E,{label:1,disabled:"slide"==k.curItem.style.display},{default:_((()=>[V("单列")])),_:1},8,["disabled"]),b(E,{label:2},{default:_((()=>[V("两列")])),_:1}),b(E,{label:3},{default:_((()=>[V("三列")])),_:1})])),_:1},8,["modelValue"])])),_:1}),b(B,{label:"显示内容："},{default:_((()=>[b(X,{modelValue:D.productNameShow,"onUpdate:modelValue":m[10]||(m[10]=e=>D.productNameShow=e),onChange:m[11]||(m[11]=e=>q.check(e,"productName"))},{default:_((()=>[V("商品名称")])),_:1},8,["modelValue"]),b(X,{modelValue:D.productPriceShow,"onUpdate:modelValue":m[12]||(m[12]=e=>D.productPriceShow=e),onChange:m[13]||(m[13]=e=>q.check(e,"productPrice"))},{default:_((()=>[V("商品价格")])),_:1},8,["modelValue"]),b(X,{modelValue:D.linePriceShow,"onUpdate:modelValue":m[14]||(m[14]=e=>D.linePriceShow=e),onChange:m[15]||(m[15]=e=>q.check(e,"linePrice"))},{default:_((()=>[V("划线价格")])),_:1},8,["modelValue"]),S(b(X,{modelValue:D.sellingPointShow,"onUpdate:modelValue":m[16]||(m[16]=e=>D.sellingPointShow=e),onChange:m[17]||(m[17]=e=>q.check(e,"sellingPoint"))},{default:_((()=>[V("商品卖点")])),_:1},8,["modelValue"]),[[P,1==k.curItem.style.column]]),S(b(X,{modelValue:D.productSalesShow,"onUpdate:modelValue":m[18]||(m[18]=e=>D.productSalesShow=e),onChange:m[19]||(m[19]=e=>q.check(e,"productSales"))},{default:_((()=>[V("商品销量")])),_:1},8,["modelValue"]),[[P,1==k.curItem.style.column]])])),_:1})])),_:1},8,["model"])])}]]);export{D as default};
