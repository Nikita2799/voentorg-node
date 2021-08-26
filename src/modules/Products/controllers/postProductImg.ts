import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";
import { IProduct } from "../type";

const db: DatabaseApi = new DatabaseApi();

export const postProductImg = async (req: Request, res: Response) => {
	try {
		const { id, name } = req.body;
		console.log(id, name);

		const params: Array<unknown> = ["products", { image: `${name}` }, "id", id];

		await db.products.postImage(params);

		res.status(201).json({ message: "success" });
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
