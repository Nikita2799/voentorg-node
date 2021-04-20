import Router from "express";
import { AuthRouter } from "../modules/Auth/router";
import { CategoryRouter } from "../modules/Category/router";
import { MailRouter } from "../modules/NewMail/router";
import { OrdersRouter } from "../modules/Orders/router";
import { ProductRouter } from "../modules/Products/router";
import { SubCategoryRouter } from "../modules/SubCategory/router";
import { corsSettings } from "./corsSetting";

const router = Router();

router.use(corsSettings);

AuthRouter(router);
ProductRouter(router);
CategoryRouter(router);
OrdersRouter(router);
MailRouter(router);
SubCategoryRouter(router);

router.options("*", corsSettings);

export default router;
