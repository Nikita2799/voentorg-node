"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRouter = void 0;
const getOrders_1 = require("./controllers/getOrders");
const postOrders_1 = require("./controllers/postOrders");
const updateStatus_1 = require("./controllers/updateStatus");
const deleteOrder_1 = require("./controllers/deleteOrder");
const getOrderProduct_1 = require("./controllers/getOrderProduct");
const getCurrentOrder_1 = require("./controllers/getCurrentOrder");
const getOrderId_1 = require("./controllers/getOrderId");
const checkPaymentStatus_1 = require("./controllers/checkPaymentStatus");
const OrdersRouter = (router) => {
    router.post("/order/post", postOrders_1.postOrders);
    router.post("/order/check", checkPaymentStatus_1.checkPaymentStatus);
    router.get("/order/get_orders/:status", getOrders_1.getOrders);
    router.get("/order/get_order_product/:id", getOrderProduct_1.getOrderProduct);
    router.get("/order/get_current_order/:id", getCurrentOrder_1.getCurrentOrder);
    router.get("/order/get_order_id", getOrderId_1.getOrderId);
    router.put("/order/status/:id", updateStatus_1.updateStatus);
    router.delete("/order/delete/:id", deleteOrder_1.deleteOrder);
};
exports.OrdersRouter = OrdersRouter;