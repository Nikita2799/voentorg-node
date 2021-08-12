"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const register_1 = require("./controller/register");
const login_1 = require("./controller/login");
const getUserById_1 = require("./controller/getUserById");
const AuthRouter = (router) => {
    router.post("/admin/register", register_1.register);
    router.post("/admin/login", login_1.login);
    router.get("/me", getUserById_1.getUserById);
};
exports.AuthRouter = AuthRouter;
