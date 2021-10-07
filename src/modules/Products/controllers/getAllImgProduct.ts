import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getAllImgProduct = async (req: Request, res: Response) => {
	try {
		const { imgId } = req.body;
		const params: Array<unknown> = ["img", "productId", imgId];

		const result: any = await db.products.getImgProduct(params);
        console.log(result);
        
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};
