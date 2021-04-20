import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const postSubCategory = async (req: Request, res: Response) => {
	try {
		const { name, idCategory } = req.body;

		console.log(req.body);

		const params: Array<unknown> = [
			"subcategory",
			{
				name: name,
				categoryId: idCategory,
			},
		];

		await db.subcategory.post(params);
		res.status(201).json({ message: "success" });
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
