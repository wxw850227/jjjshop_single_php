import{_ as s,y as a,A as m,N as e,a as d,o as Z,c as l,w as t,n as i,e as n,g as o,b as c,f as A,r,F as u,d as f,i as g,t as p,j as h,a1 as R}from"./index-024cd044.js";const _=s({data:()=>({loadding:!0,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,listData:[],default_id:"0",options:{}}),onLoad:function(s){this.options=s},onShow:function(){a({title:"加载中"}),this.getData()},methods:{getData(){let s=this;s.dataType,s._get("user.address/lists",{},(function(a){s.listData=a.data.list,s.default_id=a.data.default_id+"",s.loadding=!1,m()}))},addAddress(){let s=1;"order"===this.options.source&&(s=2),this.gotoPage("/pages/user/address/add/add?delta="+s)},radioChange(s){let a=this;return a.default_id=s,a._post("user.address/setDefault",{address_id:s},(function(s){"order"===a.options.source&&history.go(-1)})),!1},editAddress(s){this.gotoPage("/pages/user/address/edit/edit?address_id="+s)},delAddress(s){let a=this;e({title:"提示",content:"您确定要移除当前收货地址吗?",success:function(m){m.confirm&&a._get("user.address/delete",{address_id:s},(function(s){1==s.code&&(d({title:"删除成功",duration:2e3}),a.getData())}))}})}}},[["render",function(s,a,m,e,d,_){const V=h,y=o,b=R,k=g;return d.loadding?n("",!0):(Z(),l(y,{key:0,"data-theme":s.theme(),class:i(s.theme()||"")},{default:t((()=>[d.listData.length>0?(Z(),l(y,{key:0,class:"pbenv"},{default:t((()=>[c(y,{class:"address-list bg-white"},{default:t((()=>[(Z(!0),A(u,null,r(d.listData,((a,m)=>(Z(),l(y,{class:"address p-30-0 border-b-d",key:m},{default:t((()=>[c(y,{class:"info flex-1 mb10"},{default:t((()=>[c(y,{class:"user f32 d-b-c"},{default:t((()=>[c(V,null,{default:t((()=>[f(p(a.name),1)])),_:2},1024),c(V,{class:"ml20 gray9 f26"},{default:t((()=>[f(p(a.phone),1)])),_:2},1024)])),_:2},1024),c(y,{class:"pt20 f26 gray3"},{default:t((()=>[f(p(a.region.province)+p(a.region.city)+p(a.region.region)+p(a.detail),1)])),_:2},1024)])),_:2},1024),c(y,{class:"d-b-c"},{default:t((()=>[c(y,{class:"radio d-s-c"},{default:t((()=>[c(b,{style:{transform:"scale(0.6)"},color:s.getThemeColor(),value:a.address_id+"",checked:d.default_id==a.address_id+"",onClick:s=>_.radioChange(a.address_id)},null,8,["color","value","checked","onClick"]),c(V,{class:""},{default:t((()=>[f("默认地址")])),_:1})])),_:2},1024),c(y,{class:"d-s-c"},{default:t((()=>[c(y,{class:"icon-box plus d-c-c ml30",onClick:s=>_.delAddress(a.address_id)},{default:t((()=>[c(k,{class:"add_icon_img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAhFBMVEUAAACampqZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmampqZmZmampqZmZmbm5uZmZmZmZmZmZmbm5uZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmampqZmZmYmJiYmJibm5uZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmampqZmZmZmZnORd5BAAAAK3RSTlMACNsu6fKRi4RcKeAz1hnQNyQf9ryrnBFmgVN7tnTCYQyjRjyya8e/TUGZ78+T+gAAAshJREFUSMftlteuozAQQGO6KQZsEkpCKMY0////7Rik6BZKVvuw9+EeKRIxc+xBtjxz+UmkeouzLKteqD+jT9Abbu2OwrG+YJeFXr8hx9XtGXhfCPpGuG8sPM0ak9/xmjE9lanomTS94BOeKWVY6uhMdnNNmolVivIDTmdIz+JnLuKWJzWrpTR+QSnPQ2Zs5h3rvFVM08T5WMIi2ox9P3rh+6MdMnPIC84hqFVwPV7k6t50j67rroqu9+CTw665NS9ut2tvSGmEjzWkg/AmzxbZephSwUyTMXkIUzFSYSbzIs+J+TngNcX+6EsWdtf3yRAaEGKEzwQYnl8YEgBCmMp+SPq+s8Ui+xPOBK7ywZRGYguM4TR/p8I4cx6GZL1TYZHhyV9kVBNKCWlvsJdz4RJCNyEkHmEb2XUkKr7+dGJ0C/bI5gfHH/nqAN38y8o32YnQoRxIc96V7RNZA1nfk9e00YaofpFzmLaSEXHjdBFIHK/3R01dgs7lCKG4ENhXCZA2EyNVs+hYFC5C/onsIzLentdKOZEzPG2OYBbc9E1BkH4q0zJkQa5DluOVsUcBOcRq6B5f3BNZR/Fdk54dgVwkUj5xClnnnjQc96/lYZVh6E05kNoqP/5RTlY5+JV/5V/5f8v1B1l7V1Z3jsXVyoOUfaVkB4bs968hX8kJyBgucve9lUEiVacNpQs37nTzoPuCByoSbxD0VI5QHZVW3qqS4WaWJVRlSqe7decp0k/lS+q3nKK1g231pfBQ3kYELYWOHck1VKY0BRdAHx5g/ET2VHXZ56BWwRvjsDut21nt4lZ9jsuesf7OKdmBRuVgyvDubshp0RiqHcrwDkszZFwx2ZCRK56qc3xcd+hCU7K+9OvNT4rsUDWRxh5MysCawN2CjBZMfoAZzAUkvWc7iWYyxsxvqEFvsAu6vxd6ZSXhLsmc+enlR/AHIoaYZVKBlR0AAAAASUVORK5CYII=",mode:"aspectFill"}),c(V,{class:"gray9 ml10"},{default:t((()=>[f("删除")])),_:1})])),_:2},1032,["onClick"]),c(y,{class:"none_line ml30"}),c(y,{class:"icon-box plus d-c-c ml30 mr40",onClick:s=>_.editAddress(a.address_id)},{default:t((()=>[c(k,{class:"add_icon_img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAhFBMVEUAAACZmZmZmZmYmJiampqYmJiYmJiZmZmZmZmbm5uZmZmZmZmZmZmZmZmZmZmZmZmZmZmampqZmZmYmJiZmZmZmZmampqZmZmYmJiZmZmZmZmYmJiZmZmZmZmZmZmYmJiZmZmZmZmZmZmZmZmZmZmZmZmZmZmampqZmZmZmZmZmZmZmZm1H4A0AAAAK3RSTlMATcPHK1kL8voF6K56EpHP0yH3MdxEZR1eOb407n+Ndie2nnCoiOIXglA9aU45fAAAAgxJREFUSMft08myoyAYhmFHBCeccEiMMc763//9tRKrOUugN91V/a7z8ZREDblIum9B4nueT6eQVcRQiFQsnBIPzlo6jMeqMk7rgfoYeNlix+6q4NaBf838ZWmvI4qBRUTWLfnWo0EcB0kGgOl2RAoubpNpq02znD8+Bu8xpgpuRuPdqaKocvgjeFMj7cJlrfdh48MDsHYk6/LHTO/jmrkAoGVFpFye/yn778+j2gZIQofIuW2LAfufsf+euFsAxfZEMm6WBPwPam8buZf8yomEi2lnmh3F55rbJB3pOR57IuPGDCEW33ZKon1YAGi9yrgxi85LYvHXLvPzsjPAH0ZkXDPiV2zedrhZ5ylF50i6Z8JOri/TH/ZI2v3anc2/qfvZZV1hZ8Bf1bdD5FxR9ba9a2uFDZJ0RXlc4MsNn0jVRfnbuu5bxyX5y2r1XRvru7b3Z6733/3XXVffXfehUHRFfWhniq7I6U7Yn0xVV4yLuVdyxXgBnLxSRVfImL56DVeM1V0xTjVcIau6YpzMT8Rbn7KuGBdDfTSMNYfbWcKVGMcFQGsP89x18zwlmXDlZMDtUvB8LFyZ8ZbAj4QrU1V+PLEUrlSoeU8P63ePaZTfGiTqD/NHR4qMvztUNaZWR78avTlYWk0lM9i4gFbeMBpmqDnOppfxdAdbqyCsjbVnrlZm3hsEpY5WaYR+AX+9fDOx8YvAAAAAAElFTkSuQmCC",mode:"aspectFill"}),c(V,{class:"gray9 ml10"},{default:t((()=>[f("编辑")])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),c(y,{class:"add_add-btn theme-btn",onClick:a[0]||(a[0]=s=>_.addAddress())},{default:t((()=>[f("新增收货地址")])),_:1})])),_:1})):(Z(),l(y,{key:1},{default:t((()=>[c(y,{class:"none_add"},{default:t((()=>[c(k,{class:"no_add",src:"/h5/assets/no_adress-c62362c8.png",mode:"aspectFill"})])),_:1}),c(y,{class:"no_add_add",onClick:a[1]||(a[1]=s=>_.addAddress())},{default:t((()=>[f("新增收货地址")])),_:1})])),_:1}))])),_:1},8,["data-theme","class"]))}],["__scopeId","data-v-b6efacc9"]]);export{_ as default};
