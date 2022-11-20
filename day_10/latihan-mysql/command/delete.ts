import type { MysqlError } from "mysql";
import db from "../config/db.config";

const sql: string = `DELETE FROM users WHERE id='1'`;

db.query(sql, (error: MysqlError | null, result: any): void =>
  error ? console.error(error) : console.log("Data deleted")
);
