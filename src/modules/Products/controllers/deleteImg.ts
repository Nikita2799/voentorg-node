import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

export const deleteImg = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const db: DatabaseApi = new DatabaseApi();
		const params: Array<unknown> = ["img", "imgId", id];

        await db.products.delete(params)


	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
