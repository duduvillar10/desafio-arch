import { IStatement } from "../../domain/Statement";

interface IStatementsRepository {
  getStatementsById(user_id: string);
  getUserBalance(user_id: string);
}

export { IStatementsRepository };
