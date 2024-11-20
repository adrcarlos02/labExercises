import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import bcrypt from 'bcryptjs';

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [3, 25],
          msg: 'Username must be between 3 and 25 characters.',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email address is already in use.',
      },
      validate: {
        isEmail: {
          msg: 'Must be a valid email address.',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 100],
          msg: 'Password must be at least 8 characters long.',
        },
      },
    },
  },
  {
    timestamps: true,
    hooks: {
      /**
       * Hash the password before creating the user.
       */
      beforeCreate: async (user) => {
        user.password = await hashPassword(user.password);
      },
      /**
       * Hash the password before updating the user if it has changed.
       */
      beforeUpdate: async (user) => {
        if (user.changed('password')) {
          user.password = await hashPassword(user.password);
        }
      },
    },
  }
);

/**
 * Hashes the given password with bcrypt.
 * @param {string} password - The plain text password.
 * @returns {Promise<string>} The hashed password.
 */
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

/**
 * Instance method to compare a plain password with the hashed password.
 * @param {string} password - The plain text password.
 * @returns {Promise<boolean>} True if the passwords match, false otherwise.
 */
User.prototype.validPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

/**
 * Exclude the password field when returning user data as JSON.
 */
User.prototype.toJSON = function () {
  const values = { ...this.get() };
  delete values.password; // Exclude the password
  return values;
};

export default User;