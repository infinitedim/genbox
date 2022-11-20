import express from "express";
import { control, post } from "../controllers/controllers";

const routes = express.Router();

routes.get("/data", control);

routes.post("/post", post);

export default routes;
