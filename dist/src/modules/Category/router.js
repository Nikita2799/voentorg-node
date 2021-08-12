"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRouter = void 0;
const postCategory_1 = require("./controllers/postCategory");
const getCategory_1 = require("./controllers/getCategory");
const getCategoryById_1 = require("./controllers/getCategoryById");
const CategoryRouter = (router) => {
    router.post("/category/post", postCategory_1.postCategory);
    router.get("/category/get_all", getCategory_1.getCategory);
    router.get("/category/get_one/:id", getCategoryById_1.getCategoryById);
};
exports.CategoryRouter = CategoryRouter;
