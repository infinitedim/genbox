import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/routes";
import { connect } from "mongoose";
import path, { join } from "path";
import { fileURLToPath } from "url";
import multer, { diskStorage } from "multer";

const app = express();
const port = process.env.PORT || 88;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileStorage = diskStorage({
  destination: (req, file, cb) => {
    cb(null, "img");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().setTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(cors());

app.use(bodyParser.json());

app.use(multer({ storage: fileStorage, fileFilter }).single("gambar"));

app.use("/img", express.static(join(__dirname, "img")));

app.use("/blog/v1", routes);

app.use((e, req, res, next) => {
  const code = e.errorStatus || 500;
  const messege = e.messege;
  const data = e.data;

  res.status(code).json({
    messege,
    data,
  });
});

connect(
  `mongodb+srv://infinitedim:I9dZ7cK2LvlOA67J@belajarjs.9ketzuo.mongodb.net/?retryWrites=true&w=majority`
)
  .then(() =>
    app.listen(port, (req, res) => {
      console.log(`Server is listening on port ${port}`);
    })
  )
  .catch((e) => console.error(e));
