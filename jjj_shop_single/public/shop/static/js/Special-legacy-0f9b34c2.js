System.register(["./element-plus-legacy-cd39421e.js","./article-legacy-fdb3cafc.js","./index-legacy-4f532ec6.js","./@vue-legacy-3fcc10b7.js","./@vueuse-legacy-bdd63cbd.js","./lodash-es-legacy-7c31c52b.js","./async-validator-legacy-aa1fd2de.js","./dayjs-legacy-b61d7302.js","./call-bind-legacy-93acd607.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-053c792c.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-51ef7ec5.js","./pinia-legacy-9b6e299c.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-bbbea217.js","./side-channel-legacy-25200cf8.js","./object-inspect-legacy-b217d60b.js","./vue-clipboard2-legacy-3536b1d9.js","./clipboard-legacy-531f08f2.js","./vue-ueditor-wrap-legacy-8e203191.js"],(function(e,l){"use strict";var a,t,n,u,c,r,o,s,i,d,m,y,g,f,p,j,h,v,b,_,I,x=document.createElement("style");return x.textContent=".diy-special-cover img{width:140px;height:38px}\n",document.head.appendChild(x),{setters:[function(e){a=e.q,t=e.r,n=e.e,u=e.d,c=e.i,r=e.F,o=e.c},function(e){s=e.A},function(e){i=e._},function(e){d=e.ap,m=e.o,y=e.c,g=e.a,f=e.X,p=e.P,j=e.S,h=e.Q,v=e.a9,b=e.T,_=e.$,I=e.W},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l={data:function(){return{category:[]}},props:["curItem","selectedIndex","opts"],created:function(){this.getData()},methods:{getData:function(){var e=this;s.getCategory({page_id:e.page_id},!0).then((function(l){e.category=l.data.category})).catch((function(l){e.loading=!1}))}}},x={class:"common-form"},V=g("div",null,[I(" 文章数据请到 "),g("a",{href:"#/plus/article/index",target:"_blank"},"内容管理 - 文章列表"),I(" 中管理 ")],-1),w={class:"diy-special-cover"},k=g("div",null,"建议尺寸140×38",-1);e("default",i(l,[["render",function(e,l,s,i,C,q){var z=a,S=t,U=n,D=u,E=c,N=r,$=o,A=d("img-url");return m(),y("div",null,[g("div",x,[g("span",null,f(s.curItem.name),1)]),p($,{size:"small",model:s.curItem,"label-width":"100px"},{default:j((function(){return[p(U,{label:"文章分类："},{default:j((function(){return[p(S,{modelValue:s.curItem.params.auto.category,"onUpdate:modelValue":l[0]||(l[0]=function(e){return s.curItem.params.auto.category=e})},{default:j((function(){return[p(z,{label:"全部分类",value:0}),(m(!0),y(h,null,v(C.category,(function(e){return m(),b(z,{key:e.category_id,label:e.name,value:e.category_id},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),p(U,{label:"显示数量："},{default:j((function(){return[p(D,{type:"number",min:"1",modelValue:s.curItem.params.auto.showNum,"onUpdate:modelValue":l[1]||(l[1]=function(e){return s.curItem.params.auto.showNum=e}),style:{width:"auto"}},null,8,["modelValue"]),V]})),_:1}),p(U,{label:"图片："},{default:j((function(){return[g("div",w,[_(g("img",{alt:"",onClick:l[2]||(l[2]=function(l){return e.$parent.onEditorSelectImage(s.curItem.style,"image")})},null,512),[[A,s.curItem.style.image]]),k])]})),_:1}),p(U,{label:"显示类型："},{default:j((function(){return[p(N,{modelValue:s.curItem.style.display,"onUpdate:modelValue":l[3]||(l[3]=function(e){return s.curItem.style.display=e})},{default:j((function(){return[p(E,{label:1},{default:j((function(){return[I("单行")]})),_:1}),p(E,{label:2},{default:j((function(){return[I("两行")]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["model"])])}]]))}}}));
