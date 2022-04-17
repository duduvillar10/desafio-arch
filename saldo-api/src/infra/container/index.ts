import { container } from "tsyringe";
import { StatementsRepository } from "../../application/repositories/implements/StatementsRepository";
import { IStatementsRepository } from "../../application/repositories/IStatementRepository";
import { RedisRepository } from "../../application/repositories/implements/RedisRepository";
import NodeCache from "node-cache";

container.registerSingleton<IStatementsRepository>(
  "StatementsRepository",
  StatementsRepository
);

container.registerSingleton<RedisRepository>(
  "RedisRepository",
  RedisRepository
);

container.registerSingleton<NodeCache>("NodeCache", NodeCache);
