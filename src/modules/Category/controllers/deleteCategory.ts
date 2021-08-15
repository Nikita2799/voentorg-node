import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

export const deleteCategory = async (req: Request, res: Response) => {
	try {
		const db: DatabaseApi = new DatabaseApi();
		const { id } = req.params;
		const params: Array<unknown> = ["category", "id", id];

		const result = await db.category.delete(params);
		console.log(result);

		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
