// models/User.js

import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobileNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isAustralianMobile(value) {
        const australianMobileRegex = /^(\+?61|0)4\d{8}$/;
        if (!australianMobileRegex.test(value)) {
          throw new Error("Invalid Australian mobile number format.");
        }
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("user", "admin"),
    defaultValue: "user",
  },
}, {
  timestamps: true,
});

export default User;