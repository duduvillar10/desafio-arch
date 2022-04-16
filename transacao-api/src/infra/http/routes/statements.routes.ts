import { Router } from "express";
import { CreateStatementController } from "../../../application/useCases/createStatement/CreateStatementController";

const statementsRoutes = Router();

const createStatementUseCase = new CreateStatementController();

statementsRoutes.post("/", createStatementUseCase.handle);

export { statementsRoutes };
