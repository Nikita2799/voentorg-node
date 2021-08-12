"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const DatabaseApi_1 = require("../../../dataBaseWorker/DatabaseApi");
const getUserById = (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        const db_connect = new DatabaseApi_1.DatabaseApi();
    }
    catch (err) {
        console.log(err);
        res.status(500).json([{ err: err }]);
    }
};
exports.getUserById = getUserById;
