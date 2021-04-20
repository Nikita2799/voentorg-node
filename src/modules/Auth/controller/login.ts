import express from "express";
import { IDataRegister } from "../type";
import { DatabaseApi } from "../../../dataBaseWorker/DatabaseApi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../../../../config/serverConfig";

export const login = (req: express.Request, res: express.Response) => {
	try {
		const { email, password } = <IDataRegister>req.body;
		const db = new DatabaseApi();

		const dataUser = ["users", "email", email];

		db.admin
			.login(dataUser)
			.then(async (responce: any) => {
				const isMatch = await bcrypt.compare(password, responce[0].password);

				if (!isMatch) {
					return res
						.status(422)
						.json([{ message: "Wrong email or password", filed: "password" }]);
				}

				const token = jwt.sign(
					{ userId: responce[0].id! },
					config.security_config.token!,
					{
						expiresIn: "5h",
					},
				);

				res.status(200).json({ token: token });
			})
			.catch((err) => {
				console.log(err);
				return res
					.status(422)
					.json([{ message: "Wrong email or password", filed: "email" }]);
			});
	} catch (err) {
		console.log(err);
		res.status(500).json([{ err: "Server error" }]);
	}
};
