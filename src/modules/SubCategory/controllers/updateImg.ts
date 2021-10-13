import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const updateImg = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { name } = req.body;

		let src = `${name}`;

		const params: Array<unknown> = ["subcategory", { src }, "id", id];

		await db.subcategory.updateImg(params);

		res.status(200).json({ message: "success" });
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
