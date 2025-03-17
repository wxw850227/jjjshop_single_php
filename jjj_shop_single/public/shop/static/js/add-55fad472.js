import{_ as e}from"./category-e8d04341.js";import{_ as l}from"./Product-e5bb92d9.js";import{E as a,u as o,w as t,d,e as r,i as s,F as i,x as u,f as m,l as p,m as c,C as n,c as _}from"./element-plus-68e4b1c7.js";import{C as f}from"./coupon-e6c73f62.js";import{_ as y}from"./index-c1104e7d.js";import{ap as b,o as g,c as h,P as V,S as j,Q as v,W as k,Y as x,T as C,$ as U,a as w,a9 as z,X as D,bb as I,b9 as F}from"./@vue-76da2f05.js";import"./product-03ba16fa.js";import"./@vueuse-90d34f35.js";import"./lodash-es-3f297d7c.js";import"./async-validator-cf877c1f.js";import"./dayjs-13b7e569.js";import"./call-bind-6a1b7bd0.js";import"./get-intrinsic-bac01933.js";import"./has-symbols-456daba2.js";import"./has-proto-4a87f140.js";import"./function-bind-72d06d3b.js";import"./has-885c3436.js";import"./@element-plus-9f5f6982.js";import"./escape-html-1935ddb3.js";import"./normalize-wheel-es-3222b0a2.js";import"./@ctrl-91de2ec7.js";import"./vue-router-b6ab34d8.js";import"./pinia-58dabe83.js";import"./vue-demi-71ba0ef2.js";import"./axios-85bcd05e.js";import"./qs-74887072.js";import"./side-channel-9348fcaa.js";import"./object-inspect-c71aff05.js";import"./vue-clipboard2-8d1bb64a.js";import"./clipboard-fb55ee1a.js";import"./vue-ueditor-wrap-c9660067.js";const N={components:{Product:l,Category:e},data:()=>({activeName:"1",form:{color:"10",coupon_type:"10",expire_type:"10",sort:1,active_time:"",show_center:1,free_limit:0,apply_range:10},loading:!1,pickerOptions0:{disabledDate:e=>e.getTime()<Date.now()-864e5},is_category:!1,is_product:!1,exclude_ids:[],product_list:[],category_list:{second:[],first:[]},category_ids:[]}),created(){},methods:{hasImages:e=>e||"",onSubmit(){let e=this,l=e.form;l.product_ids=e.exclude_ids,l.category_list=e.category_list,e.$refs.form.validate((o=>{o&&(e.loading=!0,f.addCoupon(l,!0).then((l=>{e.loading=!1,a({message:"恭喜你，添加成功",type:"success"}),e.$router.push("/plus/coupon/index")})).catch((l=>{e.loading=!1})))}))},closeCategoryFunc(e){let l=this;l.is_category=!1,e&&(l.category_list=e)},closeProductFunc(e){let l=this;l.is_product=e.openDialog,"success"==e.type&&e.params.forEach(((e,a)=>{let o={product_id:e.product_id,product_name:e.product_name,product_image:e.product_image};l.exclude_ids.push(o.product_id),l.product_list.push(o)}))},cancelFunc(){this.$router.push({path:"/plus/coupon/index"})},deleteClick(e){this.exclude_ids.splice(e,1),this.product_list.splice(e,1)}}},P=e=>(I("data-v-8e22b414"),e=e(),F(),e),Y={class:"product-add"},$=P((()=>w("div",{class:"common-form"},"添加优惠券",-1))),q=P((()=>w("div",{class:"tips"},"例如：满100减10",-1))),M={key:0},S={key:1},E=P((()=>w("div",{class:"tips"},"折扣率范围0-10，9.5代表9.5折，0代表不折扣",-1))),O={key:2},T={key:3},X=P((()=>w("div",{class:"tips"},"限制领取的优惠券数量，-1为不限制",-1))),Q=P((()=>w("div",{class:"tips"},"促销是指满减，等级优惠券值商品的会员等级折扣",-1))),W=P((()=>w("div",{class:"common-form"},"适用商品",-1))),A=P((()=>w("span",null,"指定商品",-1))),B=P((()=>w("span",null,"指定分类",-1))),G={alt:"",width:50},H={class:"common-button-wrapper"};const J=y(N,[["render",function(a,f,y,I,F,N){const P=o,J=t,K=d,L=r,R=s,Z=i,ee=u,le=m,ae=p,oe=c,te=n,de=_,re=l,se=e,ie=b("img-url");return g(),h("div",Y,[V(de,{size:"small",ref:"form",model:F.form,"label-width":"200px"},{default:j((()=>[V(J,{modelValue:F.activeName,"onUpdate:modelValue":f[0]||(f[0]=e=>F.activeName=e),type:"card"},{default:j((()=>[V(P,{label:"基本信息",name:"1"}),V(P,{label:"适用商品",name:"2"})])),_:1},8,["modelValue"]),"1"==F.activeName?(g(),h(v,{key:0},[$,V(L,{label:"优惠券名称",prop:"name",rules:[{required:!0,message:" "}]},{default:j((()=>[V(K,{modelValue:F.form.name,"onUpdate:modelValue":f[1]||(f[1]=e=>F.form.name=e),placeholder:"请输入优惠券名称"},null,8,["modelValue"]),q])),_:1}),V(L,{label:"优惠券颜色"},{default:j((()=>[V(Z,{modelValue:F.form.color,"onUpdate:modelValue":f[2]||(f[2]=e=>F.form.color=e)},{default:j((()=>[V(R,{label:"10"},{default:j((()=>[k("蓝色")])),_:1}),V(R,{label:"20"},{default:j((()=>[k("红色")])),_:1}),V(R,{label:"30"},{default:j((()=>[k("紫色")])),_:1}),V(R,{label:"40"},{default:j((()=>[k("黄色")])),_:1})])),_:1},8,["modelValue"])])),_:1}),V(L,{label:"优惠券类型"},{default:j((()=>[V(Z,{modelValue:F.form.coupon_type,"onUpdate:modelValue":f[3]||(f[3]=e=>F.form.coupon_type=e)},{default:j((()=>[V(R,{label:"10"},{default:j((()=>[k("满减券")])),_:1}),V(R,{label:"20"},{default:j((()=>[k("折扣券")])),_:1})])),_:1},8,["modelValue"])])),_:1}),10==F.form.coupon_type?(g(),h("div",M,[V(L,{label:"减免金额"},{default:j((()=>[V(K,{modelValue:F.form.reduce_price,"onUpdate:modelValue":f[4]||(f[4]=e=>F.form.reduce_price=e),placeholder:"请输入减免金额",type:"number"},null,8,["modelValue"])])),_:1})])):(g(),h("div",S,[V(L,{label:"折扣率 "},{default:j((()=>[V(K,{modelValue:F.form.discount,"onUpdate:modelValue":f[5]||(f[5]=e=>F.form.discount=e),placeholder:"请输入折扣率",type:"number"},null,8,["modelValue"]),E])),_:1})])),V(L,{label:"最低消费金额"},{default:j((()=>[V(K,{modelValue:F.form.min_price,"onUpdate:modelValue":f[6]||(f[6]=e=>F.form.min_price=e),placeholder:"请输入最低消费金额",type:"number"},null,8,["modelValue"])])),_:1}),V(L,{label:"到期类型"},{default:j((()=>[V(Z,{modelValue:F.form.expire_type,"onUpdate:modelValue":f[7]||(f[7]=e=>F.form.expire_type=e)},{default:j((()=>[V(R,{label:"10"},{default:j((()=>[k("领取后生效")])),_:1}),V(R,{label:"20"},{default:j((()=>[k("固定时间")])),_:1})])),_:1},8,["modelValue"])])),_:1}),10==F.form.expire_type?(g(),h("div",O,[V(L,{label:"有效天数"},{default:j((()=>[V(K,{modelValue:F.form.expire_day,"onUpdate:modelValue":f[8]||(f[8]=e=>F.form.expire_day=e),placeholder:"请输入有效天数",type:"number"},null,8,["modelValue"])])),_:1})])):(g(),h("div",T,[V(L,{label:"有效时间"},{default:j((()=>[V(ee,{modelValue:F.form.active_time,"onUpdate:modelValue":f[9]||(f[9]=e=>F.form.active_time=e),type:"daterange",align:"right","unlink-panels":"","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":F.pickerOptions0},null,8,["modelValue","picker-options"])])),_:1})])),V(L,{label:"发放总数量 ",prop:"total_num",rules:[{required:!0,message:" "}]},{default:j((()=>[V(K,{modelValue:F.form.total_num,"onUpdate:modelValue":f[10]||(f[10]=e=>F.form.total_num=e),placeholder:"请输入发放总数量",type:"number"},null,8,["modelValue"]),X])),_:1}),V(L,{label:"是否显示在领券中心"},{default:j((()=>[V(Z,{modelValue:F.form.show_center,"onUpdate:modelValue":f[11]||(f[11]=e=>F.form.show_center=e)},{default:j((()=>[V(R,{label:1},{default:j((()=>[k("显示")])),_:1}),V(R,{label:0},{default:j((()=>[k("不显示")])),_:1})])),_:1},8,["modelValue"])])),_:1}),V(L,{label:"使用条件"},{default:j((()=>[V(Z,{modelValue:F.form.free_limit,"onUpdate:modelValue":f[12]||(f[12]=e=>F.form.free_limit=e)},{default:j((()=>[V(R,{label:0},{default:j((()=>[k("不限制")])),_:1}),V(R,{label:1},{default:j((()=>[k("不可与促销同时使用")])),_:1}),V(R,{label:2},{default:j((()=>[k("不可与等级优惠同时使用")])),_:1}),V(R,{label:3},{default:j((()=>[k("不可于促销和等级优惠同时使用")])),_:1})])),_:1},8,["modelValue"]),Q])),_:1}),V(L,{label:"排序"},{default:j((()=>[V(K,{type:"number",modelValue:F.form.sort,"onUpdate:modelValue":f[13]||(f[13]=e=>F.form.sort=e),placeholder:"请输入排序"},null,8,["modelValue"])])),_:1})],64)):x("",!0),"2"==F.activeName?(g(),h(v,{key:1},[W,V(L,{label:"选择"},{default:j((()=>[V(Z,{modelValue:F.form.apply_range,"onUpdate:modelValue":f[14]||(f[14]=e=>F.form.apply_range=e)},{default:j((()=>[V(R,{label:10},{default:j((()=>[k("全部商品")])),_:1}),V(R,{label:20},{default:j((()=>[A])),_:1}),V(R,{label:30},{default:j((()=>[B])),_:1})])),_:1},8,["modelValue"])])),_:1}),20==F.form.apply_range?(g(),C(L,{key:0},{default:j((()=>[V(le,{class:"mb10",onClick:f[15]||(f[15]=e=>F.is_product=!0),type:"primary",plain:""},{default:j((()=>[k("添加商品 ")])),_:1}),F.product_list.length>0?(g(),C(oe,{key:0,data:F.product_list,"max-height":"400",border:"",style:{width:"100%"}},{default:j((()=>[V(ae,{prop:"product_id",label:"ID",width:"180"}),V(ae,{prop:"product_name",label:"商品名称",width:"180"}),V(ae,{prop:"image",label:"图片"},{default:j((e=>[U(w("img",G,null,512),[[ie,N.hasImages(e.row.product_image)]])])),_:1}),V(ae,{label:"操作"},{default:j((e=>[V(le,{onClick:l=>N.deleteClick(e.$index),type:"text",size:"small"},{default:j((()=>[k("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])):x("",!0)])),_:1})):x("",!0),30==F.form.apply_range?(g(),C(L,{key:1,label:""},{default:j((()=>[V(le,{class:"mb10",onClick:f[16]||(f[16]=e=>F.is_category=!0),type:"primary",plain:""},{default:j((()=>[k("添加分类 ")])),_:1}),w("div",null,[F.category_list.first.length>0?(g(!0),h(v,{key:0},z(F.category_list.first,((e,l)=>(g(),h("div",{key:e.category_id,class:"mr10 mb10",style:{display:"inline-block"}},[V(te,{size:"large",type:"info"},{default:j((()=>[k(D(e.parent?e.parent+"→"+e.name:e.name),1)])),_:2},1024)])))),128)):x("",!0),F.category_list.second.length>0?(g(!0),h(v,{key:1},z(F.category_list.second,((e,l)=>(g(),h("div",{key:e.category_id,class:"mr10 mb10",style:{display:"inline-block"}},[V(te,{size:"large",class:"mr10 mb10",type:"info"},{default:j((()=>[k(D(e.parent?e.parent+"→"+e.name:e.name),1)])),_:2},1024)])))),128)):x("",!0)])])),_:1})):x("",!0)],64)):x("",!0),w("div",H,[V(le,{type:"info",size:"small",onClick:N.cancelFunc,loading:F.loading},{default:j((()=>[k("取消")])),_:1},8,["onClick","loading"]),V(le,{type:"primary",size:"small",onClick:N.onSubmit,loading:F.loading},{default:j((()=>[k("提交")])),_:1},8,["onClick","loading"])])])),_:1},8,["model"]),V(re,{isproduct:F.is_product,excludeIds:F.exclude_ids,islist:!0,onCloseDialog:N.closeProductFunc},null,8,["isproduct","excludeIds","onCloseDialog"]),V(se,{is_category:F.is_category,excludeIds:F.category_ids,onClose:N.closeCategoryFunc},null,8,["is_category","excludeIds","onClose"])])}],["__scopeId","data-v-8e22b414"]]);export{J as default};
