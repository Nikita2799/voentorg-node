import { Router } from "express";
import { deleteSubCategory } from "./controllers/deleteSubCategory";
import { getSubByCategory } from "./controllers/getSubByCategory";
import { getSubCategory } from "./controllers/getSubCategory";
import { getSubCategoryById } from "./controllers/getSubCategoryById";
import { postImg } from "./controllers/postImg";
import { postSubCategory } from "./controllers/postSubCategory";
import { updateImg } from "./controllers/updateImg";
import { updateSubCategory } from "./controllers/updateSubCategory";

export const SubCategoryRouter = (router: Router) => {
	router.post("/subcategory/post", postSubCategory);
	router.post("/subcategory/post_img", postImg);
	router.get("/subcategory/get", getSubCategory);
	router.get("/subcategory/get_by_category/:id", getSubByCategory);
	router.get("/subcategory/get_category_by_id/:id", getSubCategoryById);
	router.delete("/subcategory/delete/:id",deleteSubCategory);
	router.put("/subcategory/update/:id", updateSubCategory);
	router.put("/subcategory/update_img/:id",updateImg);
};
