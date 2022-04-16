import { Router } from "express";
import { GetBalanceController } from "../../../application/useCases/getBalance/GetBalanceController";

const statementsRoutes = Router();

const getBalanceController = new GetBalanceController();

statementsRoutes.get("/:user_id", getBalanceController.handle);

export { statementsRoutes };
