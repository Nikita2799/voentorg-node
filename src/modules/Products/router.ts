import { Router } from "express";
import { deleteProduct } from "./controllers/deleteProduct";
import { getAllProduct } from "./controllers/getAllProduct";
import { getCurrentProduct } from "./controllers/getCarrentProduct";
import { postProduct } from "./controllers/postProduct";
import { updateProduct } from "./controllers/updateProduct";
import { getOneProductById } from "./controllers/getOneProductById";
import { postProductImg } from "./controllers/postProductImg";

export const ProductRouter = (router: Router) => {
	router.post("/product/post", postProduct);
	router.post("/product/get_data_product", getCurrentProduct);
	router.post("/product/post_image", postProductImg);
	router.get("/product/get_all", getAllProduct);
	router.get("/product/get_one/:id", getOneProductById);
	router.put("/product/update/:id", updateProduct);
	router.delete("/product/delete/:id", deleteProduct);
};
