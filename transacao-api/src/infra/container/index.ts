import { container } from "tsyringe";
import { StatementsRepository } from "../../application/repositories/implements/StatementsRepository";
import { IStatementsRepository } from "../../application/repositories/IStatementsRepository";
import { RedisRepository } from "../../application/repositories/implements/RedisRepository";

container.registerSingleton<IStatementsRepository>(
  "StatementsRepository",
  StatementsRepository
);

container.registerSingleton<RedisRepository>(
  "RedisRepository",
  RedisRepository
);
