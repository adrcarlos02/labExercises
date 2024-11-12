// models/BorrowHistory.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Item from './Item.js';

const BorrowHistory = sequelize.define('BorrowHistory', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  itemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Items',
      key: 'id',
    },
  },
  borrowDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  returnDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  timestamps: true,
});

export default BorrowHistory;