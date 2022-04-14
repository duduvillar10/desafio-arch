import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateStatementUseCase } from "./CreateStatementeUseCase";

class CreateStatementController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, amount, date, type } = request.body;

    const createStatementUseCase = container.resolve(CreateStatementUseCase);

    const statement = await createStatementUseCase.execute({
      id,
      amount,
      date,
      type,
    });

    return response.status(201).json(statement);
  }
}

export { CreateStatementController };
