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
exports.OrdersApi = void 0;
class OrdersApi {
    constructor(connection) {
        this.connection = connection;
    }
    getNew(params) {
        return __awaiter(this, void 0, void 0, function* () {
            //params: Array<unknown>
            const sqlQuery = "SELECT * FROM ?? WHERE ??=?";
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    resolve(result);
                });
            });
            return responce;
        });
    }
    postOrder(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlQuery = "INSERT INTO ?? SET? ";
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    resolve(result);
                });
            });
            return responce;
        });
    }
    postProduct(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlQuery = "INSERT INTO ?? SET?";
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    resolve(result);
                });
            });
            return responce;
        });
    }
    getOrderProduct(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlQuery = "SELECT * FROM orders o INNER JOIN orderProducts op on op.orderId=? INNER JOIN products p on p.id=op.productId WHERE o.orderId=?";
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    resolve(result);
                });
            });
            return responce;
        });
    }
    getOrderId(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlQuery = "SELECT orderId FROM ?? ORDER BY orderId DESC LIMIT 1";
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    resolve(result);
                });
            });
            return responce;
        });
    }
    updateStaus(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlQuery = "UPDATE ?? SET ? WHERE ??=?";
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    resolve(result);
                });
            });
            return responce;
        });
    }
    delete(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlQuery = "DELETE FROM ?? WHERE ??=?";
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    resolve(result);
                });
            });
            return responce;
        });
    }
    getProduct(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlQuery = "SELECT * FROM ?? INNER JOIN products ON orderProducts.productId=products.id WHERE ??=? ";
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    resolve(result);
                });
            });
            return responce;
        });
    }
}
exports.OrdersApi = OrdersApi;
