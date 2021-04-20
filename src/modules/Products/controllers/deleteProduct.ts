import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

export const deleteProduct = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const db: DatabaseApi = new DatabaseApi();
		const params: Array<unknown> = ["products", "id", id];

		db.products
			.delete(params)
			.then((result: any) => {
				res.status(200).json({ message: "product deleted!!!" });
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
