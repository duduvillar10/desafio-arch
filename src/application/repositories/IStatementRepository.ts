import { IStatement } from "../../domain/Statement";

interface IStatementsRepository {
  create({ id, amount, date, type }: ICreateStatement): Promise<IStatement>;
}

export { IStatementsRepository };
