const db = require("./db.config");

const sql = "CREATE DATABASE sosmed";

db.query(sql, (e) => {
  if (e) throw e;
  console.log("Database created");
});
