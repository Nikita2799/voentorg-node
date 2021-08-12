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
exports.postProduct = void 0;
const DatabaseApi_1 = require("../../../dataBaseWorker/DatabaseApi");
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, category, price, discont, brand, description } = (req.body);
        const db = new DatabaseApi_1.DatabaseApi();
        console.log(req.body);
        const params = [
            "products",
            {
                name: name,
                category: category,
                price: price,
                discont: discont,
                brand: brand,
                description: description,
            },
        ];
        db.products
            .post(params)
            .then((result) => {
            res.status(200).json(result.insertId);
        })
            .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "server error" });
        });
    }
    catch (err) {
        console.log(err);
        res.status(422).json({ message: "Bad request" });
    }
});
exports.postProduct = postProduct;
