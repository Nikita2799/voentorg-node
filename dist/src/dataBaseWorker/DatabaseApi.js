"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseApi = void 0;
const mysql_1 = __importDefault(require("mysql"));
const serverConfig_1 = require("../../config/serverConfig");
const CategoryApi_1 = require("../API/CategoryApi");
const ProductApi_1 = require("../API/ProductApi");
const AdminApi_1 = require("../API/AdminApi");
const OrdersApi_1 = require("../API/OrdersApi");
const SubCategoryApi_1 = require("../API/SubCategoryApi");
class DatabaseApi {
    constructor() {
        this.connection = mysql_1.default.createPool(serverConfig_1.config.dataBase_config);
        this.admin = new AdminApi_1.AdminApi(this.connection);
        this.products = new ProductApi_1.ProductsApi(this.connection);
        this.category = new CategoryApi_1.CategoryApi(this.connection);
        this.orders = new OrdersApi_1.OrdersApi(this.connection);
        this.subcategory = new SubCategoryApi_1.SubCategoryApi(this.connection);
    }
}
exports.DatabaseApi = DatabaseApi;
