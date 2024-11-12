import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Item = sequelize.define(
  "Item",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("available", "borrowed", "reserved"),
      defaultValue: "available",
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Item;