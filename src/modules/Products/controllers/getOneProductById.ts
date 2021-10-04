import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";
import { IProductList } from "../type";

const db: DatabaseApi = new DatabaseApi();

export const getOneProductById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const params = ["products", id];
		let productList: Array<IProductList> = await db.products.getOne(params);

		res.status(200).json(productList[0]);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
