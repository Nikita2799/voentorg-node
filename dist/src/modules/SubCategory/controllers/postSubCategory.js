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
exports.postSubCategory = void 0;
const DatabaseApi_1 = require("../../../dataBaseWorker/DatabaseApi");
const db = new DatabaseApi_1.DatabaseApi();
const postSubCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, idCategory } = req.body;
        console.log(req.body);
        const params = [
            "subcategory",
            {
                name: name,
                categoryId: idCategory,
            },
        ];
        yield db.subcategory.post(params);
        res.status(201).json({ message: "success" });
    }
    catch (err) {
        console.log(err);
        res.status(422).json({ message: "Bad request" });
    }
});
exports.postSubCategory = postSubCategory;
