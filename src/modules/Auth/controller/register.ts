import express from "express";
import { IDataRegister } from "../type";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";
import jwt from "jsonwebtoken";
import { config } from "../../../../config/serverConfig";
import bcrypt from "bcrypt";

export const register = async (req: express.Request, res: express.Response) => {
	try {
		const { name, email, password, phone } = <IDataRegister>req.body;
		const hashPassword = await bcrypt.hash(password, 10);
		console.log(hashPassword);

		const db = new DatabaseApi();
		const dataUser = [
			"users",
			{ name: name, email: email, password: hashPassword, phone: phone },
		];
		const data: any = await db.admin.create(dataUser);
		const token = await createToken(data.insertid);

		res.status(201).json({ message: "user create" });
	} catch (err) {
		if (err == 1062) res.status(422).json({ err: "duplicate name" });
		console.log(err);

		res.status(500).json([{ err: "Server Error" }]);
	}
};

async function createToken(userId: any) {
	return new Promise((resolve, reject) => {
		const token = jwt.sign({ userId: userId! }, config.security_config.token!, {
			expiresIn: "5h",
		});
		if (token) resolve(token);

		reject(new Error("Worng create token"));
	});
}
