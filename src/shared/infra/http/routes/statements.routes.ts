import { Router } from "express";
import { CreateStatementController } from "../../../../modules/statements/usecases/createStatement/CreateStatementController";

const statementsRoutes = Router();

const createStatementUseCase = new CreateStatementController();

statementsRoutes.post("/", createStatementUseCase.handle);

export { statementsRoutes };
