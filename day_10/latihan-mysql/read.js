const db = require("./db.config");

const sql = `SELECT * FROM users`;

db.query(sql, (e, result) => (e ? console.error(e) : console.log(result)));
