import db from "./db_config";

const sql: string = "CREATE DATABASE biodata";

db.query(sql, (error: any): void =>
  error ? console.error(error) : console.log("Database Created"),
);
