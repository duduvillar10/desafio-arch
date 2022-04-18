import { InMemoryRedisRepository } from "../../repositories/in-memory/InMemoryRedisRepository";
import { InMemoryStatementsRepository } from "../../repositories/in-memory/InMemoryStatementsRepository";
import { CreateStatementUseCase } from "./CreateStatementUseCase";

let createStatementUseCase: CreateStatementUseCase;
let inMemoryStatementsRepository: InMemoryStatementsRepository;
let inMemoryRedisRepository;

describe("Statement", () => {
  beforeEach(() => {
    inMemoryStatementsRepository = new InMemoryStatementsRepository();
    inMemoryRedisRepository = new InMemoryRedisRepository();
    createStatementUseCase = new CreateStatementUseCase(
      inMemoryStatementsRepository,
      inMemoryRedisRepository
    );
  });

  it("should be able to create a statement", async () => {
    const statement = await createStatementUseCase.execute({
      user_id: "1341",
      amount: 134,
      date: new Date(),
      type: "deposit",
    });

    const statements = await inMemoryStatementsRepository.getStatementsById(
      "1341"
    );

    expect(statements).toEqual([statement]);
    expect(statement).toHaveProperty("_id");
    expect(statement.user_id).toEqual("1341");
  });
});
