import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

export const updateProduct = async (req: Request, res: Response) => {
	try {
		const data = req.body;
		const { id } = req.params;

		const db: DatabaseApi = new DatabaseApi();
		const params: Array<unknown> = ["products", data, "id", id];

		db.products
			.update(params)
			.then((result: any) => {
				res.status(200).json({ message: "product update" });
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
