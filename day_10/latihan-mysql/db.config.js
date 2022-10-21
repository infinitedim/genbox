const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sosmed",
});

db.connect((e) => {
  if (e) throw e;
  console.log("Database connected");
});

module.exports = db;
