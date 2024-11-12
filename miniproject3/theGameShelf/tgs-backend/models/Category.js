// models/Category.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      len: [1, 50], // Name must be between 1 and 50 characters
    },
  },
}, {
  timestamps: true,
});

export default Category;