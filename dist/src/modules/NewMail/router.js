"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailRouter = void 0;
const postMail_1 = require("./controllers/postMail");
const MailRouter = (router) => {
    router.post("/mail", postMail_1.postMail);
};
exports.MailRouter = MailRouter;
