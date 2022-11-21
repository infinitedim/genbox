import express from "express";
import type { Express, Request, Response, NextFunction } from "express";

const app: Express = express();
const PORT: string | number =
  process.env.PORT !== undefined ? process.env.PORT : 88;

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  res.contentType("text/html");
  res.send(`<h1 style="font-family: 'Inter', sans-serif">Hello Isekai</h1>`);

  next();
});

app.get("/about", (req: Request, res: Response): void => {
  res.send("Tentangku");
});

app.listen(PORT, (): void => {
  console.log(`Server is listening on port ${PORT}`);
});
