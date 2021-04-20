import express from "express";
import { config } from "./config/serverConfig";

export const startServer = async (app: express.Express) => {
	try {
		app.listen(config.server_config.port, () => {
			console.log(`server started on:${config.server_config.port}`);
		});
	} catch (err) {
		throw err;
	}
};
