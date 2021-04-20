import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";
import { IOrder } from "../type";

const db: DatabaseApi = new DatabaseApi();

export const postOrders = async (req: Request, res: Response) => {
	try {
		const { typePost, city, phoneClient, typePay, products, branchesNumber } = <
			IOrder
		>req.body;

		const paramsOrder = [
			"orders",
			{ typePost, city, phoneClient, typePay, branchesNumber },
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
