import{_ as e}from"./Product-e5bb92d9.js";import{E as a,i as l,F as o,e as t,d as s,j as d,k as r,q as m,r as i,f as u,l as c,m as n,c as p}from"./element-plus-68e4b1c7.js";import{r as f,_}from"./index-c1104e7d.js";import{ap as h,o as b,c as g,P as v,S as j,W as y,Q as V,a9 as k,T as D,X as w,Y as x,a as C,$ as z}from"./@vue-76da2f05.js";import"./product-03ba16fa.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";let U={getData:(e,a)=>f._get("/shop/plus.recommend/index",e,a),saveData:(e,a)=>f._post("/shop/plus.recommend/index",e,a)};const P={components:{Product:e},data:()=>({form:{is_recommend:0,choice:0,location:[],name:""},all_type:[{name:"购物车",value:10},{name:"会员中心",value:20},{name:"支付完成页",value:30}],showType:[{name:"根据销量降序展示",value:10},{name:"根据添加商品时间降序展示",value:20},{name:"根据人气降序展示",value:30}],showNum:[{name:"显示当前20个",value:20},{name:"显示当前30个",value:30},{name:"显示当前50个",value:50}],type:10,num:20,tableData:[],product_arr:[],isproduct:!1,Data:[],loading:!1}),created(){this.getData()},methods:{getData(){let e=this;U.getData({},!0).then((a=>{e.loading=!1,e.form=a.data.vars.values;for(let l=0;l<e.form.location.length;l++)e.form.location[l]=parseInt(e.form.location[l]);1==e.form.choice?(e.product_arr=a.data.product_arr,e.tableData=e.form.product):(e.type=parseInt(e.form.type),e.num=parseInt(e.form.num)),e.form.is_recommend=parseInt(e.form.is_recommend),e.form.choice=parseInt(e.form.choice)})).catch((a=>{e.loading=!1}))},onSubmit(){let e=this,l=e.form;if(1==l.choice?l.product=e.tableData:(l.type=e.type,l.num=e.num),!e.checkData(l))return!1;e.loading=!0,U.saveData(l,!0).then((l=>{e.loading=!1,1==l.code?(a({message:"恭喜你，保存成功",type:"success"}),e.getData()):e.loading=!1})).catch((a=>{e.loading=!1}))},closeProductDialogFunc(e){if(this.isproduct=e.openDialog,"success"==e.type){if(this.product_arr.indexOf(e.params.product_id)>-1)return a({message:"你已选中该产品",type:"error"}),!1;let l={};l.product_id=e.params.product_id,l.product_name=e.params.product_name,l.product_image=e.params.product_image,l.sort=1,this.tableData.push(l),this.product_arr.push(e.params.product_id)}},addClick(){this.isproduct=!0},deleteClick(e){let a=this.product_arr.indexOf(e.product_id);this.product_arr.splice(a,1),this.tableData.splice(a,1)},checkData:e=>!!e.name&&(0==e.location.length?(a({message:"请选择展示位置",type:"error"}),!1):1!=e.choice||0!=e.product.length||(a({message:"请添加商品",type:"error"}),!1))}},I={class:"product-add"},q=C("div",{class:"common-form"},"商品推荐",-1),F={class:"common-level-rail"},S={class:"pb50"},T={class:"product-info"},N={class:"pic"},O={width:30,height:30},E={class:"common-button-wrapper"};const M=_(P,[["render",function(a,f,_,U,P,M){const Q=l,W=o,X=t,Y=s,$=d,A=r,B=m,G=i,H=u,J=c,K=n,L=p,R=e,Z=h("img-url");return b(),g("div",I,[v(L,{size:"small",ref:"form",model:P.form,"label-width":"100px"},{default:j((()=>[q,v(X,{label:"商品推荐"},{default:j((()=>[v(W,{modelValue:P.form.is_recommend,"onUpdate:modelValue":f[0]||(f[0]=e=>P.form.is_recommend=e)},{default:j((()=>[v(Q,{label:0},{default:j((()=>[y("关")])),_:1}),v(Q,{label:1},{default:j((()=>[y("开")])),_:1})])),_:1},8,["modelValue"])])),_:1}),v(X,{label:"模块名称",rules:[{required:!0,message:" "}],prop:"name"},{default:j((()=>[v(Y,{modelValue:P.form.name,"onUpdate:modelValue":f[1]||(f[1]=e=>P.form.name=e),placeholder:"请输入模块名称",class:"max-w460",disabled:0==P.form.is_recommend},null,8,["modelValue","disabled"])])),_:1}),v(X,{label:"展示位置"},{default:j((()=>[v(A,{modelValue:P.form.location,"onUpdate:modelValue":f[2]||(f[2]=e=>P.form.location=e)},{default:j((()=>[(b(!0),g(V,null,k(P.all_type,((e,a)=>(b(),D($,{label:e.value,key:a,disabled:0==P.form.is_recommend},{default:j((()=>[y(w(e.name),1)])),_:2},1032,["label","disabled"])))),128))])),_:1},8,["modelValue"])])),_:1}),v(X,{label:"推荐商品"},{default:j((()=>[v(W,{modelValue:P.form.choice,"onUpdate:modelValue":f[3]||(f[3]=e=>P.form.choice=e)},{default:j((()=>[v(Q,{label:0,disabled:0==P.form.is_recommend},{default:j((()=>[y("按条件选择")])),_:1},8,["disabled"]),v(Q,{label:1,disabled:0==P.form.is_recommend},{default:j((()=>[y("自定义选择")])),_:1},8,["disabled"])])),_:1},8,["modelValue"])])),_:1}),0==P.form.choice?(b(),D(X,{key:0,label:""},{default:j((()=>[v(G,{modelValue:P.type,"onUpdate:modelValue":f[4]||(f[4]=e=>P.type=e),placeholder:"",disabled:0==P.form.is_recommend},{default:j((()=>[(b(!0),g(V,null,k(P.showType,((e,a)=>(b(),D(B,{label:e.name,value:e.value,key:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1})):x("",!0),0==P.form.choice?(b(),D(X,{key:1,label:""},{default:j((()=>[v(G,{modelValue:P.num,"onUpdate:modelValue":f[5]||(f[5]=e=>P.num=e),placeholder:"",disabled:0==P.form.is_recommend},{default:j((()=>[(b(!0),g(V,null,k(P.showNum,((e,a)=>(b(),D(B,{label:e.name,value:e.value,key:a},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])),_:1})):x("",!0),1==P.form.choice?(b(),D(X,{key:2,size:"small",label:""},{default:j((()=>[C("div",F,[v(H,{size:"small",icon:"Plus",onClick:M.addClick},{default:j((()=>[y("添加商品")])),_:1},8,["onClick"])]),C("div",S,[v(K,{size:"small",data:P.tableData,border:""},{default:j((()=>[v(J,{label:"图片",width:"60"},{default:j((e=>[C("div",T,[C("div",N,[z(C("img",O,null,512),[[Z,e.row.product_image]])])])])),_:1}),v(J,{prop:"product_name",label:"商品"}),v(J,{label:"排序",width:"100"},{default:j((e=>[v(Y,{modelValue:e.row.sort,"onUpdate:modelValue":a=>e.row.sort=a,type:"number",disabled:0==P.form.is_recommend},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:1}),v(J,{fixed:"right",label:"操作",width:"110"},{default:j((e=>[v(H,{onClick:a=>M.deleteClick(e.row),type:"text",size:"small",disabled:0==P.form.is_recommend},{default:j((()=>[y("删除")])),_:2},1032,["onClick","disabled"])])),_:1})])),_:1},8,["data"])])])),_:1})):x("",!0),C("div",E,[v(H,{type:"primary",size:"small",onClick:M.onSubmit,loading:P.loading},{default:j((()=>[y("提交")])),_:1},8,["onClick","loading"])])])),_:1},8,["model"]),v(R,{isproduct:P.isproduct,onCloseDialog:f[6]||(f[6]=e=>M.closeProductDialogFunc(e))},{default:j((()=>[y("产品列表弹出层")])),_:1},8,["isproduct"])])}]]);export{M as default};
