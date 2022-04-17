import { NextFunction, Request, Response } from "express";
import NodeCache from "node-cache";
import { container } from "tsyringe";

export default async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void | Response> => {
  const nodeCache = container.resolve<NodeCache>("NodeCache");

  const { user_id } = request.params;

  const value = nodeCache.get(user_id);

  if (value) {
    return response.json({ id: user_id, balance: value });
  }

  next();
};
