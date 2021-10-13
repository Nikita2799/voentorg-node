import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const updateSubCategory = async (req: Request, res: Response) => {
	try {
		const { name } = req.body;
		const { id } = req.params;

		const params: Array<unknown> = ["subcategory", {name}, "id", id];

		await db.subcategory.update(params);

		res.status(200).json({ message: "product update" });
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};