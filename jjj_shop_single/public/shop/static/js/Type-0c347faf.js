import{_ as t}from"./index-c1104e7d.js";import{o as s,c as i,a as o,Q as e,a9 as r,X as p,Y as a}from"./@vue-76da2f05.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-6a1b7bd0.js";import"./object-inspect-c71aff05.js";import"./element-plus-68e4b1c7.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const l={data:()=>({typeList:null}),props:{defaultData:Object},created(){this.init()},filters:{},methods:{init(){let t={};for(let s in this.defaultData){let i=this.defaultData[s];t.hasOwnProperty(i.group)||(t[i.group]={},t[i.group].children=[]),t[i.group].children.push(i)}this.typeList=t},typename(t){let s="";return"media"==t?s="媒体组件":"shop"==t?s="商城组件":"tools"==t&&(s="工具组件"),s}}},n={key:0},m=o("div",{class:"common-form"},"组件库",-1),c={class:"min-group"},d={class:"hd"},u={class:"bd"},j=["onClick"],h=o("p",{class:"p-icon icon iconfont icon-tuichu"},null,-1),y={class:"p-txt"};const v=t(l,[["render",function(t,l,v,f,b,g){return null!=b.typeList?(s(),i("div",n,[m,o("div",c,[(s(!0),i(e,null,r(b.typeList,((a,l)=>(s(),i("div",{key:l},[o("div",d,p(g.typename(l)),1),o("div",u,[(s(!0),i(e,null,r(a.children,((e,r)=>(s(),i("div",{class:"item",key:r,onClick:s=>t.$parent.onAddItem(e.type)},[h,o("p",y,p(e.name),1)],8,j)))),128))])])))),128))])])):a("",!0)}]]);export{v as default};
