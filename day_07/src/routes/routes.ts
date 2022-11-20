import express from "express";
import {get, post} from "../controllers/controllers";

const routes = express.Router();

routes.get("/get", get)

routes.post("/post", post)

export default routes