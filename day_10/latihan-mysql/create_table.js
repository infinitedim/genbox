const db = require("./db.config");

const sql = `CREATE TABLE profile
            (id INT NOT NULL AUTO_INCREMENT,
            nama VARCHAR(30),
            tgl_lahir VARCHAR(12),
            bio VARCHAR(666),
            PRIMARY KEY (id))
`;

db.query(sql, (e) => {
  e ? console.error(e) : console.log("Table Created");
});
