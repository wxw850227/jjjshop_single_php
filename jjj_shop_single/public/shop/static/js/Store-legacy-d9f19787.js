System.register(["./element-plus-legacy-cd39421e.js","./@vue-legacy-3fcc10b7.js","./index-legacy-4f532ec6.js","./@vueuse-legacy-bdd63cbd.js","./lodash-es-legacy-7c31c52b.js","./async-validator-legacy-aa1fd2de.js","./dayjs-legacy-b61d7302.js","./call-bind-legacy-93acd607.js","./get-intrinsic-legacy-4f34f38e.js","./has-symbols-legacy-afcc0593.js","./has-proto-legacy-d280ab1e.js","./function-bind-legacy-b76e1749.js","./has-legacy-06d86c07.js","./@element-plus-legacy-053c792c.js","./escape-html-legacy-ae962a8c.js","./normalize-wheel-es-legacy-13d39621.js","./@ctrl-legacy-33dbca08.js","./vue-router-legacy-51ef7ec5.js","./pinia-legacy-9b6e299c.js","./vue-demi-legacy-97cfbb01.js","./axios-legacy-40880ebd.js","./qs-legacy-bbbea217.js","./side-channel-legacy-25200cf8.js","./object-inspect-legacy-b217d60b.js","./vue-clipboard2-legacy-3536b1d9.js","./clipboard-legacy-531f08f2.js","./vue-ueditor-wrap-legacy-8e203191.js"],(function(e,l){"use strict";var t,n,u,o,c,a,s,i,r,d,m,p,f,g,y,h,j,x,b,v,k,I,_=document.createElement("style");return _.textContent=".choice-shop-list{display:flex;justify-content:flex-start;flex-wrap:wrap}.choice-shop-list .item{position:relative;width:80px;height:80px;margin-right:10px;border:1px solid #dddddd}.choice-shop-list .item .delete-box{position:absolute;width:20px;height:20px;top:-10px;right:-10px;font-size:20px;cursor:pointer;color:#999}.choice-shop-list .item .delete-box:hover{color:#f30}.choice-shop-list .item.plus-btn{display:flex;flex-direction:column;justify-content:center;align-items:center}.choice-shop-list .item.plus-btn>i{font-size:30px;color:#ccc}.choice-shop-list img{width:100%;height:100%}\n",document.head.appendChild(_),{setters:[function(e){t=e.i,n=e.F,u=e.e,o=e.B,c=e.d,a=e.H,s=e.f,i=e.c},function(e){r=e.ae,d=e.o,m=e.c,p=e.a,f=e.X,g=e.P,y=e.S,h=e.W,j=e.T,x=e.Q,b=e.a9,v=e.a1,k=e.Y},function(e){I=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l={data:function(){return{}},props:["curItem","selectedIndex","opts"],mounted:function(){},methods:{}},_={class:"common-form"},w={class:"choice-shop-list"},C=["onClick"],V={class:"delete-box"},z=["src"],E=["src"],S=p("p",null,"选择门店",-1),U={class:"d-s-c"};e("default",I(l,[["render",function(e,l,I,$,q,D){var F=t,N=n,P=u,B=r("CircleCloseFilled"),H=o,Q=r("Plus"),R=c,T=a,W=s,X=i;return d(),m("div",null,[p("div",_,[p("span",null,f(I.curItem.name),1)]),g(X,{size:"small",model:I.curItem,"label-width":"100px"},{default:y((function(){return[g(P,{label:"商品来源："},{default:y((function(){return[g(N,{modelValue:I.curItem.params.source,"onUpdate:modelValue":l[0]||(l[0]=function(e){return I.curItem.params.source=e})},{default:y((function(){return[g(F,{label:"auto"},{default:y((function(){return[h("自动获取")]})),_:1}),g(F,{label:"choice"},{default:y((function(){return[h("手动选择")]})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),"choice"==I.curItem.params.source?(d(),j(P,{key:0,label:"门店列表："},{default:y((function(){return[p("div",w,[(d(!0),m(x,null,b(I.curItem.data,(function(l,t){return d(),m("div",{key:t,class:"item",onClick:function(t){return e.log(l)}},[p("div",V,[g(H,{onClick:function(l){return e.$parent.onEditorDeleleData(t,I.selectedIndex)}},{default:y((function(){return[g(B)]})),_:2},1032,["onClick"])]),l.logo?(d(),m("img",{key:0,src:l.logo.file_path,alt:""},null,8,z)):(d(),m("img",{key:1,src:l.logo_image,alt:""},null,8,E))],8,C)})),128)),p("div",{class:"item plus-btn",onClick:l[1]||(l[1]=v((function(l){return e.$parent.openStore(!0)}),["stop"]))},[g(H,null,{default:y((function(){return[g(Q)]})),_:1}),S])])]})),_:1})):k("",!0),"auto"==I.curItem.params.source?(d(),j(P,{key:1,label:"展示数量："},{default:y((function(){return[g(R,{style:{width:"auto"},modelValue:I.curItem.params.auto.showNum,"onUpdate:modelValue":l[2]||(l[2]=function(e){return I.curItem.params.auto.showNum=e}),class:"w-auto"},null,8,["modelValue"])]})),_:1})):k("",!0),g(P,{label:"背景颜色："},{default:y((function(){return[p("div",U,[g(T,{modelValue:I.curItem.style.background,"onUpdate:modelValue":l[3]||(l[3]=function(e){return I.curItem.style.background=e})},null,8,["modelValue"]),g(W,{type:"button",style:{"margin-left":"10px"},onClick:l[4]||(l[4]=v((function(l){return e.$parent.onEditorResetColor(I.curItem.style,"background","#ffffff")}),["stop"]))},{default:y((function(){return[h("重置 ")]})),_:1})])]})),_:1})]})),_:1},8,["model"])])}]]))}}}));
