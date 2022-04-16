import { createClient } from "redis";

export default async () => {
  const client = createClient({
    url: "redis://@redis-server:6379",
  });

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();
};
