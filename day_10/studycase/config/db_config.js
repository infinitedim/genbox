import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "biodata",
});

db.connect((e) => {
  if (e) throw e;
  console.log("Database connected");
});

export default db;
