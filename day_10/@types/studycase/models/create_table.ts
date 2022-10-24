import db from "../config/db_config";

const sql = `CREATE TABLE user
                (id INT NOT NULL AUTO_INCREMENT,
                nama VARCHAR(30),
                umur INT,
                hobi Varchar(30),
                PRIMARY KEY (id))
`;

db.query(sql, (e) => {
  e != null ? console.error(e) : console.log("Table Created");
});
