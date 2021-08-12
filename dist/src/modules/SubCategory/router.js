"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryRouter = void 0;
const postSubCategory_1 = require("./controllers/postSubCategory");
const SubCategoryRouter = (router) => {
    router.post("/subcategory/post", postSubCategory_1.postSubCategory);
};
exports.SubCategoryRouter = SubCategoryRouter;
