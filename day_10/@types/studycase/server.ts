/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as multer from "multer";
import helmet from "helmet";
import routes from "./routes/routes";

// variable declaration
const app = express();
const port = process.env.PORT != null || 88;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use("/users/v1", routes);

app.use(multer().single("none"));

app.use(
  (
    e: { code: number; messege: any; data: any },
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) => {
    const code = e.code;
    const messege = e.messege;
    const data = e.data;

    res.status(code).json({
      messege,
      data,
    });
  },
);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
