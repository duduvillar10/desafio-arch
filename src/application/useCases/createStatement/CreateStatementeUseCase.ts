import { inject, injectable } from "tsyringe";
import { RedisRepository } from "../../repositories/implements/RedisRepository";
import { IStatementsRepository } from "../../repositories/IStatementRepository";

@injectable()
class CreateStatementUseCase {
  constructor(
    @inject("StatementsRepository")
    private statementsRepositories: IStatementsRepository,
    @inject("RedisRepository")
    private redisRepository: RedisRepository
  ) {}

  async execute({ id, amount, date, type }: ICreateStatement) {
    const statement = await this.statementsRepositories.create({
      id,
      amount,
      date,
      type,
    });

    const balance = await this.statementsRepositories.getUserBalance(id);

    await this.redisRepository.create(id, balance);

    return statement;
  }
}

export { CreateStatementUseCase };
