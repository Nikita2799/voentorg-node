import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

export const getAllProduct = async (req: Request, res: Response) => {
	try {
		const db: DatabaseApi = new DatabaseApi();
		const params: Array<unknown> = ["products"];

		db.products
			.getAll(params)
			.then((result: any) => {
				res.status(200).json({ data: result });
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json({ message: "server error" });
			});
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
