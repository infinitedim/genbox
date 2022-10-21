import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import helmet from "helmet";
import routes from "./routes/routes";

// variable declaration
const app = express();
const port = process.env.PORT || 88;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use("/users/v1", routes);

app.use(multer().single());

app.use((e, req, res, next) => {
  const code = e.code || 500;
  const messege = e.messege;
  const data = e.data;

  res.status(code).json({
    messege,
    data,
  });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
