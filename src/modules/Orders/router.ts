import { Router } from "express";
import { getOrders } from "./controllers/getOrders";
import { postOrders } from "./controllers/postOrders";
import { updateStatus } from "./controllers/updateStatus";
import { deleteOrder } from "./controllers/deleteOrder";
import { getOrderProduct } from "./controllers/getOrderProduct";
import { getCurrentOrder } from "./controllers/getCurrentOrder";
import { getOrderId } from "./controllers/getOrderId";
import { checkPaymentStatus } from "./controllers/checkPaymentStatus";
import { smsSend } from "./controllers/sendSms";

export const OrdersRouter = (router: Router) => {
	router.post("/order/post", postOrders);
	router.post("/order/check", checkPaymentStatus);
	router.post("/order/sms", smsSend);
	router.get("/order/get_orders/:status", getOrders);
	router.get("/order/get_order_product/:id", getOrderProduct);
	router.get("/order/get_current_order/:id", getCurrentOrder);
	router.get("/order/get_order_id", getOrderId);
	router.put("/order/status/:id", updateStatus);
	router.delete("/order/delete/:id", deleteOrder);
};
