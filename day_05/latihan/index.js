// Import Package yang diperlukan
import express from "express";
import cors from "cors";
import router from "./router/router";

// Deklarasi Variable
const app = express();
const port = 8080;

// Jalankan Cors
app.use(cors());

// Fungsi middleware
app.use("/users/v1", router);

// Jalankan server dan log server listen port
app.listen(port, () => console.log(`Server is listening on port ${port}`));
