import express from "express";
import cors from "cors";
import routes from "../routes/routes";

// deklarasi variabel
const app = express();
const port = 88;

// Menangani cors
app.use(cors());

// Fungsi middleware
app.use("/users/v1", routes);

// Jalankan server dan log server listen port
app.listen(port, () => `Server is listening on port ${port}`);
