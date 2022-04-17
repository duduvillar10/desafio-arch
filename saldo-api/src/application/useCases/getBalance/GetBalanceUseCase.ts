import NodeCache from "node-cache";
import { inject, injectable } from "tsyringe";
import { RedisRepository } from "../../repositories/implements/RedisRepository";
import { IStatementsRepository } from "../../repositories/IStatementRepository";

@injectable()
class GetBalanceUseCase {
  constructor(
    @inject("StatementsRepository")
    private statementsRepositories: IStatementsRepository,
    @inject("RedisRepository")
    private redisRepository: RedisRepository,
    @inject("NodeCache")
    private nodeCache: NodeCache
  ) {}

  async execute(id: string) {
    const balance = await this.redisRepository.getOne(id);

    if (!balance) {
      const newBalance = await this.statementsRepositories.getUserBalance(id);

      if (!newBalance) {
        throw new Error("user não encontrado");
      }

      await this.redisRepository.create(id, newBalance);
    }

    this.nodeCache.set(id, await this.redisRepository.getOne(id), 60 * 15);

    return balance || this.redisRepository.getOne(id);
  }
}

export { GetBalanceUseCase };
