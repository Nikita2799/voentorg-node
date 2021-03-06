import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getCategoryById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const params = ["category", "id", id];
		let categoryList: Array<unknown> = await db.category.getOneById(params);
		console.log();

		res.status(200).json(categoryList[0]);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
