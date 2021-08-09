import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getProductByCategory = async (req: Request, res: Response) => {
	try {
		const { name } = req.params;
		const paramsCategory: Array<unknown> = ["category", "engName", name];
		const category: any = await db.category.getCategoryByName(paramsCategory);

		const result: any = await db.products.getProductCategory([
			"products",
			"category",
			category[0].id,
		]);

		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		if (err === 0) return res.status(422).json({ message: "Empty product" });
		res.status(422).json({ message: "Bad request" });
	}
};
