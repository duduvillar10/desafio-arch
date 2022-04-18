import { IStatement } from "../../domain/Statement";

interface IStatementsRepository {
  create({
    user_id,
    amount,
    date,
    type,
  }: ICreateStatement): Promise<IStatement>;
  getStatementsById(user_id: string): Promise<IStatement[]>;
  getUserBalance(user_id: string): Promise<number>;
}

export { IStatementsRepository };
