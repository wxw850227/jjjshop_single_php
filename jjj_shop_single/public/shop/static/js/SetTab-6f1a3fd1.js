import{u as a,w as e,f as t,o as s}from"./element-plus-68e4b1c7.js";import{a as i,M as l,P as o,S as n,H as c,b as r}from"./Setlink-f9e4d770.js";import{_ as d}from"./Article-6004f402.js";import{_ as m}from"./index-d5abae2c.js";import{o as p,T as v,S as u,P as g,Y as D,a as f,c as h,X as b,W as y}from"./@vue-76da2f05.js";const k={components:{Pages:i,Marketing:l,Product:o,Article:d,SmallProgram:n,H5:c,DiyPage:r},data:()=>({dialogVisible:!0,activeData:null,activeName:"pages"}),props:["is_linkset"],created(){this.dialogVisible=this.is_linkset},methods:{dialogFormVisible(a){a?(-1!=this.activeData.url.indexOf("giftpackage")&&(this.activeData.name="礼包购-"+this.activeData.name),-1!=this.activeData.url.indexOf("invite")&&(this.activeData.name="邀请有礼-"+this.activeData.name),this.$emit("closeDialog",this.activeData)):this.$emit("closeDialog",null)},activeDataFunc(a){this.activeData=a}}},_={slot:"footer",class:"dialog-footer d-b-c"},C={class:"flex-1"},V={key:0,class:"d-s-s d-c tl"},x={class:"text-ellipsis setlink-set-link"},F=f("span",null,"当前链接：",-1),N={class:"gray9"},P=f("span",{class:"p-0-10 gray"},"/",-1),j={class:"blue"},S={class:"text-ellipsis gray",style:{"font-size":"10px"}},A={key:1,class:"tl"},z={class:"setlink-footer-btn"};const w=m(k,[["render",function(l,o,n,c,m,k){const w=i,H=a,M=d,O=r,$=e,I=t,K=s;return p(),v(K,{title:"超链接设置","append-to-body":"",visible:m.dialogVisible,onClose:k.dialogFormVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"800px"},{default:u((()=>[g($,{type:"border-card",modelValue:m.activeName,"onUpdate:modelValue":o[0]||(o[0]=a=>m.activeName=a)},{default:u((()=>[g(H,{label:"页面",name:"pages"},{default:u((()=>["pages"==m.activeName?(p(),v(w,{key:0,onChangeData:k.activeDataFunc},null,8,["onChangeData"])):D("",!0)])),_:1}),g(H,{label:"文章",name:"Article"},{default:u((()=>["Article"==m.activeName?(p(),v(M,{key:0,onChangeData:k.activeDataFunc},null,8,["onChangeData"])):D("",!0)])),_:1}),g(H,{label:"自定义",name:"diypage"},{default:u((()=>["diypage"==m.activeName?(p(),v(O,{key:0,onChangeData:k.activeDataFunc},null,8,["onChangeData"])):D("",!0)])),_:1})])),_:1},8,["modelValue"]),f("div",_,[f("div",C,[null!=m.activeData?(p(),h("div",V,[f("p",x,[F,f("span",N,b(m.activeData.type),1),P,f("span",j,b(m.activeData.name),1)]),f("p",S,b(m.activeData.url),1)])):(p(),h("div",A," 暂无 "))]),f("div",z,[g(I,{size:"small",onClick:o[1]||(o[1]=a=>k.dialogFormVisible(!1))},{default:u((()=>[y("取 消")])),_:1}),g(I,{size:"small",type:"primary",onClick:o[2]||(o[2]=a=>k.dialogFormVisible(!0))},{default:u((()=>[y("确 定")])),_:1})])])])),_:1},8,["visible","onClose"])}]]);export{w as S};
