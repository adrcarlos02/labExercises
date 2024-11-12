// models/index.js

import sequelize from '../config/database.js';
import User from './User.js';
import Item from './Item.js';
import Category from './Category.js';
import BorrowHistory from './BorrowHistory.js';

// Define associations after importing all models

// User and Item association
User.hasMany(Item, { foreignKey: 'borrowerId', as: 'borrowedItems' });
Item.belongsTo(User, { foreignKey: 'borrowerId', as: 'borrower' });

// Category and Item association
Category.hasMany(Item, { foreignKey: 'categoryId', as: 'items' });
Item.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

// User and BorrowHistory association
User.hasMany(BorrowHistory, { foreignKey: 'userId', as: 'borrowHistories' });
BorrowHistory.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Item and BorrowHistory association
Item.hasMany(BorrowHistory, { foreignKey: 'itemId', as: 'borrowHistories' });
BorrowHistory.belongsTo(Item, { foreignKey: 'itemId', as: 'item' });

const db = {
  sequelize,
  User,
  Item,
  Category,
  BorrowHistory,
};

export default db;
export { sequelize, User, Item, Category, BorrowHistory };