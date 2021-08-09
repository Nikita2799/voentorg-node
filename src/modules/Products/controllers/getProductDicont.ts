import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

export const getProductDiscont = async (req: Request, res: Response) => {
	try {
		const db: DatabaseApi = new DatabaseApi();
		const params: Array<unknown> = ["products", "discont", 0];
		console.log("sdsd");

		const products = await db.products.getProductDiscount(params);

		res.status(200).json(products);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
