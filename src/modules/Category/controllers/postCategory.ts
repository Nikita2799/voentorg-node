import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";
import { ICategory } from "../type";

export const postCategory = async (req: Request, res: Response) => {
	try {
		const { name } = <ICategory>req.body;
		const db: DatabaseApi = new DatabaseApi();
		console.log(req.body);

		const params: Array<unknown> = [
			"category",
			{
				name: name,
			},
		];

		await db.category.post(params);
		res.status(201).json({ message: "success" });
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
