import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

export const getProductDiscont = async (req: Request, res: Response) => {
	try {
		const db: DatabaseApi = new DatabaseApi();
		const params: Array<unknown> = ["products", "discont", 0];
		console.log("sdsd");

		const products = await db.products.getProductDiscount(params);
		let lastId = 0;

		const productSort:any = products.filter((e: any, i: number) => {
			if (lastId === 0) {
				lastId = e.id;
				return true;
			}
			if (lastId === e.id) {
				return false;
			}
			lastId = e.id;
			return true;
		});

		res.status(200).json(productSort);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
