import{v as r}from"./element-plus-68e4b1c7.js";import{S as a}from"./statistics-8f2eb3b3.js";import{_ as t}from"./index-c1104e7d.js";import{o,c as e,a as s,X as d,ae as l,$ as i,T as p,Y as c}from"./@vue-76da2f05.js";import n from"./Transaction-cde9d490.js";import m from"./Product-e1e6949a.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";import"./DateTime-19005e92.js";import"./echarts-1f4b39c3.js";import"./tslib-a4e99503.js";import"./zrender-3805f8b6.js";import"./Total-81cba453.js";import"./LineChart-c37b3c77.js";const y={components:{},data:()=>({loading:!0}),inject:["dataModel"],created(){},methods:{}},j={class:"d-a-c lh30 ww100 pt16"},u=s("div",{class:"pt30 tc",style:{width:"80px"}},[s("p",{class:"gray9"},"今日"),s("p",{class:"gray9"},"昨日")],-1),f={class:"flex-1 tc"},g=s("p",null,"成交额",-1),_={class:"f20 fb gray3"},h={class:"gray"},v={class:"flex-1 tc"},M=s("p",null,"客单价",-1),b={class:"f20 fb gray3"},x={class:"gray"},T={class:"flex-1 tc"},w=s("p",null,"付款订单",-1),k={class:"f20 fb gray3"},z={class:"gray"},D={class:"flex-1 tc"},P=s("p",null,"付款人数",-1),q={class:"f20 fb gray3"},O={class:"gray"},C={class:"flex-1 tc"},F=s("p",null,"成功退款金额",-1),G={class:"f20 fb gray3"},L={class:"gray"},S={class:"flex-1 tc"},X=s("p",null,"退款订单",-1),Y={class:"f20 fb gray3"},$={class:"gray"};const A={style:{"min-height":"400px"}};const B=t({components:{Total:t(y,[["render",function(r,a,t,l,i,p){return o(),e("div",j,[u,s("div",f,[g,s("p",_,d(p.dataModel.order.order_total_price.today),1),s("p",h,d(p.dataModel.order.order_total_price.yesterday),1)]),s("div",v,[M,s("p",b,d(p.dataModel.order.order_per_price.today),1),s("p",x,d(p.dataModel.order.order_per_price.yesterday),1)]),s("div",T,[w,s("p",k,d(p.dataModel.order.order_total.today),1),s("p",z,d(p.dataModel.order.order_total.yesterday),1)]),s("div",D,[P,s("p",q,d(p.dataModel.order.order_user_total.today),1),s("p",O,d(p.dataModel.order.order_user_total.yesterday),1)]),s("div",C,[F,s("p",G,d(p.dataModel.order.order_refund_money.today),1),s("p",L,d(p.dataModel.order.order_refund_money.yesterday),1)]),s("div",S,[X,s("p",Y,d(p.dataModel.order.order_refund_total.today),1),s("p",$,d(p.dataModel.order.order_refund_total.yesterday),1)])])}]]),Transaction:n,Productindex:m},data:()=>({loading:!0,dataModel:{}}),provide:function(){return{dataModel:this.dataModel}},created(){this.getData()},methods:{getData(){let r=this;a.getOrderTotal({},!0).then((a=>{Object.assign(r.dataModel,a.data),r.loading=!1})).catch((r=>{}))}}},[["render",function(a,t,s,d,n,m){const y=l("Total"),j=l("Transaction"),u=l("Productindex"),f=r;return i((o(),e("div",A,[n.loading?c("",!0):(o(),p(y,{key:0})),n.loading?c("",!0):(o(),p(j,{key:1})),n.loading?c("",!0):(o(),p(u,{key:2}))])),[[f,n.loading]])}]]);export{B as default};
