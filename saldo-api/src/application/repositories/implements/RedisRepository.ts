import { RedisClientType } from "@node-redis/client";
import { createClient } from "redis";

class RedisRepository {
  private client: RedisClientType;

  constructor() {
    this.client = createClient({
      url: "redis://@redis-server:6379",
    });

    this.client.on("error", (err) => console.log("Redis Client Error", err));

    (async () => {
      await this.client.connect();
    })();
  }

  async create(key: string, value: string): Promise<void> {
    await this.client.set(key, value);
  }

  async getOne(key: string): Promise<string> {
    const value = await this.client.get(key);

    return value;
  }
}

export { RedisRepository };
