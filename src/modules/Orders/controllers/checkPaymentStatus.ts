import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const checkPaymentStatus = async (req: Request, res: Response) => {
	try {
		console.log(req.body);
		res.status(200).json({ message: "ok" });
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Worng something" });
	}
};
