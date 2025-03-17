import{_ as e,a,o as t,c as l,w as i,n as s,g as o,b as d,d as n,e as r,j as c,I as u,a0 as m,h as p,a2 as f,k as h}from"./index-024cd044.js";import{m as y}from"./mpvueCityPicker.c81eba0c.js";const _=e({components:{mpvueCityPicker:y},data:()=>({cityPickerValueDefault:[0,0,0],selectCity:"选择省,市,区",province_id:0,city_id:0,region_id:0,address:{},delta:1,province:[],city:[],area:[],is_load:!1}),onLoad:function(e){this.delta=e.delta,this.getData()},methods:{getData(){let e=this;e._post("settings/getRegion",{},(function(a){e.province=a.data.regionData[0],e.city=a.data.regionData[1],e.area=a.data.regionData[2],e.is_load=!0}))},formSubmit:function(e){let t=this;var l=e.detail.value;return l.province_id=t.province_id,l.city_id=t.city_id,l.region_id=t.region_id,""==l.name?(a({title:"请输入收货人姓名",duration:1e3,icon:"none"}),!1):""==l.phone?(a({title:"请输入手机号码",duration:1e3,icon:"none"}),!1):0==l.province_id||0==l.city_id||0==l.region_id?(a({title:"请选择完整省市区",duration:1e3,icon:"none"}),!1):""==l.detail?(a({title:"请输入街道小区楼牌号等",duration:1e3,icon:"none"}),!1):void t._post("user.address/add",l,(function(e){t.showSuccess(e.msg,(function(){history.go(-t.delta)}))}))},formReset:function(e){console.log("清空数据")},showMulLinkageThreePicker(){this.$refs.mpvueCityPicker.show()},onConfirm(e){this.selectCity=e.label,this.province_id=e.cityCode[0],this.city_id=e.cityCode[1],this.region_id=e.cityCode[2]}}},[["render",function(e,a,y,_,g,k){const b=c,v=u,C=o,V=m,x=p,D=f,P=h("mpvue-city-picker");return t(),l(C,{class:s(["address-form",e.theme()||""]),"data-theme":e.theme()},{default:i((()=>[d(D,{onSubmit:k.formSubmit,onReset:k.formReset},{default:i((()=>[d(C,{class:"bg-white p-0-30 f30"},{default:i((()=>[d(C,{class:"d-s-c border-b-d9"},{default:i((()=>[d(b,{class:"key-name"},{default:i((()=>[n("收货人")])),_:1}),d(v,{class:"ml20 flex-1 f32 p-30-0",name:"name",type:"text","placeholder-class":"grary9",modelValue:g.address.name,"onUpdate:modelValue":a[0]||(a[0]=e=>g.address.name=e),placeholder:"请输入收货人姓名"},null,8,["modelValue"])])),_:1}),d(C,{class:"d-s-c border-b-d9"},{default:i((()=>[d(b,{class:"key-name"},{default:i((()=>[n("联系方式")])),_:1}),d(v,{class:"ml20 flex-1 f32 p-30-0",name:"phone",type:"text","placeholder-class":"grary9",modelValue:g.address.phone,"onUpdate:modelValue":a[1]||(a[1]=e=>g.address.phone=e),placeholder:"请输入收货人手机号"},null,8,["modelValue"])])),_:1}),d(C,{class:"d-s-c border-b-d9"},{default:i((()=>[d(b,{class:"key-name"},{default:i((()=>[n("所在地区")])),_:1}),d(C,{class:"input-box flex-1"},{default:i((()=>[d(v,{class:"ml20 f32 flex-1 p-30-0",type:"text","placeholder-class":"grary9",placeholder:"",modelValue:g.selectCity,"onUpdate:modelValue":a[2]||(a[2]=e=>g.selectCity=e),disabled:"true",onClick:k.showMulLinkageThreePicker},null,8,["modelValue","onClick"])])),_:1})])),_:1}),d(C,{class:"d-s-c border-b-d9"},{default:i((()=>[d(b,{class:"key-name"},{default:i((()=>[n("详细地址")])),_:1}),d(V,{class:"ml20 flex-1 p-30-0 lh150",name:"detail","auto-height":!0,modelValue:g.address.detail,"onUpdate:modelValue":a[3]||(a[3]=e=>g.address.detail=e),"placeholder-class":"grary9",placeholder:"请输入街道小区楼牌号等"},null,8,["modelValue"])])),_:1})])),_:1}),d(C,{class:"p30"},{default:i((()=>[d(x,{"form-type":"submit",class:"theme-btn f32 mt60 addBtn"},{default:i((()=>[n("保存")])),_:1})])),_:1})])),_:1},8,["onSubmit","onReset"]),g.is_load?(t(),l(P,{key:0,ref:"mpvueCityPicker",province:g.province,city:g.city,area:g.area,pickerValueDefault:g.cityPickerValueDefault,onOnConfirm:k.onConfirm},null,8,["province","city","area","pickerValueDefault","onOnConfirm"])):r("",!0)])),_:1},8,["data-theme","class"])}],["__scopeId","data-v-61f7a71e"]]);export{_ as default};
