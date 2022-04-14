import { IStatement, Statement } from "../../entities/Statement";
import { Model } from "mongoose";

class StatementsRepository implements IStatementsRepository {
  private statementsRepository: Model<IStatement>;

  constructor() {
    this.statementsRepository = Statement;
  }

  async create({ id, amount, date, type }: ICreateStatement): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { StatementsRepository };
