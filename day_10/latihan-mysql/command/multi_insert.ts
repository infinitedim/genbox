import type { MysqlError } from "mysql";
import db from "../config/db.config";

const sql: string = `INSERT INTO users (nama, tgl_lahir, bio)
            VALUES ?`;
const values: string[][] = [
  ["naruto", "23-12-3002", "makan ramen"],
  ["luffy", "3-2-2002", "makan daging"],
  ["diki", "2-1-3003", "makan makan"],
];

db.query(sql, [values], (error: MysqlError | null, result: any): void => {
  return error
    ? console.error(error)
    : console.log(result.affectedRows + "New Data added");
});
