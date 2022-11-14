import { Sequelize } from "sequelize";

const db: Sequelize = new Sequelize("sequelize_test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
