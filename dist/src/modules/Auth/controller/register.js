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
exports.register = void 0;
const DatabaseApi_1 = require("../../../dataBaseWorker/DatabaseApi");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const serverConfig_1 = require("../../../../config/serverConfig");
const bcrypt_1 = __importDefault(require("bcrypt"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, phone } = req.body;
        const hashPassword = yield bcrypt_1.default.hash(password, 10);
        const db = new DatabaseApi_1.DatabaseApi();
        const dataUser = [
            "users",
            { name: name, email: email, password: hashPassword, phone: phone },
        ];
        const data = yield db.admin.create(dataUser);
        const token = yield createToken(data.insertid);
        res.status(201).json({ message: "user create" });
    }
    catch (err) {
        if (err == 1062)
            res.status(422).json({ err: "duplicate name" });
        res.status(500).json([{ err: "Server Error" }]);
    }
});
exports.register = register;
function createToken(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const token = jsonwebtoken_1.default.sign({ userId: userId }, serverConfig_1.config.security_config.token, {
                expiresIn: "5h",
            });
            if (token)
                resolve(token);
            reject(new Error("Worng create token"));
        });
    });
}
