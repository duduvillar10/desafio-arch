import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetBalanceUseCase } from "./GetBalanceUseCase";

class GetBalanceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const getBalanceUseCase = container.resolve(GetBalanceUseCase);

    const balance = await getBalanceUseCase.execute(user_id);

    return response.json({ id: user_id, balance });
  }
}

export { GetBalanceController };
