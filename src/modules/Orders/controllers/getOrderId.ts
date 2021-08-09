import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getOrderId = async (req: Request, res: Response) => {
	try {
		const params = ["orders"];

		const result: any = await db.orders.getOrderId(params);

		res.status(200).json(result[0].orderId + 1);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Worng something" });
	}
};
