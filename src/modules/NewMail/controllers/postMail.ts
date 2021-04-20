import axios from "axios";
import { Request, Response } from "express";

export const postMail = async (req: Request, res: Response) => {
	try {
		const { city } = req.body;
		const branchesList = await getBranchesList(city);
		res.status(200).json(branchesList);
	} catch (err) {
		console.log(err);
		res.status(422).json({ message: "Bad request" });
	}
};

const getBranchesList = async (city: string) => {
	const { data } = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
		modelName: "AddressGeneral",
		calledMethod: "getWarehouses",
		apiKey: "58310a4f0c9c6c75c9384b360ed03ff3",
		methodProperties: {
			CityName: city,
		},
	});
	return new Promise((resolve, reject) => {
		const branchesList = data.data.map((el: any) => {
			return el.Description;
		});
		resolve(branchesList);
	});
};
