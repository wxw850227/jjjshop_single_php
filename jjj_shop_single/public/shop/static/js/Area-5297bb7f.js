import{j as e,f as i,o as t}from"./element-plus-68e4b1c7.js";import{_ as n,d as s}from"./index-d5abae2c.js";import{o,T as d,S as l,a,P as r,W as h,c,Q as p,a9 as m,M as x,a1 as v,X as u,Y as _}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const b={class:"modal-wrapper"},f={class:"address-item scroll-box"},k=["onClick"],j={class:"address-item scroll-box"},g={class:"dialog-footer"};const C=n({data:()=>({dialogVisible:!1,provinceList:[],province_index:null,activeProvinceId:[],activeModel:{},options:[],all_active:!1,indeterminate:!1}),props:["show_area","areaModel","areas"],created(){this.init()},methods:{init(){this.dialogVisible=this.show_area,this.setList(this.areas),this.options=s(this.areas),this.isAll()},setList(e){for(let i=0;i<e.length;i++){let t=e[i];if(1!=t.checked&&(t.checked=!1),1!=t.indeterminate&&(t.indeterminate=!1),null==t.index&&(t.index=[],t.disabled=!1),"[object Array]"==Object.prototype.toString.call(t.children)){let e=0,i=0,n=t.children.length;for(let s=0;s<n;s++){let o=t.children[s];1!=o.checked&&(o.checked=!1),o.index==this.areaModel.index&&-1!=t.index.indexOf(this.areaModel.index)?(o.checked=!0,o.disabled=!1,e++):null!=o.index&&-1!=t.index.indexOf(o.index)?(o.checked=!0,o.disabled=!0,i++):(o.checked=!1,o.disabled=!1),e==n||i==n?(t.checked=!0,t.indeterminate=!1,t.disabled=i==n):0==e||0==i?(t.checked=!1,t.indeterminate=!1,t.disabled=!1):(t.disabled=!1,e>0&&(t.checked=!1,t.indeterminate=!0))}}}},allProvinceFunc(){this.all_active?(this.all_active=!0,this.indeterminate=!1):(this.all_active=!1,this.indeterminate=!1);for(let e=0;e<this.options.length;e++){let i=this.options[e];if(1!=i.disabled){if(i.checked=this.all_active,this.all_active)i.index.push(this.areaModel.index);else{let e=i.index.indexOf(this.areaModel.index);-1!=e&&i.index.splice(e,1)}if(i.indeterminate=this.indeterminate,"[object Array]"==Object.prototype.toString.call(i.children))for(let e=0;e<i.children.length;e++){let t=i.children[e];1!=t.disabled&&(t.checked=this.all_active,this.all_active?t.index=this.areaModel.index:t.index=null)}}}},handleCheckedProvinceChange(e){if(this.province_index=e,this.options[e].indeterminate=!1,this.options[e].checked&&1!=this.options[e].disabled)this.options[e].checked=!0,this.options[e].index.push(this.areaModel.index);else{let i=this.options[e].index.indexOf(this.areaModel.index);-1!=i&&this.options[e].index.splice(i,1),1!=this.options[e].disabled&&(this.options[e].checked=!1)}if("[object Array]"==Object.prototype.toString.call(this.options[e].children))for(let i=0;i<this.options[e].children.length;i++){let t=this.options[e].children[i];1!=t.disabled&&(t.checked=this.options[e].checked,t.index=this.areaModel.index)}this.isAll()},allCityFunc(){let e=this.options[this.province_index].checked;if(e)-1==this.options[this.province_index].index.indexOf(this.areaModel.index)&&this.options[this.province_index].index.push(this.areaModel.index);else{let e=this.options[this.province_index].index.indexOf(this.areaModel.index);-1!=e&&this.options[this.province_index].index.splice(e,1)}this.options[this.province_index].indeterminate=!1;for(let i=0;i<this.options[this.province_index].children.length;i++){let t=this.options[this.province_index].children[i];1!=t.disabled&&(t.checked=e,t.index=e?this.areaModel.index:null)}this.isAll()},handleCheckedCityChange(e){let i=this.options[this.province_index].children[e].checked,t=this.options[this.province_index].children[e].indeterminate,n=this.options[this.province_index].index.indexOf(this.areaModel.index),s=this.isChooseAll(this.options[this.province_index].children);i?(-1==n&&this.options[this.province_index].index.push(this.areaModel.index),this.options[this.province_index].children[e].index=this.areaModel.index):(-1!=n&&0==t?this.options[this.province_index].index.splice(n,1):-1==n&&1==t&&this.options[this.province_index].index.push(this.areaModel.index),this.options[this.province_index].children[e].index=null),0==s?(this.options[this.province_index].checked=!1,this.options[this.province_index].indeterminate=!1):2==s?(this.options[this.province_index].checked=!0,this.options[this.province_index].indeterminate=!1):(this.options[this.province_index].checked=!1,this.options[this.province_index].indeterminate=!0),this.isAll()},isAll(){let e=this.isChooseAll(this.options);0==e?(this.all_active=!1,this.indeterminate=!1):2==e?(this.all_active=!0,this.indeterminate=!1):(this.all_active=!1,this.indeterminate=!0)},isChooseAll(e){let i=0;if("[object Array]"==Object.prototype.toString.call(e)){for(let t=0;t<e.length;t++)"[object Array]"==Object.prototype.toString.call(e[t].index)?(1==e[t].checked&&-1!=e[t].index.indexOf(this.areaModel.index)||1==e[t].indeterminate)&&i++:1!=e[t].checked&&1!=e[t].indeterminate||i++;return i==e.length?2:i>0?1:0}return 2},cityShow(e){this.province_index=e},closeArea(){this.dialogVisible=!1,this.$emit("closeArea",{statu:!1,type:"cancel"})},confirmArea(){this.dialogVisible=!1;let e={statu:!1,type:"confirm",this_area:this.options,total_area:[]};this.$emit("closeArea",e)}}},[["render",function(n,s,C,y,V,A){const M=e,O=i,w=t;return o(),d(w,{title:"添加可配送区域",modelValue:V.dialogVisible,"onUpdate:modelValue":s[2]||(s[2]=e=>V.dialogVisible=e),width:"700px","custom-class":"area-dialog","before-close":A.closeArea},{footer:l((()=>[a("div",g,[r(O,{onClick:A.closeArea},{default:l((()=>[h("取 消")])),_:1},8,["onClick"]),r(O,{type:"primary",onClick:A.confirmArea},{default:l((()=>[h("确 定")])),_:1},8,["onClick"])])])),default:l((()=>[a("div",b,[a("div",f,[r(M,{indeterminate:V.indeterminate,modelValue:V.all_active,"onUpdate:modelValue":s[0]||(s[0]=e=>V.all_active=e),onChange:A.allProvinceFunc},{default:l((()=>[h("全选")])),_:1},8,["indeterminate","modelValue","onChange"]),(o(!0),c(p,null,m(V.options,((e,i)=>(o(),c("div",{class:x(["province-item",{curr:i==V.province_index}]),key:i,onClick:v((e=>A.cityShow(i)),["self"])},[r(M,{indeterminate:e.indeterminate,modelValue:e.checked,"onUpdate:modelValue":i=>e.checked=i,disabled:e.disabled,label:e.value,onChange:e=>A.handleCheckedProvinceChange(i)},{default:l((()=>[h(u(e.label),1)])),_:2},1032,["indeterminate","modelValue","onUpdate:modelValue","disabled","label","onChange"])],10,k)))),128))]),a("div",j,[null!=V.province_index?(o(),c(p,{key:0},[r(M,{indeterminate:V.options[V.province_index].indeterminate,modelValue:V.options[V.province_index].checked,"onUpdate:modelValue":s[1]||(s[1]=e=>V.options[V.province_index].checked=e),disabled:V.options[V.province_index].disabled,onChange:A.allCityFunc},{default:l((()=>[h(" 全选 ")])),_:1},8,["indeterminate","modelValue","disabled","onChange"]),(o(!0),c(p,null,m(V.options[V.province_index].children,((e,i)=>(o(),c("div",{class:x(["province-item",{curr:i==V.province_index}]),key:i},[r(M,{label:e.value,modelValue:e.checked,"onUpdate:modelValue":i=>e.checked=i,disabled:e.disabled,onChange:e=>A.handleCheckedCityChange(i)},{default:l((()=>[h(u(e.label),1)])),_:2},1032,["label","modelValue","onUpdate:modelValue","disabled","onChange"])],2)))),128))],64)):_("",!0)])])])),_:1},8,["modelValue","before-close"])}]]);export{C as default};
