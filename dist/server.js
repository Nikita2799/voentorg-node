"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const startServer_1 = require("./startServer");
const mainRouter_1 = __importDefault(require("./src/mainRouter/mainRouter"));
const multer_1 = require("./src/multer/multer");
const app = express_1.default();
app.use(express_1.default.static(__dirname));
app.use(multer_1.multerApi);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", mainRouter_1.default);
startServer_1.startServer(app);
