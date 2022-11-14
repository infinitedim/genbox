import express from "express";
import type { Request, Response, Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { routes as AppRoutes } from "../src/routes/routes";

const app: Express = express();

// middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/v1/", AppRoutes);

export default app;
