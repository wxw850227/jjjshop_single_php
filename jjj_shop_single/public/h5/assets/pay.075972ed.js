import{aa as e,ab as r}from"./index-024cd044.js";const a=(e,r,a,o)=>{if(-10===e.code)return r.showError(e.msg),!1;if(20==e.data.pay_type){if(!r.isWeixin())return void(window.location.href=e.data.payment.h5_url+"&redirect_url="+e.data.return_Url);WeixinJSBridge.invoke("getBrandWCPayRequest",e.data.payment,(function(n){"get_brand_wcpay_request:ok"==n.err_msg?t(e,r,a):"get_brand_wcpay_request:cancel"==n.err_msg?r.showSuccess("支付取消",(()=>{d(e,o)})):r.showError("订单未支付成功",(()=>{d(e,o)}))}))}if(10==e.data.pay_type&&t(e,r,a),30==e.data.pay_type){const r=document.createElement("formdiv");r.innerHTML=e.data.payment,document.body.appendChild(r),document.forms[0].submit(),r.remove()}};function t(r,a,t){t?t(r):function(r){e({url:"/pages/order/pay-success/pay-success?order_id="+r.data.order_id})}(r)}function d(e,a){a?a(e):r({url:"/pages/order/order-detail?order_id="+e.data.order_id})}export{a as p};
