import express from "express";
import type { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import helmet from "helmet";
import { routes as AppRoutes } from "../src/routes/routes";

// variable declaration
const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use(multer().single("none"));

app.use("/api/v1", AppRoutes);

app.use(
  (
    error: { code: number; messege: any; data: any },
    req: Request,
    res: Response,
    next: NextFunction,
  ): void => {
    const code = error.code || 500;
    const messege = error.messege;
    const data = error.data;

    res.status(code).json({
      messege,
      data,
    });
  },
);

export default app;
