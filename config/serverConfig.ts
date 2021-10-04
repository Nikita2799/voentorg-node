import dotenv from "dotenv";

dotenv.config();

export const config = {
	server_config: {
		port: process.env.PORT,
		host: process.env.HOST,
	},
	dataBase_config: {
		connectionLimit: 10,
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		database: process.env.DB_NAME,
		password: process.env.DB_PASSWORD,
	},
	security_config: {
		token: process.env.JWT,
	},
	sendpulse_config: {
		user_id: process.env.API_USER_ID,
		secret: process.env.USER_SECRET,
	},
};
