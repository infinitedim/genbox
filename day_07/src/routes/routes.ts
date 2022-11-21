import { Router } from "express";
import { get, post } from "../controllers/controllers";

const routes = Router();

routes.get("/get", get);

routes.post("/post", post);

export default routes;
