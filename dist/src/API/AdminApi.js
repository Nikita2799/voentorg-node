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
exports.AdminApi = void 0;
class AdminApi {
    constructor(connection) {
        this.connection = connection;
    }
    create(dataUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let sqlQuery = "INSERT INTO ?? SET? ";
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, dataUser, (err, result) => {
                    console.log(err);
                    if (err)
                        reject(err.errno);
                    resolve(result);
                });
            });
            return responce;
        });
    }
    login(dataUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let sqlQuery = "SELECT * FROM ?? WHERE ??=?";
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, dataUser, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    console.log(err);
                    console.log(result);
                    resolve(result);
                });
            });
            return responce;
        });
    }
}
exports.AdminApi = AdminApi;
