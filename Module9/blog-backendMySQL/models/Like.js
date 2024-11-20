// models/Like.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Post from './Post.js';

const Like = sequelize.define('Like', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  timestamps: true
});

export default Like;