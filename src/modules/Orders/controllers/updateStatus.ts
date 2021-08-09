import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const updateStatus = async (req: Request, res: Response) => {
	try {
		const { status } = req.body;
		const { id } = req.params;

		const params = ["orders", { status: status }, "orderId", id];

		const result: any = await db.orders.updateStaus(params);

		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Worng something" });
	}
};
