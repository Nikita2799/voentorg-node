import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";
import sendpulse from "sendpulse-api";
import { config } from "../../../../config/serverConfig";
import { getAllProduct } from "../../Products/controllers/getAllProduct";
import { IAccesToken } from "../../Products/type";
import moment from "moment";

export const smsSend = async (req: Request, res: Response) => {
	try {
		const { phone,message } = req.body;

		await initSendpulse(phone, message);

		res.status(200).json("send");
	} catch (err) {
		console.log(err, "main-err");
		res.status(422).json({ message: "Wrong something" });
	}
};

const initSendpulse = async (phone: string, message: string) => {
	const tokenAccess = await getAccessToken();
	//console.log(tokenAccess?.access_token);
	const date = moment().add(1,"seconds").format("Y-M-D h:mm:ss");
	console.log(date);

	sendpulse.init(
		config.sendpulse_config.user_id,
		config.sendpulse_config.secret,
		`${tokenAccess?.token_type} ${tokenAccess?.access_token}`,
		(token: any) => {
			const route  = {
				"UA":"sim_ua"
			}
			const phoneArr = [phone]
			console.log(phoneArr);
			console.log(message);
			
			
			const answer = function (data: any) {
				console.log(data, "data");
			};

			sendpulse.smsSend(answer, "test", phoneArr, message ,date, "test", route);
		},
	);
};

const getAccessToken = async () => {
	try {
		const token: AxiosResponse<IAccesToken> = await axios({
			method: "POST",
			url: "https://login.sendpulse.com/settings/#api", // https://api.sendpulse.com/oauth/access_token
			data: {
				grant_type: "client_credentials",
				client_id: config.sendpulse_config.user_id,
				client_secret: config.sendpulse_config.secret,
			},
		});

		return token.data;
	} catch (err) {
		console.log(err);
	}
};
