import { Request, Response } from "express";

class CreateStatementController {
  async handle(request: Request, response: Response): Promise<Response> {
    return response.send();
  }
}

export { CreateStatementController };
