import db from "./db_config";

const sql = "CREATE DATABASE biodata";

db.query(sql, (e) => (e ? console.log("Database Created") : console.error(e)));
