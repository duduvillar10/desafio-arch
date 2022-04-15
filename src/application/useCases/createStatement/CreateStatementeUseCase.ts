import { inject, injectable } from "tsyringe";
import { IStatementsRepository } from "../../repositories/IStatementRepository";

@injectable()
class CreateStatementUseCase {
  constructor(
    @inject("StatementsRepository")
    private statementsRepositories: IStatementsRepository
  ) {}

  async execute({ id, amount, date, type }: ICreateStatement) {
    const statement = await this.statementsRepositories.create({
      id,
      amount,
      date,
      type,
    });

    return statement;
  }
}

export { CreateStatementUseCase };
