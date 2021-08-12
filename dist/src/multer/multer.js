"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerApi = void 0;
const multer_1 = __importDefault(require("multer"));
const storageConfig = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./img"); //Здесь указывается путь для сохранения файлов
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
exports.multerApi = multer_1.default({ storage: storageConfig }).single("image");
