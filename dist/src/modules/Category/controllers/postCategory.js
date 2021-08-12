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
exports.postCategory = void 0;
const DatabaseApi_1 = require("../../../dataBaseWorker/DatabaseApi");
const google_translate_1 = __importDefault(require("@iamtraction/google-translate"));
const db = new DatabaseApi_1.DatabaseApi();
const postCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const word = yield google_translate_1.default(name, { from: "ru", to: "en" });
        const params = [
            "category",
            {
                name: name,
                engName: word.text,
            },
        ];
        yield db.category.post(params);
        res.status(201).json({ message: "success" });
    }
    catch (err) {
        console.log(err);
        res.status(422).json({ message: "Bad request" });
    }
});
exports.postCategory = postCategory;
