import{_ as e,y as t,A as a,N as s,a as l,o as d,c as r,w as o,g as c,b as u,J as _,d as i,t as f,e as n,f as p,r as y,F as x,j as g,h as m,i as b}from"./index-024cd044.js";/* empty css                                                                  */const v=e({data:()=>({indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,isPayPopup:!1,order_no:0,detail:{order_status:[],address:{region:[]},product:[],pay_type:[],delivery_type:[],pay_status:[]},extractStore:{}}),components:{},onLoad(e){this.order_no=e.order_no},onShow(){this.getData()},methods:{getData(){let e=this;t({title:"加载中"}),e._get("store.order/detail",{order_no:e.order_no},(function(t){e.detail=t.data.order,e.extractStore=t.data.order.extractStore,a()}))},onSubmitExtract(e){let t=this;s({title:"提示",content:"您确定要核销吗?",success:function(a){a.confirm&&t._post("store.order/extract",{order_id:e},(function(e){l({title:e.msg,duration:2e3,icon:"success"}),setTimeout((function(){t.getData()}),2e3)}))}})}}},[["render",function(e,t,a,s,l,v){const h=c,S=g,w=b,k=m;return d(),r(h,{class:"order-datail"},{default:o((()=>[u(h,{class:"order-state d-s-c"},{default:o((()=>[u(h,{class:"icon-box"},{default:o((()=>[_("span",{class:"icon iconfont icon-gantanhao"})])),_:1}),u(h,{class:"state-cont flex-1"},{default:o((()=>[u(h,{class:"state-txt d-b-c"},{default:o((()=>[u(S,{class:"desc f34"},{default:o((()=>[i(f(l.detail.state_text),1)])),_:1})])),_:1})])),_:1}),u(h,{class:"dot-bg"})])),_:1}),20==l.detail.delivery_type.value?(d(),r(h,{key:0,class:"order-express p30 d-s-c"},{default:o((()=>[u(h,{class:"flow-delivery__title m-top20"},{default:o((()=>[_("span",{class:"icon iconfont icon-dizhi1"},"自提门店")])),_:1}),u(h,{class:"cont-text ml20"},{default:o((()=>[u(h,{class:"express-text"},{default:o((()=>[i(f(l.extractStore.store_name)+" "+f(l.extractStore.phone)+" ",1),u(h,{class:"f24 gray9 pt10"},{default:o((()=>[i(f(l.extractStore.region.province)+" "+f(l.extractStore.region.city)+" "+f(l.extractStore.region.region)+" "+f(l.extractStore.address),1)])),_:1})])),_:1})])),_:1})])),_:1})):n("",!0),u(h,{class:"shops group bg-white"},{default:o((()=>[u(h,{class:"group-hd border-b-e"},{default:o((()=>[u(h,{class:"left"},{default:o((()=>[u(S,{class:"min-name"},{default:o((()=>[i("商品")])),_:1})])),_:1})])),_:1}),u(h,{class:"list"},{default:o((()=>[(d(!0),p(x,null,y(l.detail.product,((e,t)=>(d(),r(h,{class:"one-product p-20-0",key:t},{default:o((()=>[u(h,{class:"d-s-c"},{default:o((()=>[u(h,{class:"cover"},{default:o((()=>[u(w,{src:e.image.file_path,mode:"aspectFit"},null,8,["src"])])),_:2},1024),u(h,{class:"flex-1"},{default:o((()=>[u(h,{class:"pro-info"},{default:o((()=>[i(f(e.product_name),1)])),_:2},1024),u(h,{class:"pt10 p-0-30 d-b-c"},{default:o((()=>[u(h,{class:"price f22"},{default:o((()=>[i(" ¥ "),u(S,{class:"f40"},{default:o((()=>[i(f(e.product_price),1)])),_:2},1024)])),_:2},1024),u(h,{class:"f24 gray9"},{default:o((()=>[i("x"+f(e.total_num),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),u(h,{class:"group bg-white f28"},{default:o((()=>[u(h,{class:"p-20-0"},{default:o((()=>[u(S,{class:"gray9"},{default:o((()=>[i("订单编号：")])),_:1}),u(S,null,{default:o((()=>[i(f(l.detail.order_no),1)])),_:1})])),_:1}),u(h,{class:"p-20-0"},{default:o((()=>[u(S,{class:"gray9"},{default:o((()=>[i("下单时间：")])),_:1}),u(S,null,{default:o((()=>[i(f(l.detail.create_time),1)])),_:1})])),_:1}),u(h,{class:"p-20-0"},{default:o((()=>[u(S,{class:"gray9"},{default:o((()=>[i("支付方式：")])),_:1}),u(S,null,{default:o((()=>[i(f(l.detail.pay_type.text),1)])),_:1})])),_:1}),u(h,{class:"p-20-0"},{default:o((()=>[u(S,{class:"gray9"},{default:o((()=>[i("配送方式：")])),_:1}),u(S,null,{default:o((()=>[i(f(l.detail.delivery_type.text),1)])),_:1})])),_:1}),u(h,{class:"p-20-0 d-b-c"},{default:o((()=>[u(S,{class:"gray9"},{default:o((()=>[i("商品金额")])),_:1}),u(S,null,{default:o((()=>[i("¥ "+f(l.detail.order_price),1)])),_:1})])),_:1}),u(h,{class:"p-20-0 d-b-c"},{default:o((()=>[u(S,{class:"gray9"},{default:o((()=>[i("运费")])),_:1}),u(S,null,{default:o((()=>[i("+ ¥ "+f(l.detail.express_price),1)])),_:1})])),_:1}),u(h,{class:"p-20-0 d-e-c fb f34"},{default:o((()=>[i(" 应付金额： "),u(S,{class:"red"},{default:o((()=>[i("¥ "+f(l.detail.order_price),1)])),_:1})])),_:1})])),_:1}),20!=l.detail.order_status.value?(d(),r(h,{key:1,class:"flow-fixed-footer b-f"},{default:o((()=>[20==l.detail.pay_status.value&&20==l.detail.delivery_type.value&&10==l.detail.delivery_status.value?(d(),r(h,{key:0},{default:o((()=>[u(k,{class:"btn-red",onClick:t[0]||(t[0]=e=>v.onSubmitExtract(l.detail.order_id))},{default:o((()=>[i("确认核销")])),_:1})])),_:1})):n("",!0)])),_:1})):n("",!0)])),_:1})}],["__scopeId","data-v-1048dee9"]]);export{v as default};
