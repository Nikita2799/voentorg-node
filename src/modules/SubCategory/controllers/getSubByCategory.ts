import { Request, Response } from "express";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

const db: DatabaseApi = new DatabaseApi();

export const getSubByCategory = async (req: Request, res: Response) => {
	try {
		const {id} = req.params;
		const cat = ['category',"engName",id]
		const catName = await db.category.getCategoryByName(cat)
		const params: Array<unknown> = ["subcategory","categoryId",catName[0].id];

		const result = await db.subcategory.getByCategory(params);
        console.log(result);
        
		res.status(200).json(result);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};