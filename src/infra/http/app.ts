import "reflect-metadata";
import express from "express";
import { router } from "./routes";
import createMongoConnection from "../database/mongodb";
import "./container";

createMongoConnection();

const app = express();

app.use(express.json());

app.use(router);

export { app };
