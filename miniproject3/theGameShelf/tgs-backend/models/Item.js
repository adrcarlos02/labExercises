// models/Item.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Category from './Category.js';

const Item = sequelize.define('Item', {
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 255], // Title length between 1 and 255 characters
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true, // Description is optional
  },
  status: {
    type: DataTypes.ENUM('available', 'borrowed'),
    allowNull: false,
    defaultValue: 'available',
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true, // Photo is optional
  },
}, {
  timestamps: true,
});

// Associations: categoryId foreign key through the association with the Category model.
Item.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Category.hasMany(Item, { foreignKey: 'categoryId', as: 'items' });

export default Item;