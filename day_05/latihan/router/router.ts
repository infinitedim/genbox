import { Router } from "express";
import data from "../controllers/controller";

const router: Router = Router();

export default router.get("/users", data);
