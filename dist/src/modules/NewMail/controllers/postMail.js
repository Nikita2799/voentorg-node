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
exports.postMail = void 0;
const axios_1 = __importDefault(require("axios"));
const postMail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { city } = req.body;
        const branchesList = yield getBranchesList(city);
        res.status(200).json(branchesList);
    }
    catch (err) {
        console.log(err);
        res.status(422).json({ message: "Bad request" });
    }
});
exports.postMail = postMail;
const getBranchesList = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios_1.default.post("https://api.novaposhta.ua/v2.0/json/", {
        modelName: "AddressGeneral",
        calledMethod: "getWarehouses",
        apiKey: "58310a4f0c9c6c75c9384b360ed03ff3",
        methodProperties: {
            CityName: city,
        },
    });
    return new Promise((resolve, reject) => {
        const branchesList = data.data.map((el) => {
            return el.Description;
        });
        resolve(branchesList);
    });
});
