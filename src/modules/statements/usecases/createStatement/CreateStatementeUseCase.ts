import { IStatement } from "../../infra/entities/Statement";

class CreateStatementUseCase {
  async execute({ id, amount, date, type }: ICreateStatement) {}
}

export { CreateStatementUseCase };
