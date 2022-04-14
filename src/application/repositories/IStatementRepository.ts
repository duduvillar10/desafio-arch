import { IStatement } from "../../modules/statements/infra/entities/Statement";

interface IStatementsRepository {
  create({ id, amount, date, type }: ICreateStatement): Promise<IStatement>;
}

export { IStatementsRepository };
