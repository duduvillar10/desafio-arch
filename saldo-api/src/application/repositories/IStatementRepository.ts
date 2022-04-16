import { IStatement } from "../../domain/Statement";

interface IStatementsRepository {
  getStatementsById(id: string);
  getUserBalance(id: string);
}

export { IStatementsRepository };
