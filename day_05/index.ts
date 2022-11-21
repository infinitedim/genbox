import express from "express";
import type { Express, Request, Response } from "express";

const app: Express = express();
const PORT: string | number =
  process.env.PORT !== undefined ? process.env.PORT : 88;

app.get("/", (req: Request, res: Response): void => {
  res.contentType("text/html");
  res.sendStatus(200);
  res.send(`<h1>Halo Isekai</h1>`);
});

app.get("/about/:nama", (req: Request, res: Response): void => {
  res.send(`<h1>Ini About</h1>`);
  res.sendStatus(200);
  console.log(req.params.nama);
});

app.use("/", (req: Request, res: Response): void => {
  res.sendStatus(404);
  res.send(`<h1>404 Not Page Not Found</h1>`);
});

app.listen(PORT, (): void => {
  console.log(`Server is listening on port ${PORT}`);
});
