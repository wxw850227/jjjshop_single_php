import{u as t,w as e,x as a}from"./element-plus-68e4b1c7.js";import{S as s}from"./statistics-b49fe7c2.js";import{f as i}from"./DateTime-19005e92.js";import{i as o}from"./echarts-1f4b39c3.js";import{_ as r}from"./index-d5abae2c.js";import{o as n,c as m,P as l,S as c,a as d,bb as p,b9 as u}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./tslib-a4e99503.js";import"./zrender-3805f8b6.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";let h=null;const j={data(){let t=new Date,e=new Date;return e.setTime(e.getTime()-6048e5),{activeName:"first",shortcuts:[{text:"最近一周",value:()=>{const t=new Date,e=new Date;return e.setTime(e.getTime()-6048e5),[e,t]}},{text:"最近一个月",value:()=>{const t=new Date,e=new Date;return e.setTime(e.getTime()-2592e6),[e,t]}},{text:"最近三个月",value:()=>{const t=new Date,e=new Date;return e.setTime(e.getTime()-7776e6),[e,t]}}],datePicker:[i(e),i(t)],dataList:null,option:{title:{},grid:{left:"3%",right:"4%",bottom:"6%",containLabel:!0},tooltip:{trigger:"axis"},yAxis:{}}}},mounted(){this.myEcharts()},methods:{changeDate(){this.getData()},myEcharts(){h=o(document.getElementById("LineChart")),this.getData()},createOption(){if(!this.loading){let t=[],e=this.dataList.days,a=[];this.dataList.data.forEach((t=>{a.push(t.total_num)})),t=["商品件数"],this.option.xAxis={type:"category",boundaryGap:!1,data:e},this.option.color=["red","#409EFF"],this.option.series=[{name:t[0],type:"line",data:a,lineStyle:{color:"red"}}],h.setOption(this.option),h.resize()}},getData(){let t=this;t.loading=!0,s.getProductByDate({search_time:t.datePicker,type:t.activeName},!0).then((e=>{t.dataList=e.data,t.loading=!1,t.createOption()})).catch((t=>{}))}}},g={class:"ww100 mt30"},v={class:"d-b-c"},f=(t=>(p("data-v-eca0f2cc"),t=t(),u(),t))((()=>d("div",{class:""},[d("div",{class:"Echarts"},[d("div",{id:"LineChart"})])],-1)));const D=r(j,[["render",function(s,i,o,r,p,u){const h=t,j=e,D=a;return n(),m("div",g,[l(j,{modelValue:p.activeName,"onUpdate:modelValue":i[0]||(i[0]=t=>p.activeName=t)},{default:c((()=>[l(h,{label:"已付款商品",name:"first"})])),_:1},8,["modelValue"]),d("div",v,[d("div",null,[l(D,{size:"small",modelValue:p.datePicker,"onUpdate:modelValue":i[1]||(i[1]=t=>p.datePicker=t),type:"daterange",align:"right","unlink-panels":"",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",onChange:u.changeDate,shortcuts:p.shortcuts},null,8,["modelValue","onChange","shortcuts"])])]),f])}],["__scopeId","data-v-eca0f2cc"]]);export{D as default};
