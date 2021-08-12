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
exports.postOrders = void 0;
const DatabaseApi_1 = require("../../../dataBaseWorker/DatabaseApi");
const db = new DatabaseApi_1.DatabaseApi();
const postOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { typePost, city, address, phoneClient, typePay, products, postNumber, clientName, } = req.body;
        let validPhone = phoneClient.trim().replace(/[^\d]+/g, "");
        console.log(req.body);
        let number = Math.random();
        number.toString(36); // '0.xtis06h6'
        let orderNumber = number.toString(36).substr(2, 9); // 'xtis06h6'
        const paramsOrder = [
            "orders",
            {
                orderNumber,
                clientName,
                typePost,
                city,
                address,
                phoneClient: validPhone,
                typePay,
                postNumber,
                status: 0
            },
        ];
        const resultOrder = yield db.orders.postOrder(paramsOrder);
        console.log(resultOrder);
        for (let i = 0; i < products.length; i++) {
            const paramsProduct = [
                "orderProducts",
                {
                    orderId: resultOrder.insertId,
                    productId: products[i].id,
                    amount: products[i].amount,
                    size: products[i].size,
                },
            ];
            yield db.orders.postProduct(paramsProduct);
        }
        res.status(201).json({ message: "success" });
    }
    catch (err) {
        console.log(err);
        res.status(422).json({ message: "Worng something" });
    }
});
exports.postOrders = postOrders;
