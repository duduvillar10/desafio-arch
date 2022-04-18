class InMemoryRedisRepository {
  private client = [];

  async create(key: string, value: string): Promise<void> {
    this.client.push({ key, value });
  }

  async getOne(key: string): Promise<string> {
    const value = await this.client.find((obj) => obj.key === key);
    return value;
  }
}

export { InMemoryRedisRepository };
