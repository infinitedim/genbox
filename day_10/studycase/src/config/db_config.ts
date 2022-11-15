import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "biodata",
});

db.connect((error: any): void => error ? console.error(error) : console.log("Database connected"));

export default db;
