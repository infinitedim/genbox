import { Router } from "express";
import { body } from "express-validator";
import { get, post, search, edit, del } from "../controllers/controllers";

const routes = Router();

const validation = [
  body("nama")
    .isLength({ min: 3, max: 50 })
    .withMessage("name at least 5 character"),
  body("umur").isLength({ min: 1, max: 3 }).withMessage("Age is invalid"),
  body("hobi").isLength({ min: 5 }).withMessage("Hobby is required"),
];

routes.get("/get", get);

routes.post("/post", validation, post);

routes.get("/search/", search);

routes.put("/edit/:id", validation, edit);

routes.delete("/delete/:id", del);

export default routes;
