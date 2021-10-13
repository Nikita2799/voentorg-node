import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getSubCategoryById = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const params = ["subcategory", "id", id];
		let categoryList: Array<unknown> = await db.category.getOneById(params);

		res.status(200).json(categoryList[0]);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};