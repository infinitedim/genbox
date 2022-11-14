import { DataTypes } from "sequelize";
import db from "../config/db.config";

export const User = db.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
    },
    hobi: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
