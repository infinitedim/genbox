import type { MysqlError } from "mysql";
import db from "../config/db.config";

const sql: string = `SELECT * FROM users`;

db.query(sql, (error: MysqlError, result: any): void =>
  error ? console.error(error) : console.log(result)
);
