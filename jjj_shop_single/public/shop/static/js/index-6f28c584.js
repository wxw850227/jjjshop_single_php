import{a as e,E as a,s as r,d as t,e as l,q as o,r as s,x as i,f as d,c as n,u as c,w as u,C as p,l as m,m as _,n as y,D as h,t as v,o as w,v as g}from"./element-plus-68e4b1c7.js";import{O as f}from"./order-aee1564a.js";import{l as k}from"./qs-74887072.js";import x from"./cancel-77579e1e.js";import{_ as b,u as C}from"./index-d5abae2c.js";import{ae as j,ap as D,o as z,c as V,a as F,P as S,S as U,Q as B,a9 as N,T as I,W as P,$ as q,M as E,X as M,Y}from"./@vue-76da2f05.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vuedraggable-13be42ee.js";import"./vue-407f4729.js";import"./sortablejs-9c07ead7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const{token:T}=C(),L={components:{Cancel:x},data:()=>({activeName:"all",loading:!0,tableData:[],pageSize:20,totalDataNumber:0,curPage:1,searchForm:{order_no:"",search:"",style_id:"",store_id:"",create_time:"",token:T},exStyle:[],shopList:[],create_time:"",order_count:{payment:0,delivery:0,received:0},dialogBatchDelivery:!1,open_edit:!1,order_no:0,is_send_wx:""}),created(){this.getData()},methods:{arraySpanMethod(e){if(e.rowIndex%2==0&&0===e.columnIndex)return[1,8]},handleCurrentChange(e){this.curPage=e,this.getData()},handleSizeChange(e){this.curPage=1,this.pageSize=e,this.getData()},handleClick(e,a){let r=this;r.curPage=1,r.activeName=e,r.getData()},getData(){let e=this,a=this.searchForm;a.dataType=e.activeName,a.page=e.curPage,a.list_rows=e.pageSize,e.loading=!0,f.orderlist(a,!0).then((a=>{let r=[];for(let e=0;e<a.data.list.data.length;e++){let t=a.data.list.data[e],l={order_no:t.order_no,create_time:t.create_time,order_source:t.order_source,order_source_text:t.order_source_text,is_top_row:!0,order_status_value:t.order_status.value};r.push(l),r.push(t)}e.tableData.data=r,e.totalDataNumber=a.data.list.total,e.exStyle=a.data.ex_style,e.shopList=a.data.shop_list,e.order_count=a.data.order_count.order_count,e.is_send_wx=a.data.is_send_wx,e.loading=!1})).catch((e=>{}))},cancelClick(e){this.order_no=e.order_no,this.open_edit=!0},closeDialogFunc(e,a){"edit"==a&&(this.open_edit=e.openDialog,"success"==e.type&&this.getData())},addClick(e){let a=e.order_id;this.$router.push({path:"/order/order/Detail",query:{order_id:a}})},onSubmit(){this.curPage=1,this.tableData=[],this.getData()},onExport:function(){let e=window.location.protocol+"//"+window.location.host;window.location.href=e+"/index.php/shop/order.operate/export?"+k.stringify(this.searchForm)},showBatchDelivery(){this.dialogBatchDelivery=!0},gotoExpress(){this.$router.push("/setting/express/index")},wxdeliveryClick(r){let t=this,l=r.order_id;e.confirm("确定发货吗?","提示",{type:"warning"}).then((()=>{f.wxDelivery({order_id:l},!0).then((e=>{t.loading=!1,a({message:"恭喜你，操作成功",type:"success"}),t.getData()})).catch((e=>{t.loading=!1}))})).catch((()=>{a({type:"info",message:"已取消发货"})}))},onBeforeUploadImage(e){const r="xlsx"===e.name.substring(e.name.lastIndexOf(".")+1),t=e.size/1024/1024<10;return r||a.error("上传文件只能是excel格式!"),t||a.error("上传文件大小不能超过 10MB!"),r&&t},UploadImage(e){let t=this;const l=r.service({lock:!0,text:"正在处理,请等待",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),o=new FormData;o.append("iFile",e.file),f.batchDelivery(o).then((e=>{l.close(),t.dialogBatchDelivery=!1,a({message:e.msg,type:"warning"})})).catch((r=>{l.close(),a({message:"本次处理失败",type:"warning"}),e.onError()}))}}},$={class:"user"},O={class:"common-seach-wrap"},A={class:"block"},Q=F("span",{class:"demonstration"},null,-1),R={class:"product-content"},W={class:"table-wrap"},X={key:0,class:"order-code"},G={class:"c_main"},H={class:"pl16"},J={key:0,class:"pl16"},K={class:"pic"},Z={alt:""},ee={class:"info"},ae={class:"name gray3 product-name"},re={key:0,class:"gray9"},te={key:1,class:"orange"},le={class:"d-c-c d-c"},oe={class:"orange"},se={class:"gray3"},ie={key:0},de={key:0,class:"orange"},ne={key:1,class:"orange"},ce={key:2,class:"orange"},ue={class:"gray9"},pe={key:0},me={class:"gray9"},_e={key:0},ye={key:0,class:"gray9"},he={key:0},ve={class:"green"},we={key:0},ge={key:0},fe={key:0},ke={key:1},xe={key:0},be={class:"pagination"},Ce=F("div",null,"1、先按未发货条件筛选后，导出订单",-1),je=F("div",null,"2、在导出excel中填写物流公司、物流单号，然后点批量发货导入填好的excel文件",-1),De={style:{"padding-top":"20px","padding-bottom":"20px","text-align":"center"}};const ze=b(L,[["render",function(e,a,r,f,k,x){const b=t,C=l,T=o,L=s,ze=i,Ve=d,Fe=n,Se=c,Ue=u,Be=p,Ne=m,Ie=_,Pe=y,qe=h,Ee=v,Me=w,Ye=j("Cancel"),Te=D("auth"),Le=D("img-url"),$e=g;return z(),V("div",$,[F("div",O,[S(Fe,{size:"small",inline:!0,model:k.searchForm,class:"demo-form-inline"},{default:U((()=>[S(C,{label:"订单号"},{default:U((()=>[S(b,{size:"small",modelValue:k.searchForm.order_no,"onUpdate:modelValue":a[0]||(a[0]=e=>k.searchForm.order_no=e),placeholder:"请输入订单号"},null,8,["modelValue"])])),_:1}),S(C,{label:"昵称/手机号"},{default:U((()=>[S(b,{modelValue:k.searchForm.search,"onUpdate:modelValue":a[1]||(a[1]=e=>k.searchForm.search=e),placeholder:"请输入昵称/手机号"},null,8,["modelValue"])])),_:1}),S(C,{label:"配送方式"},{default:U((()=>[S(L,{size:"small",modelValue:k.searchForm.style_id,"onUpdate:modelValue":a[2]||(a[2]=e=>k.searchForm.style_id=e),placeholder:"请选择"},{default:U((()=>[S(T,{label:"全部",value:""}),(z(!0),V(B,null,N(k.exStyle,((e,a)=>(z(),I(T,{key:a,label:e.name,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),S(C,{label:"门店地址"},{default:U((()=>[S(L,{size:"small",modelValue:k.searchForm.store_id,"onUpdate:modelValue":a[3]||(a[3]=e=>k.searchForm.store_id=e),placeholder:"请选择"},{default:U((()=>[S(T,{label:"全部",value:""}),(z(!0),V(B,null,N(k.shopList,((e,a)=>(z(),I(T,{key:a,label:e.store_name,value:e.store_id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),S(C,{label:"起始时间"},{default:U((()=>[F("div",A,[Q,S(ze,{size:"small",modelValue:k.searchForm.create_time,"onUpdate:modelValue":a[4]||(a[4]=e=>k.searchForm.create_time=e),type:"daterange","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])])),_:1}),S(C,null,{default:U((()=>[S(Ve,{size:"small",type:"primary",icon:"Search",onClick:x.onSubmit},{default:U((()=>[P("查询")])),_:1},8,["onClick"])])),_:1}),S(C,null,{default:U((()=>[q((z(),I(Ve,{size:"small",type:"success",onClick:x.onExport},{default:U((()=>[P("导出")])),_:1},8,["onClick"])),[[Te,"/order/operate/export"]])])),_:1}),S(C,{style:{float:"right"}},{default:U((()=>[q((z(),I(Ve,{size:"small",type:"warning",onClick:x.showBatchDelivery},{default:U((()=>[P("批量发货")])),_:1},8,["onClick"])),[[Te,"/order/operate/batchDelivery"]])])),_:1})])),_:1},8,["model"])]),F("div",R,[F("div",W,[S(Ue,{modelValue:k.activeName,"onUpdate:modelValue":a[5]||(a[5]=e=>k.activeName=e),onTabChange:x.handleClick},{default:U((()=>[S(Se,{label:"全部订单",name:"all"}),S(Se,{label:"未付款("+k.order_count.payment+")",name:"payment"},null,8,["label"]),S(Se,{label:"待发货("+k.order_count.delivery+")",name:"delivery"},null,8,["label"]),S(Se,{label:"待收货("+k.order_count.received+")",name:"received"},null,8,["label"]),S(Se,{label:"待评价",name:"comment"}),S(Se,{label:"已完成",name:"six"})])),_:1},8,["modelValue","onTabChange"]),q((z(),I(Ie,{size:"small",data:k.tableData.data,"span-method":x.arraySpanMethod,border:"",style:{width:"100%"}},{default:U((()=>[S(Ne,{prop:"order_no",label:"订单信息",width:"400"},{default:U((e=>[e.row.is_top_row?(z(),V("div",X,[F("span",{class:E(["state-text",{"state-text-red":10!=e.row.order_source}])},M(e.row.order_source_text),3),F("span",G,"订单号："+M(e.row.order_no),1),F("span",H,"下单时间："+M(e.row.create_time),1),21==e.row.order_status_value?(z(),V("span",J,[S(Be,{effect:"dark",size:"small"},{default:U((()=>[P("取消申请中")])),_:1})])):Y("",!0)])):(z(!0),V(B,{key:1},N(e.row.product,((e,a)=>(z(),V("div",{class:"product-info",key:a},[F("div",K,[q(F("img",Z,null,512),[[Le,e.image.file_path]])]),F("div",ee,[F("div",ae,[F("span",null,M(e.product_name),1)]),e.product_attr?(z(),V("div",re,M(e.product_attr),1)):Y("",!0),e.refund?(z(),V("div",te,M(e.refund.type.text)+"-"+M(e.refund.status.text),1)):Y("",!0)]),F("div",le,[F("div",oe,"￥ "+M(e.product_price),1),F("div",se,"x"+M(e.total_num),1)])])))),128))])),_:1}),S(Ne,{prop:"pay_price",label:"实付款"},{default:U((e=>[e.row.is_top_row?Y("",!0):(z(),V("div",ie,[80!=e.row.order_source?(z(),V("div",de,M(e.row.pay_price),1)):Y("",!0),80==e.row.order_source?(z(),V("p",ne,"定金："+M(e.row.advance.pay_price),1)):Y("",!0),80==e.row.order_source?(z(),V("p",ce,"尾款："+M(e.row.pay_price),1)):Y("",!0),F("p",ue,"(含运费："+M(e.row.express_price)+")",1)]))])),_:1}),S(Ne,{prop:"",label:"买家"},{default:U((e=>[e.row.is_top_row?Y("",!0):(z(),V("div",pe,[F("div",null,M(e.row.user?e.row.user.nickName:"--"),1),F("div",me,"ID：("+M(e.row.user?e.row.user.user_id:"--")+")",1)]))])),_:1}),S(Ne,{prop:"state_text",label:"交易状态"},{default:U((e=>[e.row.is_top_row?Y("",!0):(z(),V("div",_e,M(e.row.state_text),1))])),_:1}),S(Ne,{prop:"pay_type.text",label:"支付方式"},{default:U((e=>[e.row.is_top_row?Y("",!0):(z(),V("span",ye,M(e.row.pay_type.text),1))])),_:1}),S(Ne,{prop:"delivery_type.text",label:"配送方式"},{default:U((e=>[e.row.is_top_row?Y("",!0):(z(),V("div",he,[F("span",ve,M(e.row.delivery_type.text),1),30==e.row.delivery_type.value?(z(),V("span",we,"手机号:"+M(e.row.user?e.row.user.mobile:"--"),1)):Y("",!0)]))])),_:1}),S(Ne,{prop:"is_comment",label:"评价",width:"60"},{default:U((e=>[e.row.is_top_row?Y("",!0):(z(),V("div",ge,[0==e.row.is_comment?(z(),V("span",fe,"未评价")):(z(),V("span",ke,"已评价"))]))])),_:1}),S(Ne,{fixed:"right",label:"操作",width:"150"},{default:U((e=>[e.row.is_top_row?Y("",!0):(z(),V("div",xe,[q((z(),I(Ve,{onClick:a=>x.addClick(e.row),type:"text",size:"small"},{default:U((()=>[P("详情 ")])),_:2},1032,["onClick"])),[[Te,"/order/order/detail"]]),20!=e.row.pay_status.value||10!=e.row.delivery_status.value||20==e.row.order_status.value||21==e.row.order_status.value||10!=e.row.delivery_type.value||e.row.assemble_status&&20!=e.row.assemble_status?Y("",!0):q((z(),I(Ve,{key:0,onClick:a=>x.addClick(e.row),type:"text",size:"small"},{default:U((()=>[P(" 发货 ")])),_:2},1032,["onClick"])),[[Te,"/order/order/delivery"]]),20==e.row.pay_status.value&&10==e.row.delivery_status.value&&20!=e.row.order_status.value&&21!=e.row.order_status.value&&20==e.row.delivery_type.value?q((z(),I(Ve,{key:1,onClick:a=>x.addClick(e.row),type:"text",size:"small"},{default:U((()=>[P(" 核销 ")])),_:2},1032,["onClick"])),[[Te,"/order/operate/extract"]]):Y("",!0),20==e.row.pay_status.value&&10==e.row.delivery_status.value&&20!=e.row.order_status.value&&21!=e.row.order_status.value&&30==e.row.delivery_type.value?q((z(),I(Ve,{key:2,onClick:a=>x.addClick(e.row),type:"text",size:"small"},{default:U((()=>[P(" 发货 ")])),_:2},1032,["onClick"])),[[Te,"/order/order/delivery"]]):Y("",!0),20==e.row.pay_status.value&&10==e.row.delivery_status.value&&10==e.row.order_status.value?q((z(),I(Ve,{key:3,onClick:a=>x.cancelClick(e.row),type:"text",size:"small"},{default:U((()=>[P(" 取消 ")])),_:2},1032,["onClick"])),[[Te,"/order/order/orderCancel"]]):Y("",!0),21==e.row.order_status.value?q((z(),I(Ve,{key:4,onClick:a=>x.addClick(e.row),type:"text",size:"small"},{default:U((()=>[P("审核")])),_:2},1032,["onClick"])),[[Te,"/order/operate/confirmCancel"]]):Y("",!0),20==e.row.pay_type.value&&20==e.row.pay_status.value&&20==e.row.delivery_status.value&&10==e.row.order_status.value&&10==e.row.wx_delivery_status&&"wx"==e.row.pay_source&&1==k.is_send_wx?q((z(),I(Ve,{key:5,onClick:a=>x.wxdeliveryClick(e.row),link:"",type:"primary",size:"small"},{default:U((()=>[P("小程序发货")])),_:2},1032,["onClick"])),[[Te,"/order/order/wxDelivery"]]):Y("",!0)]))])),_:1})])),_:1},8,["data","span-method"])),[[$e,k.loading]])]),F("div",be,[S(Pe,{onSizeChange:x.handleSizeChange,onCurrentChange:x.handleCurrentChange,background:"","current-page":k.curPage,"page-size":k.pageSize,layout:"total, prev, pager, next, jumper",total:k.totalDataNumber},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])]),S(Me,{title:"批量发货说明",modelValue:k.dialogBatchDelivery,"onUpdate:modelValue":a[7]||(a[7]=e=>k.dialogBatchDelivery=e),width:"30%"},{default:U((()=>[Ce,je,F("div",null,[P("3、请检查物流公司是否已经添加到系统，"),S(qe,{type:"primary",underline:!1,onClick:a[6]||(a[6]=e=>x.gotoExpress())},{default:U((()=>[P("查看")])),_:1})]),F("div",De,[S(Ee,{class:"avatar-uploader",ref:"upload",action:"string",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","before-upload":x.onBeforeUploadImage,"http-request":x.UploadImage,"show-file-list":!1},{default:U((()=>[S(Ve,{size:"small",icon:"Upload",type:"primary"},{default:U((()=>[P("上传发货表格")])),_:1})])),_:1},8,["before-upload","http-request"])])])),_:1},8,["modelValue"]),k.open_edit?(z(),I(Ye,{key:0,open_edit:k.open_edit,order_no:k.order_no,onCloseDialog:a[8]||(a[8]=e=>x.closeDialogFunc(e,"edit"))},null,8,["open_edit","order_no"])):Y("",!0)])}]]);export{ze as default};
