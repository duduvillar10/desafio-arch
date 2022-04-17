import { IStatement } from "../../domain/Statement";

interface IStatementsRepository {
  create({
    user_id,
    amount,
    date,
    type,
  }: ICreateStatement): Promise<IStatement>;
  getStatementsById(user_id: string);
  getUserBalance(user_id: string);
}

export { IStatementsRepository };
