import express from "express";

const app = express();
const port = 88;

app.get((req, res, next) => {
  console.log("Tes");
  next();
});

app.get("/", (req, res) => {
  res.contentType("text/html");
  res.sendStatus(200);
  res.send(`<h1>Halo Isekai</h1>`);
});

app.get("/about/:nama", (req, res) => {
  res.send(`<h1>Ini About</h1>`);
  res.sendStatus(200);
  console.log(req.params.nama);
});

app.use("/", (req, res) => {
  res.sendStatus(404);
  res.send(`<h1>404 Not Page Not Found</h1>`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
