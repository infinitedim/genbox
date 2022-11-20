import type { MysqlError } from "mysql";
import db from "./db.config";

const sql: string = "CREATE DATABASE sosmed";

db.query(sql, (error: MysqlError | null) =>
  error ? console.error(error) : console.log("Database created")
);
