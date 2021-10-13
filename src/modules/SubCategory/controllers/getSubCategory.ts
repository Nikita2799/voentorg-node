import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getSubCategory = async (req: Request, res: Response) => {
	try {
		//const { name, idCategory } = req.body;
		const params: Array<unknown> = ["subcategory"];

		const result = await db.subcategory.getAll(params);
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
