import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getOrderProduct = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const params = ["orderProducts", "orderId", id];

		const result: any = await db.orders.getProduct(params);
		console.log(result);

		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Worng something" });
	}
};
