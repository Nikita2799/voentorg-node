import { Router } from "express";
import { postCategory } from "./controllers/postCategory";
import { getCategory } from "./controllers/getCategory";
import { getCategoryById } from "./controllers/getCategoryById";

export const CategoryRouter = (router: Router) => {
	router.post("/category/post", postCategory);
	router.get("/category/get_all", getCategory);
	router.get("/category/get_one/:id", getCategoryById);
};
