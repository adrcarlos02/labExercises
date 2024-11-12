// models/Item.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Item = sequelize.define('Item', {
  // ... existing fields
  status: {
    type: DataTypes.ENUM('available', 'borrowed', 'reserved'),
    allowNull: false,
    defaultValue: 'available',
  },
  borrowerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Users',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
}, {
  timestamps: true,
});

export default Item;