import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";
import translate from '@iamtraction/google-translate';


const db: DatabaseApi = new DatabaseApi();

export const postSubCategory = async (req: Request, res: Response) => {
	try {
		const { name, categoryId } = req.body;
		const word = await translate(name, { from: "ru", to: "en" });
		console.log(req.body);

		const params: Array<unknown> = [
			"subcategory",
			{
				name: name,
				categoryId: categoryId,
				src: '',
				engName: word
			},
		];

		const result:any = await db.subcategory.post(params);
		res.status(201).json({ message: result.insertId });
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
