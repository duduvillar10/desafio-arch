import { connect } from "mongoose";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: "arch",
  pass: "12345",
};
export default async (): Promise<void> => {
  await connect("mongodb://database-mongo:27017", options);
};
