import{u as t,w as e,x as a}from"./element-plus-68e4b1c7.js";import{S as i}from"./statistics-8f2eb3b3.js";import{f as s}from"./DateTime-19005e92.js";import{_ as o}from"./index-c1104e7d.js";import{o as r,c as n,P as m,S as l,a as p,bb as d,b9 as c}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const h={data(){let t=new Date,e=new Date;return e.setTime(e.getTime()-6048e5),{activeName:"first",pickerOptions:{shortcuts:[{text:"最近一周",onClick(t){const e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick(t){const e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick(t){const e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},datePicker:[s(e),s(t)],dataList:null,myChart:null,option:{title:{},grid:{left:"3%",right:"4%",bottom:"6%",containLabel:!0},tooltip:{trigger:"axis"},yAxis:{}}}},mounted(){this.myEcharts()},methods:{changeDate(){this.getData()},myEcharts(){this.myChart=this.$echarts.init(document.getElementById("LineChart")),this.getData()},createOption(){if(!this.loading){let t=[],e=this.dataList.days,a=[];this.dataList.data.forEach((t=>{a.push(t.total_num)})),t=["商品件数"],this.option.xAxis={type:"category",boundaryGap:!1,data:e},this.option.color=["red","#409EFF"],this.option.series=[{name:t[0],type:"line",data:a,lineStyle:{color:"red"}}],this.myChart.setOption(this.option),this.myChart.resize()}},getData(){let t=this;t.loading=!0,i.getProductByDate({search_time:t.datePicker,type:t.activeName},!0).then((e=>{t.dataList=e.data,t.loading=!1,t.createOption()})).catch((t=>{}))}}},u={class:"ww100 mt30"},j={class:"d-b-c"},g=(t=>(d("data-v-a888d78d"),t=t(),c(),t))((()=>p("div",{class:""},[p("div",{class:"Echarts"},[p("div",{id:"LineChart"})])],-1)));const y=o(h,[["render",function(i,s,o,d,c,h){const y=t,v=e,f=a;return r(),n("div",u,[m(v,{modelValue:c.activeName,"onUpdate:modelValue":s[0]||(s[0]=t=>c.activeName=t)},{default:l((()=>[m(y,{label:"已付款商品",name:"first"})])),_:1},8,["modelValue"]),p("div",j,[p("div",null,[m(f,{size:"small",modelValue:c.datePicker,"onUpdate:modelValue":s[1]||(s[1]=t=>c.datePicker=t),type:"daterange",align:"right","unlink-panels":"",format:"yyyy-MM-dd","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",onChange:h.changeDate,"picker-options":c.pickerOptions},null,8,["modelValue","onChange","picker-options"])])]),g])}],["__scopeId","data-v-a888d78d"]]);export{y as default};
