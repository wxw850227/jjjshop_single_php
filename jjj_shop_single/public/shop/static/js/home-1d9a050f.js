import{E as t,f as i,v as a}from"./element-plus-68e4b1c7.js";import{_ as o,d as s}from"./index-c1104e7d.js";import{P as e}from"./page-83db4710.js";import r from"./Type-0c347faf.js";import m from"./Model-626a091e.js";import p from"./Params-3093099f.js";import{ae as d,$ as l,o as j,c as n,a as c,T as u,Y as f,P as g,S as y,W as D}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";import"./Setpages-4ac56950.js";import"./Search-ff9d60f5.js";import"./Banner-baa48892.js";import"./ImageSingle-29dcd093.js";import"./Window-31196763.js";import"./Video-81d35b24.js";import"./Article-628fe6a8.js";import"./Special-6a0940c4.js";import"./Notice-06055d88.js";import"./NavBar-480bd000.js";import"./Product-e13ef970.js";import"./product-03ba16fa.js";import"./Coupon-af277866.js";import"./Store-3ba91cac.js";import"./Service-1000e87e.js";import"./RichText-2ba88b73.js";import"./Blank-4f5ca16d.js";import"./Guide-1195f963.js";import"./Title-8f6b7ba0.js";import"./vuedraggable-13be42ee.js";import"./vue-407f4729.js";import"./sortablejs-9c07ead7.js";import"./store-b3f0a89a.js";import"./Upload-3b016181.js";import"./AddCategory-35fb7824.js";import"./file-9f429f58.js";/* empty css                                                               */import"./Setpages-6573bd79.js";import"./Search-2eb46ec7.js";import"./Banner-c1bde18b.js";import"./Setlink-f79f7600.js";import"./Article-93f0132b.js";import"./article-0a1d2a21.js";import"./ImageSingle-52aaca2a.js";import"./Window-6e12209d.js";import"./Video-bcd0e948.js";import"./Article-8bd6352f.js";import"./Special-f225bd39.js";import"./Notice-5384d57a.js";import"./NavBar-1885232e.js";import"./Product-6ef891d1.js";import"./Coupon-393bae7f.js";import"./Store-730612a2.js";import"./Service-da13d047.js";import"./RichText-04233a24.js";import"./UE-de93c921.js";import"./Blank-920f2df2.js";import"./Guide-a7176570.js";import"./Title-3d317f9a.js";import"./Product-e5bb92d9.js";const h={class:"diy-container clearfix"},v={class:"diy-menu"},S={class:"diy-phone"},_={class:"diy-info"},x={class:"common-button-wrapper"};const b=o({components:{Type:r,Model:m,Params:p},data:()=>({loading:!0,defaultData:{},diyData:{items:[]},opts:{},form:{umeditor:{},curItem:{},selectedIndex:-1}}),created(){this.getData()},methods:{getData(){let t=this;e.editHome({},!0).then((i=>{t.defaultData=i.data.defaultData,t.diyData=i.data.jsonData,t.form.curItem=t.diyData.page,t.opts=i.data.opts,t.loading=!1})).catch((i=>{t.loading=!1}))},onAddItem:function(t){let i=s(this.defaultData[t]),a=0;this.form.selectedIndex<0?(a=0,this.diyData.items.unshift(i)):(a=this.form.selectedIndex+1,this.diyData.items.splice(a,0,i)),this.$refs.model.onEditer(a)},Submit(){let i=this;i.loading=!0;let a=i.diyData,o=i.page_id;e.SavePage({params:JSON.stringify(a),page_id:o},!0).then((a=>{i.loading=!1,t({message:"恭喜你，修改成功",type:"success"}),i.getData(),i.form.selectedIndex=-1})).catch((t=>{i.loading=!1}))}}},[["render",function(t,o,s,e,r,m){const p=d("Type"),b=d("Model"),I=d("Params"),P=i,T=a;return l((j(),n("div",h,[c("div",v,[r.loading?f("",!0):(j(),u(p,{key:0,defaultData:r.defaultData},null,8,["defaultData"]))]),c("div",S,[r.loading?f("",!0):(j(),u(b,{key:0,ref:"model",form:r.form,defaultData:r.defaultData,diyData:r.diyData},null,8,["form","defaultData","diyData"]))]),c("div",_,[r.loading?f("",!0):(j(),u(I,{key:0,form:r.form,defaultData:r.defaultData,diyData:r.diyData},null,8,["form","defaultData","diyData"]))]),c("div",x,[g(P,{size:"small",type:"primary",onClick:o[0]||(o[0]=t=>m.Submit()),loading:r.loading},{default:y((()=>[D("保存")])),_:1},8,["loading"])])])),[[T,r.loading]])}],["__scopeId","data-v-feaf290a"]]);export{b as default};
