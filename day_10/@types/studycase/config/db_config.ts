import { createConnection } from "mysql";

const db = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "biodata",
});

db.connect((e) => {
  if (e !== null) throw e;
  console.log("Database connected");
});

export default db;
