const db = require("./db.config");

const sql = `UPDATE users SET nama='jojo' where id='3'`;

db.query(sql, (e) => (e ? console.error(e) : console.log("Data updated!")));
