import { Router } from "express";
import {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/usersControllers";

export const routes = Router();

routes.get("/users", getUser);
routes.get("/users/:id", getUserById);
routes.post("/users", createUser);
routes.put("/users/:id", updateUser);
routes.delete("/users/:id", deleteUser);
