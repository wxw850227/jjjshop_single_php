import{i as t}from"./echarts-1f4b39c3.js";import{S as e}from"./statistics-8f2eb3b3.js";import{f as i}from"./DateTime-19005e92.js";import{_ as a}from"./index-c1104e7d.js";import{o as s,c as o,a as r}from"./@vue-76da2f05.js";import"./tslib-a4e99503.js";import"./zrender-3805f8b6.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./call-bind-6a1b7bd0.js";import"./object-inspect-c71aff05.js";import"./element-plus-68e4b1c7.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const m={data(){let t=new Date,e=new Date;return e.setTime(e.getTime()-6048e5),{loading:!0,activeName:"order",pickerOptions:{shortcuts:[{text:"最近一周",onClick(t){const e=new Date,i=new Date;i.setTime(i.getTime()-6048e5),t.$emit("pick",[i,e])}},{text:"最近一个月",onClick(t){const e=new Date,i=new Date;i.setTime(i.getTime()-2592e6),t.$emit("pick",[i,e])}},{text:"最近三个月",onClick(t){const e=new Date,i=new Date;i.setTime(i.getTime()-7776e6),t.$emit("pick",[i,e])}}]},datePicker:[i(e),i(t)],dataList:null,myChart:null,option:{title:{},grid:{left:"3%",right:"4%",bottom:"6%",containLabel:!0},tooltip:{trigger:"axis"},yAxis:{}}}},created(){},mounted(){this.myEcharts()},methods:{handleClick(t){this.getData()},changeDate(){this.getData()},myEcharts(){this.myChart=t(document.getElementById("TransactionChart")),this.getData()},createOption(){if(!this.loading){let t=[],e=this.dataList.days,i=[],a=[];this.dataList.data.forEach((t=>{i.push(t.total_money),a.push(t.total_num)})),"order"==this.activeName?t=["成交额","成交量"]:"refund"==this.activeName&&(t=["退单额","退单量"]),this.option.xAxis={type:"category",boundaryGap:!1,data:e},this.option.color=["#5E73E3","#31C0D0"],this.option.legend={data:[{name:t[0],color:"#ccc"},{name:t[1]}]},this.option.series=[{name:t[0],type:"line",data:i,lineStyle:{color:"#5E73E3"}},{name:t[1],type:"line",data:a,lineStyle:{color:"#31C0D0"}}],this.myChart.setOption(this.option),this.myChart.resize()}},getData(){let t=this;t.loading=!0,e.getOrderByDate({search_time:t.datePicker,type:t.activeName},!0).then((e=>{t.dataList=e.data,t.loading=!1,t.createOption()})).catch((t=>{}))}}},n={class:"mt30"},p=[r("div",{class:""},[r("div",{class:"Echarts"},[r("div",{id:"TransactionChart"})])],-1)];const c=a(m,[["render",function(t,e,i,a,r,m){return s(),o("div",n,p)}]]);export{c as default};
