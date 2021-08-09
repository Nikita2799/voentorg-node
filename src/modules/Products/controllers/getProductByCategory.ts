import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getProductByCategory = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const params: Array<unknown> = ["products", "category", id];

		const result: any = await db.products.getProductCategory(params);

		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
