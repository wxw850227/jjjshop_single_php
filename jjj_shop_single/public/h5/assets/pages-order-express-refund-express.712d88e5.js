import{_ as s,y as e,A as a,o as t,c as d,w as r,e as l,g as o,b as i,d as n,t as c,f as u,r as _,F as f,j as p,n as x}from"./index-024cd044.js";const m=s({data:()=>({loadding:!0,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,order_id:0,express:{list:{}}}),onLoad(s){e({title:"加载中"}),this.order_id=s.order_id},mounted(){this.getData()},methods:{getData(){let s=this,e=s.order_id;s._get("user.refund/express",{order_refund_id:e},(function(e){s.express=e.data.express,s.loadding=!1,a()}))}}},[["render",function(s,e,a,m,g,b){const y=p,h=o;return g.loadding?l("",!0):(t(),d(h,{key:0,class:"express-info"},{default:r((()=>[i(h,{class:"base-info p30"},{default:r((()=>[i(h,{class:"name"},{default:r((()=>[i(y,{class:"gray9"},{default:r((()=>[n("物流公司：")])),_:1}),i(y,{class:"fb"},{default:r((()=>[n(c(g.express.express_name),1)])),_:1})])),_:1}),i(h,{class:"order-code pt20"},{default:r((()=>[i(y,{class:"gray9"},{default:r((()=>[n("物流单号：")])),_:1}),i(y,{class:"fb red"},{default:r((()=>[n(c(g.express.express_no),1)])),_:1})])),_:1})])),_:1}),i(h,{class:"list"},{default:r((()=>[(t(!0),u(f,null,_(g.express.list,((s,e)=>(t(),d(h,{class:x(0==e?"active item":"item"),key:e},{default:r((()=>[i(h,{class:"content"},{default:r((()=>[n(c(s.context)+"-"+c(s.status),1)])),_:2},1024),i(h,{class:"datetime"},{default:r((()=>[n(c(s.time),1)])),_:2},1024)])),_:2},1032,["class"])))),128))])),_:1})])),_:1}))}],["__scopeId","data-v-b4bce86b"]]);export{m as default};
