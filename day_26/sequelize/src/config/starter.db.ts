import mysql from "mysql";

const db: mysql.Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sequelize_test",
});

// const sql: string = "CREATE DATABASE sequelize_test";

const sql = `CREATE TABLE user
            (
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(255),
                hobi VARCHAR(255),
                createdAt VARCHAR(255),
                updatedAt VARCHAR(255),
                PRIMARY KEY (id)
            )`;

db.connect((error: mysql.MysqlError): void =>
  error ? console.error(error) : console.log("Connected to database")
);

// db.query(
//   sql,
//   (
//     error: mysql.MysqlError | null,
//     result: any
//   ): mysql.MysqlError | undefined => {
//     if (error) {
//       return error;
//     }
//     console.log("Database Created");
//   }
// );

db.query(
  sql,
  (
    error: mysql.MysqlError | null,
    result: any
  ): mysql.MysqlError | undefined => {
    if (error) {
      return error;
    }
    console.log("Table Created");
  }
);
