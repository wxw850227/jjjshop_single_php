import{q as e,r as a,e as t,d as l,i as s,F as o,c as r}from"./element-plus-68e4b1c7.js";import{A as m}from"./article-0a1d2a21.js";import{_ as i}from"./index-c1104e7d.js";import{ap as u,o as d,c as p,a as c,X as n,P as j,S as y,Q as g,a9 as b,T as f,$ as h,W as v}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const _={data:()=>({category:[]}),props:["curItem","selectedIndex","opts"],created(){this.getData()},methods:{getData(){let e=this;m.getCategory({page_id:e.page_id},!0).then((a=>{e.category=a.data.category})).catch((a=>{e.loading=!1}))}}},I={class:"common-form"},V=c("div",null,[v(" 文章数据请到 "),c("a",{href:"#/plus/article/index",target:"_blank"},"内容管理 - 文章列表"),v(" 中管理 ")],-1),x={class:"diy-special-cover"},w=c("div",null,"建议尺寸140×38",-1);const k=i(_,[["render",function(m,i,_,k,q,z){const U=e,C=a,D=t,N=l,S=s,$=o,A=r,E=u("img-url");return d(),p("div",null,[c("div",I,[c("span",null,n(_.curItem.name),1)]),j(A,{size:"small",model:_.curItem,"label-width":"100px"},{default:y((()=>[j(D,{label:"文章分类："},{default:y((()=>[j(C,{modelValue:_.curItem.params.auto.category,"onUpdate:modelValue":i[0]||(i[0]=e=>_.curItem.params.auto.category=e)},{default:y((()=>[j(U,{label:"全部分类",value:0}),(d(!0),p(g,null,b(q.category,(e=>(d(),f(U,{key:e.category_id,label:e.name,value:e.category_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),j(D,{label:"显示数量："},{default:y((()=>[j(N,{type:"number",min:"1",modelValue:_.curItem.params.auto.showNum,"onUpdate:modelValue":i[1]||(i[1]=e=>_.curItem.params.auto.showNum=e),style:{width:"auto"}},null,8,["modelValue"]),V])),_:1}),j(D,{label:"图片："},{default:y((()=>[c("div",x,[h(c("img",{alt:"",onClick:i[2]||(i[2]=e=>m.$parent.onEditorSelectImage(_.curItem.style,"image"))},null,512),[[E,_.curItem.style.image]]),w])])),_:1}),j(D,{label:"显示类型："},{default:y((()=>[j($,{modelValue:_.curItem.style.display,"onUpdate:modelValue":i[3]||(i[3]=e=>_.curItem.style.display=e)},{default:y((()=>[j(S,{label:1},{default:y((()=>[v("单行")])),_:1}),j(S,{label:2},{default:y((()=>[v("两行")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"])])}]]);export{k as default};
