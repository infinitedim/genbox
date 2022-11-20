import express from "express";
import { get, post, blog, edit, del } from "../controllers/controllers";
import { body } from "express-validator";

const routes = express.Router();

routes.get("/get", get);

routes.post(
  "/post",
  [
    body("judul")
      .isLength({ min: 5 })
      .withMessage("Judul at least 5 character"),
    body("isi")
      .isLength({ min: 5 })
      .withMessage("Content at least 200 character"),
    body("penulis")
      .isLength({ min: 5 })
      .withMessage("Creator at least 20 character"),
  ],
  post
);

routes.get("/get/:getId", blog);

routes.put(
  "/edit/:getId",
  [
    body("judul")
      .isLength({ min: 5 })
      .withMessage("Judul at least 5 character"),
    body("isi")
      .isLength({ min: 5 })
      .withMessage("Content at least 200 character"),
    body("penulis")
      .isLength({ min: 5 })
      .withMessage("Creator at least 20 character"),
  ],
  edit
);

routes.get("/delete/:getId", del);

export default routes;
