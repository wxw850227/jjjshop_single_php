import{_ as e,y as a,A as t,a8 as s,o as l,c as d,w as o,e as r,g as i,b as c,d as u,t as n,i as _,j as f,ae as g}from"./index-024cd044.js";const b=e({data:()=>({loading:!0,store_id:null,storeDetail:{},covers:[]}),onLoad(e){this.store_id=e.store_id},mounted(){this.getData()},methods:{getData(){let e=this;a({title:"加载中"}),e._get("store.store/detail",{store_id:e.store_id},(function(a){e.storeDetail=a.data.detail;let s={latitude:a.data.detail.latitude,longitude:a.data.detail.longitude};e.covers.push(s),e.loading=!1,t()}))},callPhone(e){s({phoneNumber:e})}}},[["render",function(e,a,t,s,b,p){const D=_,h=i,m=f,y=g;return b.loading?r("",!0):(l(),d(h,{key:0,class:"store-container bg-white"},{default:o((()=>[c(h,{class:"logo ww100 p-30-0 d-c-c"},{default:o((()=>[c(D,{src:b.storeDetail.logo.file_path,mode:"aspectFill"},null,8,["src"])])),_:1}),c(h,{class:"d-c-c d-c ww100"},{default:o((()=>[c(m,{class:"f40"},{default:o((()=>[u(n(b.storeDetail.store_name),1)])),_:1}),c(m,{class:"f28 gray9"},{default:o((()=>[u("营业时间:"+n(b.storeDetail.shop_hours),1)])),_:1})])),_:1}),c(h,{class:"f30 mt30"},{default:o((()=>[c(h,{class:"d-b-c p30 border-b",onClick:a[0]||(a[0]=e=>p.callPhone(b.storeDetail.phone))},{default:o((()=>[c(m,{class:"gray9"},{default:o((()=>[u("联系电话")])),_:1}),c(h,{class:""},{default:o((()=>[c(m,{class:"iconfont icon-002dianhua"}),c(m,null,{default:o((()=>[u(n(b.storeDetail.phone),1)])),_:1})])),_:1})])),_:1}),c(h,{class:"d-b-c p30 border-b"},{default:o((()=>[c(m,{class:"gray9"},{default:o((()=>[u("联系人")])),_:1}),c(m,null,{default:o((()=>[u(n(b.storeDetail.linkman),1)])),_:1})])),_:1}),c(h,{class:"d-b-c p30 border-b"},{default:o((()=>[c(m,{class:"gray9"},{default:o((()=>[u("状态")])),_:1}),c(m,{class:"green"},{default:o((()=>[u(n(b.storeDetail.status.text),1)])),_:1})])),_:1}),c(h,{class:"d-b-c p30 border-b"},{default:o((()=>[c(m,{class:"gray9"},{default:o((()=>[u("是否支持自提核销")])),_:1}),c(m,{class:"green"},{default:o((()=>[u(n(b.storeDetail.is_check.text),1)])),_:1})])),_:1}),c(h,{class:"d-b-c p30 border-b"},{default:o((()=>[c(m,{class:"gray9"},{default:o((()=>[u("省市区")])),_:1}),c(m,null,{default:o((()=>[u(n(b.storeDetail.region.province)+n(b.storeDetail.region.city)+n(b.storeDetail.region.region),1)])),_:1})])),_:1}),c(h,{class:"d-b-c p30 border-b"},{default:o((()=>[c(m,{class:"gray9"},{default:o((()=>[u("地址")])),_:1}),c(m,null,{default:o((()=>[u(n(b.storeDetail.address),1)])),_:1})])),_:1}),c(h,{class:"d-b-c p30 border-b"},{default:o((()=>[c(m,{class:"gray9"},{default:o((()=>[u("简介")])),_:1}),c(m,{class:"flex-1 o-h tr"},{default:o((()=>[u(n(b.storeDetail.summary),1)])),_:1})])),_:1})])),_:1}),c(h,{class:"store-map"},{default:o((()=>[c(y,{latitude:b.storeDetail.latitude,longitude:b.storeDetail.longitude,markers:b.covers},null,8,["latitude","longitude","markers"])])),_:1})])),_:1}))}],["__scopeId","data-v-dd515352"]]);export{b as default};
