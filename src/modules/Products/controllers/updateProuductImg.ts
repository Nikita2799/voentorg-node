import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";
import { IProduct } from "../type";

const db: DatabaseApi = new DatabaseApi();

export const updateProductImg = async (req: Request, res: Response) => {
	try {
		const { id, name } = req.body;
		console.log(name);
		let image = `${name}`;

		const params: Array<unknown> = ["products", { image }, "id", id];

		await db.products.updateImg(params);

		res.status(200).json({ message: "success" });
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
