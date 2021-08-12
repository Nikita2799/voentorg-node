"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const DatabaseApi_1 = require("../../../dataBaseWorker/DatabaseApi");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const serverConfig_1 = require("../../../../config/serverConfig");
const login = (req, res) => {
    try {
        const { email, password } = req.body;
        const db = new DatabaseApi_1.DatabaseApi();
        const dataUser = ["users", "email", email];
        db.admin
            .login(dataUser)
            .then((responce) => __awaiter(void 0, void 0, void 0, function* () {
            const isMatch = yield bcrypt_1.default.compare(password, responce[0].password);
            if (!isMatch) {
                return res
                    .status(422)
                    .json([{ message: "Wrong email or password", filed: "password" }]);
            }
            const token = jsonwebtoken_1.default.sign({ userId: responce[0].id }, serverConfig_1.config.security_config.token, {
                expiresIn: "5h",
            });
            res.status(200).json({ token: token });
        }))
            .catch((err) => {
            console.log(err);
            return res
                .status(422)
                .json([{ message: "Wrong email or password", filed: "email" }]);
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json([{ err: "Server error" }]);
    }
};
exports.login = login;
