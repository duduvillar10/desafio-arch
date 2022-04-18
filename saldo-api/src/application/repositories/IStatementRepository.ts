import { IStatement } from "../../domain/Statement";

interface IStatementsRepository {
  getStatementsById(user_id: string): Promise<IStatement[]>;
  getUserBalance(user_id: string): Promise<Number>;
}

export { IStatementsRepository };
