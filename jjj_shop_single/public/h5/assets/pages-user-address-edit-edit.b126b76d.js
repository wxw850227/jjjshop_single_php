import{_ as e,a,M as d,o as t,c as i,w as s,n as l,g as o,b as r,d as n,e as c,j as u,I as m,a0 as p,h as _,a2 as f,k as h}from"./index-024cd044.js";import{m as y}from"./mpvueCityPicker.c81eba0c.js";const g=e({components:{mpvueCityPicker:y},data:()=>({cityPickerValueDefault:[0,0,0],selectCity:"选择省,市,区",province_id:0,city_id:0,region_id:0,address_id:0,address:{},region:{},is_load:!1,province:[],city:[],area:[]}),onLoad(e){this.address_id=e.address_id},mounted(){this.getData()},methods:{getData(){let e=this,a=e.address_id;e._get("user.address/detail",{address_id:a},(function(a){e.address=a.data.detail,e.address_id=a.data.detail.address_id,e.province_id=a.data.detail.province_id,e.city_id=a.data.detail.city_id,e.region_id=a.data.detail.region_id,e.region=a.data.region;let d="";e.region.forEach((e=>{d+=e})),e.selectCity=d,e.province=a.data.regionData[0],e.city=a.data.regionData[1],e.area=a.data.regionData[2],e.is_load=!0}))},formSubmit:function(e){let t=this;var i=e.detail.value;return i.province_id=t.province_id,i.city_id=t.city_id,i.region_id=t.region_id,i.address_id=t.address_id,i.region=t.region,""==i.name?(a({title:"请输入收货人姓名",duration:1e3,icon:"none"}),!1):""==i.phone?(a({title:"请输入手机号码",duration:1e3,icon:"none"}),!1):0==i.province_id||0==i.city_id||0==i.region_id?(a({title:"请选择完整省市区",duration:1e3,icon:"none"}),!1):void t._post("user.address/edit",i,(function(e){t.showSuccess(e.msg,(function(){d({delta:2})}))}))},formReset:function(e){console.log("清空数据")},showMulLinkageThreePicker(){this.$refs.mpvueCityPicker.show()},onConfirm(e){this.region=e.label.split(","),this.selectCity=e.label,this.province_id=e.cityCode[0],this.city_id=e.cityCode[1],this.region_id=e.cityCode[2]}}},[["render",function(e,a,d,y,g,b){const k=u,v=m,C=o,V=p,x=_,D=f,P=h("mpvue-city-picker");return t(),i(C,{class:l(["address-form",e.theme()||""]),"data-theme":e.theme()},{default:s((()=>[r(D,{onSubmit:b.formSubmit,onReset:b.formReset},{default:s((()=>[r(C,{class:"bg-white p-0-30 f30"},{default:s((()=>[r(C,{class:"d-s-c border-b-d9"},{default:s((()=>[r(k,{class:"key-name"},{default:s((()=>[n("收货人")])),_:1}),r(v,{class:"ml20 f32 flex-1 p-30-0",name:"name",type:"text",modelValue:g.address.name,"onUpdate:modelValue":a[0]||(a[0]=e=>g.address.name=e),"placeholder-class":"grary9",placeholder:"请输入收货人姓名"},null,8,["modelValue"])])),_:1}),r(C,{class:"d-s-c border-b-d9"},{default:s((()=>[r(k,{class:"key-name"},{default:s((()=>[n("联系方式")])),_:1}),r(v,{class:"ml20 f32 flex-1 p-30-0",name:"phone",type:"text",modelValue:g.address.phone,"onUpdate:modelValue":a[1]||(a[1]=e=>g.address.phone=e),"placeholder-class":"grary9",placeholder:"请输入收货人手机号"},null,8,["modelValue"])])),_:1}),r(C,{class:"d-s-c border-b-d9"},{default:s((()=>[r(k,{class:"key-name"},{default:s((()=>[n("所在地区")])),_:1}),r(C,{class:"input-box flex-1"},{default:s((()=>[r(v,{class:"ml20 f32 flex-1 p-30-0",type:"text","placeholder-class":"grary9",placeholder:"",modelValue:g.selectCity,"onUpdate:modelValue":a[2]||(a[2]=e=>g.selectCity=e),disabled:"true",onClick:b.showMulLinkageThreePicker},null,8,["modelValue","onClick"])])),_:1})])),_:1}),r(C,{class:"d-s-c border-b-d9"},{default:s((()=>[r(k,{class:"key-name"},{default:s((()=>[n("详细地址")])),_:1}),r(V,{class:"ml20 flex-1 f32 p-30-0 lh150",name:"detail","placeholder-class":"grary9","auto-height":!0,modelValue:g.address.detail,"onUpdate:modelValue":a[3]||(a[3]=e=>g.address.detail=e),placeholder:"请输入街道小区楼牌号等"},null,8,["modelValue"])])),_:1})])),_:1}),r(C,{class:"p30"},{default:s((()=>[r(x,{"form-type":"submit",class:"theme-btn f32 mt60 addBtn"},{default:s((()=>[n("保存")])),_:1})])),_:1})])),_:1},8,["onSubmit","onReset"]),g.is_load?(t(),i(P,{key:0,ref:"mpvueCityPicker",province:g.province,city:g.city,area:g.area,pickerValueDefault:g.cityPickerValueDefault,onOnConfirm:b.onConfirm},null,8,["province","city","area","pickerValueDefault","onOnConfirm"])):c("",!0)])),_:1},8,["data-theme","class"])}],["__scopeId","data-v-c2701b9d"]]);export{g as default};
