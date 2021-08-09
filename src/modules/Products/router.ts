import { Router } from "express";
import { deleteProduct } from "./controllers/deleteProduct";
import { getAllProduct } from "./controllers/getAllProduct";
import { getCurrentProduct } from "./controllers/getCarrentProduct";
import { postProduct } from "./controllers/postProduct";
import { updateProduct } from "./controllers/updateProduct";
import { getOneProductById } from "./controllers/getOneProductById";
import { postProductImg } from "./controllers/postProductImg";
import { getProductDiscont } from "./controllers/getProductDicont";
import { updateProductImg } from "./controllers/updateProuductImg";

export const ProductRouter = (router: Router) => {
	router.post("/product/post", postProduct);
	router.post("/product/get_data_product", getCurrentProduct);
	router.post("/product/post_image", postProductImg);
	router.get("/product/get_all", getAllProduct);
	router.get("/product/get_product_dis", getProductDiscont);
	router.get("/product/get_one/:id", getOneProductById);
	router.put("/product/update_image", updateProductImg);
	router.put("/product/update/:id", updateProduct);
	router.delete("/product/delete/:id", deleteProduct);
};
