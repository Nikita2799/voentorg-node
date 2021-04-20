import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";
import { IProduct } from "../type";

export const postProduct = async (req: Request, res: Response) => {
	try {
		const { name, category, price, discont, brand, desc } = <IProduct>req.body;
		const db: DatabaseApi = new DatabaseApi();
		console.log(req.body);

		const params: Array<unknown> = [
			"products",
			{
				name: name,
				category: category,
				price: price,
				discont: discont,
				brand: brand,
				description: desc,
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
