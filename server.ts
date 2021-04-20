import express from "express";
import { startServer } from "./startServer";
import router from "./src/mainRouter/mainRouter";
import { multerApi } from "./src/multer/multer";

const app = express();

declare global {
	namespace Express {
		interface Request {
			userId: any;
		}
	}
}

app.use(express.static(__dirname));
app.use(multerApi);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

startServer(app);
