// models/Comment.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Post from './Post.js';

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: true
});

export default Comment;