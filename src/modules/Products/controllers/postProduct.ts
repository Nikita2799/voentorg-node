import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";
import { IProduct } from "../type";

export const postProduct = async (req: Request, res: Response) => {
	try {
		const { dataProduct, size } = <any>req.body;
		const db: DatabaseApi = new DatabaseApi();
		console.log(req.body);

		const params: Array<unknown> = [
			"products",
			{
				name: dataProduct.name,
				category: dataProduct.category,
				price: dataProduct.price,
				discont: dataProduct.discont,
				brand: dataProduct.brand,
				description: dataProduct.description,
				size,
			},
		];

		db.products
			.post(params)
			.then((result: any) => {
				res.status(200).json(result.insertId);
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
