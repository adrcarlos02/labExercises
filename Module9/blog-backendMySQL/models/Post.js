// models/Post.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 255]
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: { // Path to the image
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true
});

export default Post;