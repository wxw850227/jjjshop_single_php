import{_ as e}from"./Setlink-f9e4d770.js";import{_ as t}from"./Upload-b4b0cf8c.js";import{E as l,i as a,F as o,e as s,H as i,f as r,B as d,d as n,c as m}from"./element-plus-68e4b1c7.js";import{P as u}from"./page-7eccbdf3.js";import{S as c}from"./SetTab-6f1a3fd1.js";import{ae as f,ap as p,o as _,c as h,a as g,V as b,Q as k,a9 as v,$ as D,Y as x,X as C,P as j,S as y,W as V,a1 as w,T as U,bb as I,b9 as P}from"./@vue-76da2f05.js";import{_ as E}from"./index-d5abae2c.js";import"./Article-6004f402.js";import"./article-ea099f88.js";import"./product-a5c451ce.js";import"./AddCategory-f060626c.js";import"./file-c3df6c02.js";/* empty css                                                               */import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const S={data:()=>({isupload:!1,formData:{type:"0",is_auto:"0",backgroundColor:"#ffffff",textColor:"#333333",textHoverColor:"red",bulge:!1,list:[]},is_linkset:!1,index:0}),components:{Upload:t,Setlink:c},created(){this.getData()},methods:{getData(){let e=this;u.getTabbar({},!0).then((t=>{e.formData=t.data.vars.data})).catch((t=>{e.loading=!1}))},Submit(){let e=this;e.loading=!0;let t=e.formData;(t.list.length<=0||!t.list)&&(t={}),u.editTabbar({data:t},!0).then((t=>{e.loading=!1,l({message:"恭喜你，修改成功",type:"success"}),e.getData()})).catch((t=>{e.loading=!1}))},changeLink(e){this.is_linkset=!0,this.index=e},closeLinkset(e){this.is_linkset=!1,this.formData.list[this.index].link_url="/"+e.url,this.formData.list[this.index].text=e.name},onEditorDeleleData:function(e){if(this.formData.list.length<=1)return l({message:"至少保留一个",type:"error"}),!1;this.formData.list.splice(e,1)},onEditorSelectImage:function(e,t){this.isupload=!0,this.imgModel={index:e,imgUrl:t}},returnImgsFunc(e){null!=e&&(this.imgModel.index[this.imgModel.imgUrl]=e[0].file_path),this.isupload=!1},onEditorResetColor:function(e,t,l){e[t]=l},onEditorAddData:function(){let e=this;if(e.formData.list){if(e.formData.list.length>=5)return l({message:"最多添加5个",type:"error"}),!1;{let t={iconPath:"",text:"",is_show:!0,selectedIconPath:"",link:{wap_url:""}};e.formData.list.push(t)}}else{let t=[{...{iconPath:"",text:"",is_show:!0,selectedIconPath:"",link:{wap_url:""}}}];e.formData={type:0,backgroundColor:"",textColor:"",textHoverColor:"",bulge:!1,list:[]},e.formData.list=t}},mouseenter(e){e.target.childNodes[2].style.color=this.formData.textHoverColor},mouseleave(e){e.target.childNodes[2].style.color=this.formData.textColor}}},H=e=>(I("data-v-5480ce0c"),e=e(),P(),e),M={class:"d-s-s pb50"},R={class:"flex-1 mr30"},L={class:"model-container"},z={class:"d-a-c"},A={key:0},F={class:"nav_img",alt:""},T={class:"param-container"},N=H((()=>g("div",{class:"common-form"},[g("span",null,"展示设置")],-1))),q={class:"d-s-c"},W={class:"d-s-c"},B={class:"d-s-c"},J={class:"param-img-item ww100"},K={class:"d-e-c"},O={class:"d-a-c"},Q={class:"icon"},X=["onClick"],Y={class:"icon"},$=["onClick"],G={class:"d-s-c mb16 ww100"},Z={class:"url-box flex-1 d-s-c"},ee=H((()=>g("span",{class:"key-name"},"链接：",-1))),te={class:"url-box ml10"},le={class:"url-box flex-1 d-s-c ww100"},ae=H((()=>g("span",{class:"key-name"},"名称：",-1))),oe={key:0,class:"d-c-c"},se={class:"common-button-wrapper"};const ie=E(S,[["render",function(l,u,c,I,P,E){const S=a,H=o,ie=s,re=i,de=r,ne=f("DeleteFilled"),me=d,ue=n,ce=m,fe=t,pe=e,_e=p("img-url");return _(),h("div",M,[g("div",R,[g("div",L,[g("div",{class:"img-box p10",style:b("backgroundColor:"+P.formData.backgroundColor+";")},[g("div",z,[(_(!0),h(k,null,v(P.formData.list,((e,t)=>(_(),h("div",{key:t,class:"d-c d-c-c",onMouseenter:u[0]||(u[0]=(...e)=>E.mouseenter&&E.mouseenter(...e)),onMouseleave:u[1]||(u[1]=(...e)=>E.mouseleave&&E.mouseleave(...e))},[2!=P.formData.type?(_(),h("div",A,[D(g("img",F,null,512),[[_e,0==t?e.selectedIconPath:e.iconPath]])])):x("",!0),1!=P.formData.type?(_(),h("div",{key:1,style:b(0==t?"color:"+P.formData.textHoverColor+";":"color:"+P.formData.textColor+";")},C(e.text),5)):x("",!0)],32)))),128))])],4)])]),g("div",T,[N,j(ce,{size:"small",model:P.formData,"label-width":"150px"},{default:y((()=>[j(ie,{label:"是否开启自定义："},{default:y((()=>[j(H,{modelValue:P.formData.is_auto,"onUpdate:modelValue":u[2]||(u[2]=e=>P.formData.is_auto=e)},{default:y((()=>[j(S,{label:"1"},{default:y((()=>[V("开启")])),_:1}),j(S,{label:"0"},{default:y((()=>[V("关闭")])),_:1})])),_:1},8,["modelValue"])])),_:1}),j(ie,{label:"导航类型："},{default:y((()=>[j(H,{modelValue:P.formData.type,"onUpdate:modelValue":u[3]||(u[3]=e=>P.formData.type=e)},{default:y((()=>[j(S,{label:"0"},{default:y((()=>[V("图文")])),_:1}),j(S,{label:"1"},{default:y((()=>[V("图片")])),_:1}),j(S,{label:"2"},{default:y((()=>[V("文字")])),_:1})])),_:1},8,["modelValue"])])),_:1}),j(ie,{label:"背景颜色："},{default:y((()=>[g("div",q,[j(re,{modelValue:P.formData.backgroundColor,"onUpdate:modelValue":u[4]||(u[4]=e=>P.formData.backgroundColor=e)},null,8,["modelValue"]),j(de,{type:"button",style:{"margin-left":"10px"},onClick:u[5]||(u[5]=w((e=>E.onEditorResetColor(P.formData,"backgroundColor","#ffffff")),["stop"]))},{default:y((()=>[V("重置")])),_:1})])])),_:1}),j(ie,{label:"文字颜色："},{default:y((()=>[g("div",W,[j(re,{modelValue:P.formData.textColor,"onUpdate:modelValue":u[6]||(u[6]=e=>P.formData.textColor=e)},null,8,["modelValue"]),j(de,{type:"button",style:{"margin-left":"10px"},onClick:u[7]||(u[7]=w((e=>E.onEditorResetColor(P.formData,"textColor","#ffffff")),["stop"]))},{default:y((()=>[V("重置")])),_:1})])])),_:1}),j(ie,{label:"选中颜色："},{default:y((()=>[g("div",B,[j(re,{modelValue:P.formData.textHoverColor,"onUpdate:modelValue":u[8]||(u[8]=e=>P.formData.textHoverColor=e)},null,8,["modelValue"]),j(de,{type:"button",style:{"margin-left":"10px"},onClick:u[9]||(u[9]=w((e=>E.onEditorResetColor(P.formData,"textHoverColor","#ffffff")),["stop"]))},{default:y((()=>[V("重置")])),_:1})])])),_:1}),(_(!0),h(k,null,v(P.formData.list,((e,t)=>(_(),U(ie,{label:e.text+":",key:t},{default:y((()=>[g("div",J,[g("div",K,[j(me,{class:"el-icon-delete-solid",onClick:e=>E.onEditorDeleleData(t)},{default:y((()=>[j(ne)])),_:2},1032,["onClick"])]),"店铺"==e.text?(_(),U(ie,{key:0,label:"显示隐藏："},{default:y((()=>[j(H,{modelValue:e.is_show,"onUpdate:modelValue":t=>e.is_show=t},{default:y((()=>[j(S,{label:!1},{default:y((()=>[V("隐藏")])),_:1}),j(S,{label:!0},{default:y((()=>[V("显示")])),_:1})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024)):x("",!0),g("div",O,[g("div",Q,[V("未选中： "),D(g("img",{alt:"",onClick:t=>E.onEditorSelectImage(e,"iconPath")},null,8,X),[[_e,e.iconPath]])]),g("div",Y,[V(" 已选中： "),D(g("img",{alt:"",onClick:t=>E.onEditorSelectImage(e,"selectedIconPath")},null,8,$),[[_e,e.selectedIconPath]])])])]),g("div",G,[g("div",Z,[ee,j(ue,{disabled:"",modelValue:e.link_url,"onUpdate:modelValue":t=>e.link_url=t},null,8,["modelValue","onUpdate:modelValue"])]),g("div",te,[j(de,{type:"primary",onClick:e=>E.changeLink(t)},{default:y((()=>[V("选择链接")])),_:2},1032,["onClick"])])]),g("div",le,[ae,j(ue,{modelValue:e.text,"onUpdate:modelValue":t=>e.text=t},null,8,["modelValue","onUpdate:modelValue"])])])),_:2},1032,["label"])))),128)),P.formData.list.length<5?(_(),h("div",oe,[j(de,{onClick:E.onEditorAddData},{default:y((()=>[V("添加一个")])),_:1},8,["onClick"])])):x("",!0)])),_:1},8,["model"])]),g("div",se,[j(de,{size:"small",type:"primary",onClick:u[10]||(u[10]=e=>E.Submit())},{default:y((()=>[V("保存")])),_:1})]),P.isupload?(_(),U(fe,{key:0,isupload:P.isupload,config:{total:3},onReturnImgs:E.returnImgsFunc},null,8,["isupload","onReturnImgs"])):x("",!0),P.is_linkset?(_(),U(pe,{key:1,is_linkset:P.is_linkset,onCloseDialog:E.closeLinkset},{default:y((()=>[V("选择链接")])),_:1},8,["is_linkset","onCloseDialog"])):x("",!0)])}],["__scopeId","data-v-5480ce0c"]]);export{ie as default};
