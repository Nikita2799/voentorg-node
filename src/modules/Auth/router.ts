import express from "express";
import { register } from "./controller/register";
import { login } from "./controller/login";
import { getUserById } from "./controller/getUserById";
import { middelwareToken } from "../../middelware/middelwareToken";

export const AuthRouter = (router: express.Router) => {
	router.post("/admin/register", register);
	router.post("/admin/login", login);
	router.get("/me", getUserById);
};
