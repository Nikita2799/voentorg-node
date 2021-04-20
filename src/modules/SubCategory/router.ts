import { Router } from "express";
import { postSubCategory } from "./controllers/postSubCategory";

export const SubCategoryRouter = (router: Router) => {
	router.post("/subcategory/post", postSubCategory);
};
