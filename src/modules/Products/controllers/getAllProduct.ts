import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

export const getAllProduct = async (req: Request, res: Response) => {
	try {
		const db: DatabaseApi = new DatabaseApi();
		const params: Array<unknown> = ["products"];

		const result: any = await db.products.getAll(params);
		let lastId = 0;

		const productSort = result.filter((e: any, i: number) => {
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

		res.status(200).json({ data: productSort });
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
