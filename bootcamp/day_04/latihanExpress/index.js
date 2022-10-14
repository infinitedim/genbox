import express from "express";

const app = express();
const port = 3000;

// console.log(app);

app.get("/", (req, res, next) => {
  res.contentType("text/html");
  res.send(`<h1 style="font-family: 'Inter', sans-serif">Hello Isekai</h1>`);

  next();
});

app.get("/about", (req, res) => {
  res.send("Tentangku");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
