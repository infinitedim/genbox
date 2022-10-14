import express from "express";
// import { readFile } from "fs";
// import __dirname from "dirname";
import path from "path";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  console.log(`${path.dirname}`);
});

app.listen(port, () => {
  console.log(`Server is listen on port ${port}`);
});
