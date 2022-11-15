import { Router } from "express";
import { body, ValidationChain } from "express-validator";
import { get, post, search, edit, del } from "../controllers/controllers";

export const routes: Router = Router();

const validation: ValidationChain[] = [
  body("nama")
    .isLength({ min: 3, max: 50 })
    .withMessage("name at least 5 character"),
  body("umur").isLength({ min: 1, max: 3 }).withMessage("Age is invalid"),
  body("hobi").isLength({ min: 5 }).withMessage("Hobby is required"),
];

routes.get("/users", get);
routes.post("/users/new", validation, post);
routes.get("/users/:id", search);
routes.put("/users/:id/edit", validation, edit);
routes.delete("/users/:id/delete", del);
