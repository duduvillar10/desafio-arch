import "reflect-metadata";
import express from "express";
import { router } from "./routes";
import createConnection from "../database/mongodb";
import { container } from "tsyringe";
import { IStatementsRepository } from "../../application/repositories/IStatementRepository";
import { StatementsRepository } from "../../application/repositories/implements/StatementsRepository";

createConnection();

container.registerSingleton<IStatementsRepository>(
  "StatementsRepository",
  StatementsRepository
);
const app = express();

app.use(express.json());

app.use(router);

export { app };
