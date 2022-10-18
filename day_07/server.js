import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/routes";
import mongoose from "mongoose";

const app = express();
const port = 88;

app.use(cors());

app.use(bodyParser.json());

app.use("/users/v1", routes);

mongoose
  .connect(
    `mongodb+srv://infinitedim:I9dZ7cK2LvlOA67J@belajarjs.9ketzuo.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(port, (req, res) => {
      console.log(`Server is listening on port ${port}`);
    })
  )
  .catch((e) => console.error(e));
