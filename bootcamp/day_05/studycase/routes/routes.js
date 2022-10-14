import express from "express";
import control from "../controllers/controllers";

const routes = express.Router();

export default routes.get("/data", control);
