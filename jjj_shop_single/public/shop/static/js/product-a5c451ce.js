import{r as t}from"./index-d5abae2c.js";let o={catList:(o,p)=>t._post("/shop/product.category/index",o,p),catAdd:(o,p)=>t._post("/shop/product.category/add",o,p),catDel:(o,p)=>t._post("/shop/product.category/delete",o,p),catEdit:(o,p)=>t._post("/shop/product.category/edit",o,p),productList:(o,p)=>t._post("/shop/product.product/index",o,p),chooseLists:(o,p)=>t._post("/shop/data.product/lists",o,p),chooseSpec:(o,p)=>t._post("/shop/data.product/spec",o,p),addProduct:(o,p)=>t._post("/shop/product.product/add",o,p),getBaseData:(o,p)=>t._get("/shop/product.product/add",o,p),delProduct:(o,p)=>t._post("/shop/product.product/delete",o,p),getEditData:(o,p)=>t._get("/shop/product.product/edit",o,p),editProduct:(o,p)=>t._post("/shop/product.product/edit",o,p),addSpec:(o,p)=>t._post("/shop/product.spec/addSpec",o,p),addSpecValue:(o,p)=>t._post("/shop/product.spec/addSpecValue",o,p),getList:(o,p)=>t._post("/shop/data.product/lists",o,p),getActiveProductList:(o,p)=>t._post("/shop/plus.fans.product/lists",o,p),getCommentList:(o,p)=>t._post("/shop/product.comment/index",o,p),getComment:(o,p)=>t._post("/shop/product.comment/detail",o,p),editComment:(o,p)=>t._post("/shop/product.comment/edit",o,p),delComment:(o,p)=>t._post("/shop/product.comment/delete",o,p),cateImage:(o,p)=>t._post("/shop/product.category/image",o,p),changeStatus:(o,p)=>t._post("/shop/product.product/state",o,p)};export{o as P};
