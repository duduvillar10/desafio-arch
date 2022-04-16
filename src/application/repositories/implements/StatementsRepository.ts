import { IStatement, Statement } from "../../../domain/Statement";
import { Model } from "mongoose";
import { IStatementsRepository } from "../IStatementRepository";

class StatementsRepository implements IStatementsRepository {
  private statementsRepository: Model<IStatement>;

  constructor() {
    this.statementsRepository = Statement;
  }

  async create({
    id,
    amount,
    date,
    type,
  }: ICreateStatement): Promise<IStatement> {
    const statement = new this.statementsRepository({ id, amount, date, type });

    await statement.save();

    return statement;
  }

  async getStatementsById(id: string) {
    return await this.statementsRepository.find({ id });
  }

  async getUserBalance(id: string) {
    const statements = await this.statementsRepository.find({ id });

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
