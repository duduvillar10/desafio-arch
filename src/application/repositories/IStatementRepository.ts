import { IStatement } from "../../domain/Statement";

interface IStatementsRepository {
  create({ id, amount, date, type }: ICreateStatement): Promise<IStatement>;
  getStatementsById(id: string);
  getUserBalance(id: string);
}

export { IStatementsRepository };
