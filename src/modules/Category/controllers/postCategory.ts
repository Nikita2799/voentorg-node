import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";
import { ICategory } from "../type";
import translate from "@iamtraction/google-translate";

const db: DatabaseApi = new DatabaseApi();

export const postCategory = async (req: Request, res: Response) => {
	try {
		const { name } = <ICategory>req.body;

		const word = await translate(name, { from: "ru", to: "en" });
		console.log(word);

		const params: Array<unknown> = [
			"category",
			{
				name: name,
				engName: word.text,
			},
		];

		await db.category.post(params);
		res.status(201).json({ message: "success" });
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
