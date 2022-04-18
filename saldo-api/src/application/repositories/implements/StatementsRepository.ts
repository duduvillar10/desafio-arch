import { IStatement, Statement } from "../../../domain/Statement";
import { Model } from "mongoose";
import { IStatementsRepository } from "../IStatementRepository";

class StatementsRepository implements IStatementsRepository {
  private statementsRepository: Model<IStatement>;

  constructor() {
    this.statementsRepository = Statement;
  }

  async getStatementsById(user_id: string): Promise<IStatement[]> {
    return await this.statementsRepository.find({ user_id });
  }

  async getUserBalance(user_id: string): Promise<Number> {
    const statements = await this.statementsRepository.find({ user_id });

    const balance = statements.reduce((acc, operation) => {
      if (operation.type === "deposit") {
        return acc + operation.amount;
      } else {
        return acc - operation.amount;
      }
    }, 0);

    return balance;
  }
}

export { StatementsRepository };
