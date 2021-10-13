import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";


const db: DatabaseApi = new DatabaseApi();

export const postImg = async (req: Request, res: Response) => {
	try {
		const { id, name } = req.body;
console.log(req.body);

		const params: Array<unknown> = ["subcategory", { src: `${name}`},'id',id];

		await db.subcategory.postImage(params);

		res.status(201).json({ message: "success" });
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};