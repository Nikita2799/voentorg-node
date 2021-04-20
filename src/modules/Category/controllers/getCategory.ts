import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

export const getCategory = async (req: Request, res: Response) => {
	try {
		const db: DatabaseApi = new DatabaseApi();
		const params: Array<unknown> = ["category"];

		const result = await db.category.getAll(params);

		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
