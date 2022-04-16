import "reflect-metadata";
import express from "express";
import { router } from "./routes";
import createMongoConnection from "../database/mongodb";
import createRedisConnection from "../database/redis";
import { container } from "tsyringe";
import { IStatementsRepository } from "../../application/repositories/IStatementRepository";
import { StatementsRepository } from "../../application/repositories/implements/StatementsRepository";

createMongoConnection();
createRedisConnection();

container.registerSingleton<IStatementsRepository>(
  "StatementsRepository",
  StatementsRepository
);
const app = express();

app.use(express.json());

app.use(router);

export { app };
