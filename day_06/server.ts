import express from "express";
import cors from "cors";
import routes from "./routes/routes";
import bodyParser from "body-parser";

// deklarasi variabel
const app = express();
const port = 8080;

// Menangani cors
app.use(cors());

app.use(bodyParser.json());

// Fungsi middleware
app.use("/users/v1", routes);

// Jalankan server dan log server listen port
app.listen(port, () => console.log(`Server is listening on port ${port}`));
