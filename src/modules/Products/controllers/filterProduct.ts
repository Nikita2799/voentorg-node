import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

export const filterProduct = async (req: Request, res: Response) => {
	try {
		const db: DatabaseApi = new DatabaseApi();
		const params: Array<unknown> = ["products"];

		const productList = await db.products.filter(params);

		res.status(200).json(productList);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
