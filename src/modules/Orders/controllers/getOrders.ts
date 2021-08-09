import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getOrders = async (req: Request, res: Response) => {
	try {
		const { status } = req.params;
		const params = ["orders", "status", status];

		const result: any = await db.orders.getNew(params);

		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Worng something" });
	}
};
