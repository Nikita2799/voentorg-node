"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middelwareToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const serverConfig_1 = require("../../config/serverConfig");
const middelwareToken = (req, res, next) => {
    if (req.method === "OPTIONS")
        return next();
    try {
        let token = undefined;
        if (req.headers["x-access-token"]) {
            token = req.headers["x-access-token"].toString();
        }
        if (!token)
            return res.status(401).json({ message: "non auth" });
        const decode = jsonwebtoken_1.default.verify(token, serverConfig_1.config.security_config.token);
        req.userId = decode;
        next();
    }
    catch (err) {
        console.log(err);
        res.status(401).json({ message: "non auth" });
    }
};
exports.middelwareToken = middelwareToken;
