import { Router } from "express";
import { GetBalanceController } from "../../../application/useCases/getBalance/GetBalanceController";
import cache from "../middlewares/cache";

const statementsRoutes = Router();

const getBalanceController = new GetBalanceController();

statementsRoutes.get("/:user_id", cache, getBalanceController.handle);

export { statementsRoutes };
