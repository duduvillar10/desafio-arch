import { IStatement, Statement } from "../../../domain/Statement";
import { IStatementsRepository } from "../IStatementsRepository";

class InMemoryStatementsRepository implements IStatementsRepository {
  private statements: IStatement[] = [];

  async create({
    user_id,
    amount,
    date,
    type,
  }: ICreateStatement): Promise<IStatement> {
    const statement = new Statement({
      user_id,
      amount,
      date,
      type,
    });

    this.statements.push(statement);

    return statement;
  }

  async getStatementsById(user_id: string): Promise<IStatement[]> {
    const statement = this.statements.filter(
      (operation) => operation.user_id === user_id
    );
    return statement;
  }

  async getUserBalance(user_id: string): Promise<number> {
    const statement = this.statements.filter(
      (operation) => operation.user_id === user_id
    );

    const balance = statement.reduce((acc, operation) => {
      if (operation.type === "deposit") {
        return acc + operation.amount;
      } else {
        return acc - operation.amount;
      }
    }, 0);

    return balance;
  }
}

export { InMemoryStatementsRepository };
