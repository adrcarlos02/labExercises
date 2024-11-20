// models/index.js
import sequelize from '../config/database.js';
import User from './User.js';
import Post from './Post.js';
import Like from './Like.js';
import Comment from './Comment.js';


// User and Post
User.hasMany(Post, { foreignKey: 'authorId', as: 'posts', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'authorId', as: 'author' });

// User and Like
User.hasMany(Like, { foreignKey: 'likerId', as: 'likes', onDelete: 'CASCADE' });
Like.belongsTo(User, { foreignKey: 'likerId', as: 'liker' });

// Post and Like
Post.hasMany(Like, { foreignKey: 'postId', as: 'likes', onDelete: 'CASCADE' });
Like.belongsTo(Post, { foreignKey: 'postId', as: 'post' });

// User and Comment
User.hasMany(Comment, { foreignKey: 'commenterId', as: 'comments', onDelete: 'CASCADE' });
Comment.belongsTo(User, { foreignKey: 'commenterId', as: 'commenter' });

// Post and Comment
Post.hasMany(Comment, { foreignKey: 'postId', as: 'comments', onDelete: 'CASCADE' });
Comment.belongsTo(Post, { foreignKey: 'postId', as: 'post' });

// Synchronize models with the database
const syncDB = async () => {
  try {
    await sequelize.sync({ alter: true }); // Use { force: true } for development to reset tables
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing models:', error);
  }
};



syncDB();

export {
  User,
  Post,
  Like,
  Comment
};