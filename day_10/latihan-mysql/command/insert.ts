import { MysqlError } from "mysql";
import db from "../config/db.config";

const sql: string = `INSERT INTO (profile, users) (nama, tgl_lahir, bio)
            VALUES ('Dimas Saputra', '6-6-666', 'Saya aslinya dua orang')`;

db.query(sql, (error: MysqlError): void =>
  error ? console.error(error) : console.log("New Data added")
);
