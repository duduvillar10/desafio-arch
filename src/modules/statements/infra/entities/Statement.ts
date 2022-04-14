import { Schema, model } from "mongoose";
enum OperatinoType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
}

interface IStatement {
  id: string;

  amount: number;

  date: Date;

  type: OperatinoType;
}

const schema = new Schema<IStatement>({
  id: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  type: { type: String, enum: OperatinoType, required: true },
});

const Statement = model<IStatement>("Statement", schema);

export { Statement, IStatement };
