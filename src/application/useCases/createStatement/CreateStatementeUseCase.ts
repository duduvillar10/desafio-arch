import { IStatement } from "../../../modules/statements/infra/entities/Statement";

class CreateStatementUseCase {
  async execute({ id, amount, date, type }: ICreateStatement) {}
}

export { CreateStatementUseCase };
