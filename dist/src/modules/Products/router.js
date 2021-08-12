"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const deleteProduct_1 = require("./controllers/deleteProduct");
const getAllProduct_1 = require("./controllers/getAllProduct");
const getCarrentProduct_1 = require("./controllers/getCarrentProduct");
const postProduct_1 = require("./controllers/postProduct");
const updateProduct_1 = require("./controllers/updateProduct");
const getOneProductById_1 = require("./controllers/getOneProductById");
const postProductImg_1 = require("./controllers/postProductImg");
const getProductDicont_1 = require("./controllers/getProductDicont");
const updateProuductImg_1 = require("./controllers/updateProuductImg");
const getProductByCategory_1 = require("./controllers/getProductByCategory");
const ProductRouter = (router) => {
    router.post("/product/post", postProduct_1.postProduct);
    router.post("/product/get_data_product", getCarrentProduct_1.getCurrentProduct);
    router.post("/product/post_image", postProductImg_1.postProductImg);
    router.get("/product/get_all", getAllProduct_1.getAllProduct);
    router.get("/product/get_product_dis", getProductDicont_1.getProductDiscont);
    router.get("/product/get_one/:id", getOneProductById_1.getOneProductById);
    router.get("/product/get_prod_category/:name", getProductByCategory_1.getProductByCategory);
    router.put("/product/update_image", updateProuductImg_1.updateProductImg);
    router.put("/product/update/:id", updateProduct_1.updateProduct);
    router.delete("/product/delete/:id", deleteProduct_1.deleteProduct);
};
exports.ProductRouter = ProductRouter;
