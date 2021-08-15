import { Router } from "express";
import { postCategory } from "./controllers/postCategory";
import { getCategory } from "./controllers/getCategory";
import { getCategoryById } from "./controllers/getCategoryById";
import { deleteProduct } from "../Products/controllers/deleteProduct";
import { updateProduct } from "../Products/controllers/updateProduct";

export const CategoryRouter = (router: Router) => {
	router.post("/category/post", postCategory);
	router.get("/category/get_all", getCategory);
	router.get("/category/get_one/:id", getCategoryById);
	router.delete("/category/delete/:id", deleteProduct);
	router.put("/category/update/:id", updateProduct);
};
