// Import package yang diperlukan
import express from "express";
import data from "../controllers/controller";

// Deklarasi variable
const router = express.Router();

// export router dan jalankan fungsi router
export default router.get("/data", data);
