import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";
import { IProduct } from "../type";

export const postProductImg = async (req: Request, res: Response) => {
	try {
		const { id, name } = req.body;
		const db: DatabaseApi = new DatabaseApi();
		const params: Array<unknown> = [
			"products",
			{ image: `/img/${name}` },
			"id",
			id,
		];

		const responce = await db.products.postImage(params);

		res.status(201).json({ message: "success" });
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
