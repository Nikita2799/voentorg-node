import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const updateProduct = async (req: Request, res: Response) => {
	try {
		const { product } = req.body;
		const { id } = req.params;

		const params: Array<unknown> = ["products", req.body, "id", id];

		await db.products.update(params);

		res.status(200).json({ message: "product update" });
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
