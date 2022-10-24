import db from "../config/db_config";

const sql = "CREATE DATABASE biodata";

db.query(sql, (e) =>
  e != null ? console.log("Database Created") : console.error(e),
);
