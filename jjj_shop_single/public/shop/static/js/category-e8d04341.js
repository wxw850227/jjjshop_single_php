import{K as e,f as t,o as a}from"./element-plus-68e4b1c7.js";import{P as l}from"./product-03ba16fa.js";import{_ as i}from"./index-c1104e7d.js";import{o as s,T as o,S as n,P as r,W as d,a as c}from"./@vue-76da2f05.js";const p={class:"product-content"};const h=i({data:()=>({loading:!0,formInline:{},multipleSelection:[],formLabelWidth:"120px",dialogVisible:!1,type:"error",params:null,options:[],listData:[]}),props:["is_category","category_list"],watch:{is_category:function(e,t){e!=t&&(e?(this.dialogVisible=e,this.type="error",this.params=null,this.getData()):this.dialogVisible=e)},category_list:function(e,t){e!=t&&e&&(this.listData=[],e.first.length>0&&e.first.forEach(((e,t)=>{this.listData.push([e.category_id])})),e.second.length>0&&e.second.forEach(((e,t)=>{this.listData.push([e.parent_id,e.category_id])})))}},created(){},methods:{selectableFunc:e=>"boolean"!=typeof e.noChoose||e.noChoose,handleCurrentChange(e){this.curPage=e,this.getData()},handleSizeChange(e){this.curPage=1,this.pageSize=e,this.getData()},getData(){let e=this;l.catList({},!0).then((t=>{e.options=t.data.list})).catch((e=>{}))},SingleFunc(e){this.multipleSelection=[e],this.addClerk()},addClerk(){let e={first:[],second:[]};this.$refs.nodes.getCheckedNodes(!1,!1).forEach(((t,a)=>{null==t.parent?e.first.push({category_id:t.value,name:t.label}):e.second.push({category_id:t.value,name:t.label,parent:t.parent.label,parent_id:t.parent.value})})),this.$emit("close",e)},dialogFormVisible(){this.$emit("closeDialog",{type:this.type,openDialog:!1,params:this.params})},tableCurrentChange(e){this.multipleSelection=e}}},[["render",function(l,i,h,u,m,g){const f=e,b=t,y=a;return s(),o(y,{title:"选择分类",modelValue:m.dialogVisible,"onUpdate:modelValue":i[2]||(i[2]=e=>m.dialogVisible=e),onClose:g.dialogFormVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},{footer:n((()=>[r(b,{size:"small",onClick:i[1]||(i[1]=e=>m.dialogVisible=!1)},{default:n((()=>[d("取 消")])),_:1}),r(b,{size:"small",type:"primary",onClick:g.addClerk},{default:n((()=>[d("确 定")])),_:1},8,["onClick"])])),default:n((()=>[c("div",p,[r(f,{ref:"nodes",options:m.options,modelValue:m.listData,"onUpdate:modelValue":i[0]||(i[0]=e=>m.listData=e),props:{multiple:!0,value:"category_id",label:"name",children:"child"},"show-all-levels":!1},null,8,["options","modelValue"])])])),_:1},8,["modelValue","onClose"])}]]);export{h as _};
