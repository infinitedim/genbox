import express from "express";
import type { Express } from "express";
import cors from "cors";
import routes from "../src/routes/routes";

// deklarasi variabel
const app: Express = express();

app.use(cors());

app.use("/api/v1", routes);

export default app;
