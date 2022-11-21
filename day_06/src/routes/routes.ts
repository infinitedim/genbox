import { Router } from "express";
import { get, post } from "../controllers/controllers";

const routes: Router = Router();

routes.get("/users", get);

routes.post("/users/new", post);

export default routes;
