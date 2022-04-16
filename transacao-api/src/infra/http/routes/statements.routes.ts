import { Router } from "express";
import { CreateStatementController } from "../../../application/useCases/createStatement/CreateStatementController";

const statementsRoutes = Router();

const createStatementController = new CreateStatementController();

statementsRoutes.post("/", createStatementController.handle);

export { statementsRoutes };
