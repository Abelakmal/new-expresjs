import sequelize from "../utils/database.js"; // Pastikan ini sesuai dengan struktur direktori Anda
import { DataTypes } from "sequelize"; // Import DataTypes dari sequelize

const Test = sequelize.define(
  "Test",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDelete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "tests",
  }
);

export default Test;
