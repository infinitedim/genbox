const db = require("./db.config");

const sql = `INSERT INTO users (nama, tgl_lahir, bio)
            VALUES ?`;
const values = [
  ["naruto", "23-12-3002", "makan ramen"],
  ["luffy", "3-2-2002", "makan daging"],
  ["diki", "2-1-3003", "makan makan"],
];

db.query(sql, [values], (e, result) =>
  e ? console.error(e) : console.log(result.affectedRows + "New Data added")
);
