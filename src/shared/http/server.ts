import "reflect-metadata";
import express from "express";
import "express-async-errors";

import { router } from "./routes";

import "../container";

const app = express();

app.use(express.json());

app.use(router);

app.listen(8080, () => console.log("Server is running!"));
