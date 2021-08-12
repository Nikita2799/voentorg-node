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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderId = void 0;
const DatabaseApi_1 = require("../../../dataBaseWorker/DatabaseApi");
const db = new DatabaseApi_1.DatabaseApi();
const getOrderId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = ["orders"];
        const result = yield db.orders.getOrderId(params);
        res.status(200).json(result[0].orderId + 1);
    }
    catch (err) {
        console.log(err);
        res.status(422).json({ message: "Worng something" });
    }
});
exports.getOrderId = getOrderId;
