import { createConnection } from "mysql";
import type { MysqlError, Connection } from "mysql";

const db: Connection = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sosmed",
});

db.connect((error: MysqlError): void =>
  error ? console.error(error) : console.log("Database connected")
);

export default db;
