import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";
import { IProductList } from "../type";

const db: DatabaseApi = new DatabaseApi();

export const getCurrentProduct = async (req: Request, res: Response) => {
	try {
		const data = req.body;
		let productList: Array<IProductList> = await getProductList(data);

		res.status(200).json(productList);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};

async function getProductList(
	data: Array<number>,
): Promise<Array<IProductList>> {
	let productList: Array<IProductList> = [];

	for (let i = 0; i < data.length; i++) {
		const params: Array<unknown> = ["products", "id"];
		params.push(data[i]);

		const item: Array<IProductList> = await db.products.getCurrent(params);
		productList.push(item[0]);
	}

	return productList;
}
