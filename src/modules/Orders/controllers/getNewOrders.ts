import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getNewOrders = async (req: Request, res: Response) => {
	try {
		const params = ["orders", "status", 0];

		const result: any = await db.orders.getNew(params);

		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Worng something" });
	}
};
