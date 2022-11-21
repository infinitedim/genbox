import express from "express";
import type { Express, Request, Response } from "express";
import path from "path";

const app: Express = express();
const PORT: string | number =
  process.env.PORT !== undefined ? process.env.PORT : 88;

app.get("/", (req: Request, res: Response): void => {
  console.log(`${path.dirname}`);
});

app.listen(PORT, (): void => {
  console.log(`Server is listen on port ${PORT}`);
});
