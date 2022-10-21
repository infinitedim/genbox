const db = require("./db.config");

const sql = `DELETE FROM users WHERE id='1'`;

db.query(sql, (e, result) =>
  e ? console.error(e) : console.log("Data deleted")
);
