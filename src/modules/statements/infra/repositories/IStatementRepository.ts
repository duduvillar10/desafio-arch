interface IStatementsRepository {
  create({ id, amount, date, type }: ICreateStatement): Promise<void>;
}
