import translate from "@iamtraction/google-translate";
import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

export const updateCategory = async (req: Request, res: Response) => {
	try {
		const db: DatabaseApi = new DatabaseApi();
		const { name } = req.body;
		const { id } = req.params;
		const word = await translate(name, { from: "ru", to: "en" });

		const params: Array<unknown> = [
			"category",
			{ name: name, engName: word },
			"id",
			id,
		];

		const result = await db.category.update(params);
		console.log(result);

		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
