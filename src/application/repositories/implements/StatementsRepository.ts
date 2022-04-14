import {
  IStatement,
  Statement,
} from "../../../modules/statements/infra/entities/Statement";
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
}

export { StatementsRepository };
