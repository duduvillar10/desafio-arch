import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateStatementUseCase } from "./CreateStatementUseCase";

class CreateStatementController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id, amount, date, type } = request.body;

    const createStatementUseCase = container.resolve(CreateStatementUseCase);

    const statement = await createStatementUseCase.execute({
      user_id,
      amount,
      date,
      type,
    });

    return response.status(201).json(statement);
  }
}

export { CreateStatementController };
