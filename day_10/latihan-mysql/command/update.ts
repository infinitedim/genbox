import type { MysqlError } from "mysql";
import db from "../config/db.config";

const sql: string = `UPDATE users SET nama='jojo' where id='3'`;

db.query(sql, (error: MysqlError): void =>
  error ? console.error(error) : console.log("Data updated!")
);
