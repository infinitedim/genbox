import express from "express";
import type { Express } from "express";
import cors from "cors";
import router from "./router/router";

const app: Express = express();
const PORT: string | number =
  process.env.PORT !== undefined ? process.env.PORT : 88;

app.use(cors());

app.use("/api/v1", router);

app.listen(PORT, (): void =>
  console.log(`Server is listening on port ${PORT}`)
);
