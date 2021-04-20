import { Router } from "express";
import { getNewOrders } from "./controllers/getNewOrders";
import { postOrders } from "./controllers/postOrders";

export const OrdersRouter = (router: Router) => {
	router.post("/order/post", postOrders);
	router.get("/order/get_new_orders", getNewOrders);
};
