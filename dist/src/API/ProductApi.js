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
exports.ProductsApi = void 0;
class ProductsApi {
    constructor(connection) {
        this.connection = connection;
    }
    post(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let sqlQuery = "INSERT INTO ?? SET? ";
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
    getAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let sqlQuery = "SELECT * FROM ??";
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    console.log(err);
                    resolve(result);
                });
            });
            return responce;
        });
    }
    getOne(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let sqlQuery = "SELECT * FROM ?? WHERE ??=?";
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    console.log(err);
                    resolve(result);
                });
            });
            return responce;
        });
    }
    getProductCategory(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let sqlQuery = "SELECT * FROM ?? WHERE ??=?";
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    if (result.length === 0)
                        reject(0);
                    console.log(err);
                    resolve(result);
                });
            });
            return responce;
        });
    }
    update(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let sqlQuery = "UPDATE ?? SET? WHERE ??=?";
            console.log(params);
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    console.log(err);
                    resolve(result);
                });
            });
            return responce;
        });
    }
    updateImg(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let sqlQuery = "UPDATE ?? SET? WHERE ??=?";
            console.log(params);
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    console.log(err);
                    resolve(result);
                });
            });
            return responce;
        });
    }
    delete(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let sqlQuery = "DELETE FROM ?? WHERE ??=?";
            let responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    console.log(err);
                    resolve(result);
                });
            });
            return responce;
        });
    }
    getCurrent(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlQuery = "SELECT * FROM ?? WHERE ??=?";
            const responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    console.log(err);
                    resolve(result);
                });
            });
            return responce;
        });
    }
    filter(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlQuery = "SELECT * FROM ?? ";
            const responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    console.log(err);
                    resolve(result);
                });
            });
            return responce;
        });
    }
    postImage(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlQuery = "UPDATE ?? SET? WHERE ??=? ";
            const responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    console.log(err);
                    resolve(result);
                });
            });
            return responce;
        });
    }
    getProductDiscount(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlQuery = "SELECT * FROM ?? WHERE ??!=? ";
            const responce = yield new Promise((resolve, reject) => {
                this.connection.query(sqlQuery, params, (err, result) => {
                    if (err)
                        reject(new Error(err.message));
                    console.log(err);
                    resolve(result);
                });
            });
            return responce;
        });
    }
}
exports.ProductsApi = ProductsApi;
