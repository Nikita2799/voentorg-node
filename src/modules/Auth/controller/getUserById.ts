import express from "express";
import { IDataRegister } from "../type";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";

export const getUserById = (req: express.Request, res: express.Response) => {
	try {
		const { name, email, password, phone } = <IDataRegister>req.body;
		const db_connect = new DatabaseApi();
	} catch (err) {
		console.log(err);
		res.status(500).json([{ err: err }]);
	}
};
