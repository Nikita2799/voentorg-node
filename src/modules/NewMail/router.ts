import { Router } from "express";
import { postMail } from "./controllers/postMail";

export const MailRouter = (router: Router) => {
	router.post("/mail", postMail);
};
