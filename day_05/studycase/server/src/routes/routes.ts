import { Router } from "express";
import get from "../controllers/controllers";

const routes: Router = Router();

routes.get("/users", get);

export default routes;
