import{_ as t,u as e}from"./index-c1104e7d.js";import s from"./index-61a00602.js";import i from"./Receive-e837ebc0.js";import o from"./SendCoupon-2c2284a1.js";import{F as a,K as r,L as p,ae as m,o as u,c as n,T as c,Y as l}from"./@vue-76da2f05.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-6a1b7bd0.js";import"./object-inspect-c71aff05.js";import"./element-plus-68e4b1c7.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";import"./coupon-e6c73f62.js";import"./GetCoupon-c6c5a435.js";import"./GetUser-6c0a1339.js";import"./data-c9bec9a5.js";const h=a({components:{List:s,Receive:i,SendCoupon:o},setup(){const{bus_emit:t,bus_off:s,bus_on:i}=e(),o=r({bus_emit:t,bus_off:s,bus_on:i,loading:!0,form:{},param:{},activeName:"",sourceList:[{key:"list",value:"优惠券列表",path:"/plus/coupon/index"},{key:"receive",value:"领取记录",path:"/plus/coupon/coupon/receive"},{key:"send",value:"发送优惠券",path:"/plus/coupon/coupon/SendCoupon"}],tabList:[]});return{...p(o)}},created(){this.tabList=this.authFilter(),this.tabList.length>0&&(this.activeName=this.tabList[0].key),null!=this.$route.query.type&&(this.activeName=this.$route.query.type),this.bus_on("activeValue",(t=>{this.activeName=t}));let t={active:this.activeName,list:this.tabList,tab_type:"coupon"};this.bus_emit("tabData",t)},beforeUnmount(){this.bus_emit("tabData",{active:null,tab_type:"coupon",list:[]}),this.bus_off("activeValue")},methods:{authFilter(){let t=[];for(let e=0;e<this.sourceList.length;e++){let s=this.sourceList[e];this.$filter.isAuth(s.path)&&t.push(s)}return t}}}),j={class:"common-seach-wrap"};const v=t(h,[["render",function(t,e,s,i,o,a){const r=m("List"),p=m("Receive"),h=m("SendCoupon");return u(),n("div",j,["list"==t.activeName?(u(),c(r,{key:0})):l("",!0),"receive"==t.activeName?(u(),c(p,{key:1,Receive:""})):l("",!0),"send"==t.activeName?(u(),c(h,{key:2})):l("",!0)])}]]);export{v as default};
