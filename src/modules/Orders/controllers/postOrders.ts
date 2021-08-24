import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";
import { IOrder } from "../type";

const db: DatabaseApi = new DatabaseApi();

export const postOrders = async (req: Request, res: Response) => {
	try {
		const {
			typePost,
			city,
			address,
			phoneClient,
			typePay,
			products,
			postNumber,
			clientName,
			orderNumber,
		} = <IOrder>req.body;

		let validPhone = phoneClient.trim().replace(/[^\d]+/g, "");

		//let number = Math.random();
		//number.toString(36); // '0.xtis06h6'
		//let orderNumber = number.toString(36).substr(2, 9); // 'xtis06h6'

		const paramsOrder = [
			"orders",
			{
				orderNumber,
				clientName,
				typePost,
				city,
				address,
				phoneClient: validPhone,
				typePay,
				postNumber,
				status: 0,
			},
		];

		const resultOrder: any = await db.orders.postOrder(paramsOrder);
		console.log(resultOrder);

		for (let i = 0; i < products.length; i++) {
			const paramsProduct = [
				"orderProducts",
				{
					orderId: resultOrder.insertId,
					productId: products[i].id,
					amount: products[i].amount,
					size: products[i].size,
				},
			];

			await db.orders.postProduct(paramsProduct);
		}

		res.status(201).json({ message: "success" });
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Worng something" });
	}
};
