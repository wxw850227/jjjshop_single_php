import{E as e,d as a,e as l,i as t,l as o,m as r,f as i,c as s}from"./element-plus-68e4b1c7.js";import{S as d}from"./setting-688fb592.js";import n from"./Area-5297bb7f.js";import{_ as u,d as m}from"./index-d5abae2c.js";import{ae as f,o as p,c,P as h,S as y,a as _,W as w,Q as b,a9 as v,X as j,Y as g,T as k,bb as x,b9 as V}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const C={components:{Areas:n},data:()=>({form:{method:"10",name:"",sort:1,radio:"10",rule:[]},formRules:{name:[{required:!0,message:" ",trigger:"blur"}]},loading:!1,options:[],optionsMap:{},areaModel:{index:0},show_area:!1,tableHeadName:{first:"首件(个)",first_fee:"运费(元)",additional:"续件(个)",additional_fee:"续费(元)"},cityCount:0,formData:[]}),watch:{"form.radio":function(e,a){this.tableHeadName="10"==e?{first:"首件(个)",first_fee:"运费(元)",additional:"续件(个)",additional_fee:"续费(元)"}:{first:"首重(Kg)",first_fee:"运费(元)",additional:"续重(Kg)",additional_fee:"续费(元)"}},"form.rule":{handler(e,a){},deep:!0}},created(){this.getData()},methods:{getData(){let e=this;d.toaddDelivery({},!0).then((a=>{e.options=a.data.arr,e.cityCount=a.data.cityCount,e.options.forEach((function(a){e.optionsMap[a.value]=a}))})).catch((e=>{}))},getShowData:function(e){var a=this,l={};return e.province.forEach((function(t){var o=a.optionsMap[t],r=[],i=0;for(var s in o.children)if(o.children.hasOwnProperty(s)){var d=o.children[s];a.inArray(d.value,e.citys)&&r.push({id:d.value,name:d.label}),i++}l[o.value]={id:o.value,name:o.label,citys:r,isAllCitys:r.length===i}})),l},inArray:function(e,a){return a.indexOf(e)>-1},addAreaClick(e){this.areaModel.index=this.form.rule.length,this.areaModel.type="add",this.show_area=!0},editAreaClick(e){this.areaModel.index=e,this.areaModel.type="edit",this.show_area=!0},closeAreaFunc(e){let a=this;if(this.show_area=e.statu,"confirm"!=e.type)return;this.options=e.this_area;let l=[],t=[];e.this_area.forEach((function(e,o){1!=e.checked&&1!=e.indeterminate||-1==e.index.indexOf(a.areaModel.index)||(l.push(e.value),e.children.forEach((function(e){1==e.checked&&e.index==a.areaModel.index&&t.push(e.value)})))})),""==l&&""==t||("add"==this.areaModel.type&&this.form.rule.push({first:"",first_fee:"",additional:"",additional_fee:"",citys:t,showData:this.getShowData({province:l,citys:t})}),"edit"==this.areaModel.type&&(this.form.rule[this.areaModel.index].showData=this.getShowData({province:l,citys:t}),this.form.rule[this.areaModel.index].citys=t),this.form.rule.push([]),this.form.rule.pop())},deleteAreaClick(e){let a=this;a.options.forEach((function(l){a.form.rule[e].province&&a.inArray(l.value,a.form.rule[e].province)&&(l.checked=!1,l.index=null),l.children.forEach((function(l){a.inArray(l.value,a.form.rule[e].citys)&&(l.checked=!1,l.index=null)}))})),a.form.rule.splice(e,1)},onSubmit(){let a=this,l=m(a.form);l.rule.forEach((function(e){delete e.showData})),a.$refs.form.validate((t=>{if(t){if(0==l.rule.length)return e({message:"请添加配送区域和运费",type:"error"}),!1;for(let a in l.rule){if(!(l.rule[a].hasOwnProperty("first")&&l.rule[a].first>0))return e({message:"首件/首重不能为空",type:"error"}),!1;if(!l.rule[a].hasOwnProperty("first_fee")||""==l.rule[a].first_fee)return e({message:"运费不能为空",type:"error"}),!1;if(!(l.rule[a].hasOwnProperty("additional")&&l.rule[a].additional>0))return e({message:"续件/续重不能为空",type:"error"}),!1;if(!l.rule[a].hasOwnProperty("additional_fee")||""==l.rule[a].additional_fee)return e({message:"续费不能为空",type:"error"}),!1}a.loading=!0,d.addDelivery(l,!0).then((l=>{a.loading=!1,e({message:"恭喜你，添加成功",type:"success"}),a.$router.push("/setting/delivery/index")})).catch((e=>{a.loading=!1}))}}))},cancelFunc(){this.$router.back(-1)}}},A=e=>(x("data-v-3671d56d"),e=e(),V(),e),M={class:"product-add"},D=A((()=>_("div",{class:"common-form"},"添加运费模版",-1))),U={class:"area-list"},E={key:0},O={class:"am-link-muted gray9"},S={key:0},H=["onClick"],N=["onClick"],P=A((()=>_("div",{class:"tips"},"数字越小越靠前",-1))),z={class:"common-button-wrapper"};const $=u(C,[["render",function(e,d,n,u,m,x){const V=a,C=l,A=t,$=o,F=r,q=i,K=s,R=f("Areas");return p(),c("div",M,[h(K,{size:"small",ref:"form",model:m.form,rules:m.formRules,"label-width":"200px"},{default:y((()=>[D,h(C,{label:"模版名称",prop:"name"},{default:y((()=>[h(V,{modelValue:m.form.name,"onUpdate:modelValue":d[0]||(d[0]=e=>m.form.name=e),class:"max-w460"},null,8,["modelValue"])])),_:1}),h(C,{label:"计费方式"},{default:y((()=>[_("div",null,[h(A,{modelValue:m.form.radio,"onUpdate:modelValue":d[1]||(d[1]=e=>m.form.radio=e),label:"10"},{default:y((()=>[w("按件数")])),_:1},8,["modelValue"]),h(A,{modelValue:m.form.radio,"onUpdate:modelValue":d[2]||(d[2]=e=>m.form.radio=e),label:"20"},{default:y((()=>[w("按重量")])),_:1},8,["modelValue"])])])),_:1}),h(C,{label:"配送区域及运费"},{default:y((()=>[h(F,{data:m.form.rule,border:"",style:{width:"100%"}},{default:y((()=>[h($,{label:"可配送区域"},{default:y((a=>[_("div",U,[a.row.citys.length==m.cityCount?(p(),c("span",E,"全国")):(p(!0),c(b,{key:1},v(a.row.showData,((e,a)=>(p(),c("span",{key:a,class:"pr16"},[w(j(e.name)+" ",1),e.isAllCitys?g("",!0):(p(),c(b,{key:0},[w(" ( "),_("span",O,[(p(!0),c(b,null,v(e.citys,((a,l)=>(p(),c("em",{key:l},[_("span",null,j(a.name),1),l+1<e.citys.length?(p(),c("span",S,"、")):g("",!0)])))),128))]),w(" ) ")],64))])))),128))]),_("a",{href:"javascript:void(0);",onClick:l=>e.el=x.editAreaClick(a.$index)},"编辑",8,H)])),_:1}),h($,{prop:"first",label:m.tableHeadName.first,width:"100px"},{default:y((e=>[h(V,{modelValue:e.row.first,"onUpdate:modelValue":a=>e.row.first=a},null,8,["modelValue","onUpdate:modelValue"])])),_:1},8,["label"]),h($,{prop:"first_fee",label:m.tableHeadName.first_fee,width:"100px"},{default:y((e=>[h(V,{modelValue:e.row.first_fee,"onUpdate:modelValue":a=>e.row.first_fee=a},null,8,["modelValue","onUpdate:modelValue"])])),_:1},8,["label"]),h($,{prop:"additional",label:m.tableHeadName.additional,width:"100px"},{default:y((e=>[h(V,{modelValue:e.row.additional,"onUpdate:modelValue":a=>e.row.additional=a},null,8,["modelValue","onUpdate:modelValue"])])),_:1},8,["label"]),h($,{prop:"additional_fee",label:m.tableHeadName.additional_fee,width:"100px"},{default:y((e=>[h(V,{modelValue:e.row.additional_fee,"onUpdate:modelValue":a=>e.row.additional_fee=a},null,8,["modelValue","onUpdate:modelValue"])])),_:1},8,["label"]),h($,{label:"操作",width:"60px"},{default:y((e=>[_("a",{href:"javascript:void(0);",onClick:a=>x.deleteAreaClick(e.$index)},"删除",8,N)])),_:1})])),_:1},8,["data"]),_("div",null,[h(q,{onClick:x.addAreaClick,type:"text",size:"small"},{default:y((()=>[w("+点击添加可配送区域和运费")])),_:1},8,["onClick"])])])),_:1}),h(C,{label:"排序"},{default:y((()=>[h(V,{modelValue:m.form.sort,"onUpdate:modelValue":d[3]||(d[3]=e=>m.form.sort=e),type:"number",class:"max-w460"},null,8,["modelValue"]),P])),_:1}),_("div",z,[h(q,{size:"small",type:"info",onClick:x.cancelFunc},{default:y((()=>[w("取消")])),_:1},8,["onClick"]),h(q,{type:"primary",onClick:x.onSubmit,loading:m.loading},{default:y((()=>[w("提交")])),_:1},8,["onClick","loading"])])])),_:1},8,["model","rules"]),m.show_area?(p(),k(R,{key:0,show_area:m.show_area,areaModel:m.areaModel,areas:m.options,onCloseArea:x.closeAreaFunc},null,8,["show_area","areaModel","areas","onCloseArea"])):g("",!0)])}],["__scopeId","data-v-3671d56d"]]);export{$ as default};
