import e from"./Setpages-4ac56950.js";import t from"./Search-ff9d60f5.js";import i from"./Banner-baa48892.js";import d from"./ImageSingle-29dcd093.js";import n from"./Window-31196763.js";import o from"./Video-81d35b24.js";import s from"./Article-628fe6a8.js";import r from"./Special-6a0940c4.js";import m from"./Notice-06055d88.js";import l from"./NavBar-480bd000.js";import c from"./Product-e13ef970.js";import a from"./Coupon-af277866.js";import p from"./Store-3ba91cac.js";import x from"./Service-1000e87e.js";import I from"./RichText-2ba88b73.js";import u from"./Blank-4f5ca16d.js";import f from"./Guide-1195f963.js";import y from"./Title-8f6b7ba0.js";import{d as j}from"./vuedraggable-13be42ee.js";import{a as v}from"./element-plus-68e4b1c7.js";import{_ as h}from"./index-c1104e7d.js";import{ae as k,o as g,c as S,a as b,P as w,M as B,S as D,T,Y as N}from"./@vue-76da2f05.js";import"./product-03ba16fa.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./vue-407f4729.js";import"./sortablejs-9c07ead7.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const V={class:"diy-phone-container"};const _=h({components:{Setpages:e,Search:t,Banner:i,ImageSingle:d,Window:n,Video:o,ArticleIndex:s,Special:r,Notice:m,NavBar:l,ProductIndex:c,Coupon:a,Store:p,Service:x,RichText:I,Blank:u,Guide:f,draggable:j,Title:y},data:()=>({}),props:{form:Object,defaultData:Object,diyData:Object},created(){},methods:{onDeleleItem:function(e){let t=this;v.confirm("确定要删除吗?","提示",{type:"warning"}).then((()=>{t.diyData.items.splice(e,1),t.form.selectedIndex=-1}))},onEditer:function(e){let t=this;t.form.selectedIndex=e,t.form.curItem=t.form.selectedIndex<0?t.diyData.page:t.diyData.items[t.form.selectedIndex]},initEditor:function(){let e=this;e.$nextTick((function(){e.form.umeditor.hasOwnProperty("key")&&e.form.umeditor.destroy(),e.editorHtmlComponent(),e.form.curItem.type}))},editorHtmlComponent:function(){this.$refs["diy-editor"]}}},[["render",function(e,t,i,d,n,o){const s=k("Setpages"),r=k("Search"),m=k("Banner"),l=k("ImageSingle"),c=k("Window"),a=k("Video"),p=k("ArticleIndex"),x=k("Special"),I=k("Notice"),u=k("NavBar"),f=k("ProductIndex"),y=k("Coupon"),j=k("Store"),v=k("Service"),h=k("RichText"),_=k("Blank"),A=k("Guide"),C=k("Title"),P=k("draggable");return g(),S("div",V,[b("div",{class:B(["diy-phone-item",{active:i.form.selectedIndex<0}])},[w(s,{diyData:i.diyData},null,8,["diyData"])],2),w(P,{class:"wrapper",modelValue:i.diyData.items,"onUpdate:modelValue":t[0]||(t[0]=e=>i.diyData.items=e),options:{animation:120,filter:".drag__nomove"}},{item:D((({element:e,index:t})=>[b("div",{class:B(["diy-phone-item",{active:i.form.selectedIndex==t}])},["search"==e.type?(g(),T(r,{key:0,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"banner"==e.type?(g(),T(m,{key:1,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"imageSingle"==e.type?(g(),T(l,{key:2,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"window"==e.type?(g(),T(c,{key:3,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"video"==e.type?(g(),T(a,{key:4,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"article"==e.type?(g(),T(p,{key:5,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"special"==e.type?(g(),T(x,{key:6,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"notice"==e.type?(g(),T(I,{key:7,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"navBar"==e.type?(g(),T(u,{key:8,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"product"==e.type?(g(),T(f,{key:9,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"coupon"==e.type?(g(),T(y,{key:10,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"store"==e.type?(g(),T(j,{key:11,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"service"==e.type?(g(),T(v,{key:12,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"richText"==e.type?(g(),T(h,{key:13,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"blank"==e.type?(g(),T(_,{key:14,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"guide"==e.type?(g(),T(A,{key:15,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):"title"==e.type?(g(),T(C,{key:16,item:e,index:t,selectedIndex:i.form.selectedIndex},null,8,["item","index","selectedIndex"])):N("",!0)],2)])),_:1},8,["modelValue","options"])])}],["__scopeId","data-v-a664694e"]]);export{_ as default};
