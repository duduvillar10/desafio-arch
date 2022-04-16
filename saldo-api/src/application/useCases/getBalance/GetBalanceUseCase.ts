import { inject, injectable } from "tsyringe";
import { RedisRepository } from "../../repositories/implements/RedisRepository";
import { IStatementsRepository } from "../../repositories/IStatementRepository";

@injectable()
class GetBalanceUseCase {
  constructor(
    @inject("StatementsRepository")
    private statementsRepositories: IStatementsRepository,
    @inject("RedisRepository")
    private redisRepository: RedisRepository
  ) {}

  async execute(id: string) {
    const balance = await this.redisRepository.getOne(id);

    if (!balance) {
      console.log("balance does not exists!");
    }
    console.log(balance);
    return balance;
  }
}

export { GetBalanceUseCase };
