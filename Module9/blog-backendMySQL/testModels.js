// Import Sequelize and models
import sequelize from './config/database.js';
import { User, Post, Like, Comment } from './models/index.js';

// Test function to validate model loading and associations
async function testModels() {
  try {
    // Test database connection
    console.log('Testing database connection...');
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    // Check if models are loaded
    console.log('Checking models...');
    console.log('User model:', User ? 'Loaded successfully' : 'Failed to load');
    console.log('Post model:', Post ? 'Loaded successfully' : 'Failed to load');
    console.log('Like model:', Like ? 'Loaded successfully' : 'Failed to load');
    console.log('Comment model:', Comment ? 'Loaded successfully' : 'Failed to load');

    // Test model associations
    console.log('Testing associations...');
    console.log('Does User have Posts?', User.associations.posts ? 'Yes' : 'No');
    console.log('Does Post belong to User?', Post.associations.author ? 'Yes' : 'No');
    console.log('Does Post have Likes?', Post.associations.likes ? 'Yes' : 'No');
    console.log('Does User have Likes?', User.associations.likes ? 'Yes' : 'No');
    console.log('Does Post have Comments?', Post.associations.comments ? 'Yes' : 'No');
    console.log('Does User have Comments?', User.associations.comments ? 'Yes' : 'No');

    // Test synchronization
    console.log('Syncing database models...');
    await sequelize.sync({ force: true }); // Use `force: true` to reset the database
    console.log('Models synced successfully.');

    // Test CRUD operations
    console.log('Testing CRUD operations...');
    const user = await User.create({ username: 'TestUser', email: 'test@example.com', password: 'password123' });
    console.log('Created User:', user.toJSON());

    const post = await Post.create({ title: 'Test Post', description: 'This is a test post.', authorId: user.id });
    console.log('Created Post:', post.toJSON());

    const like = await Like.create({ likerId: user.id, postId: post.id });
    console.log('Created Like:', like.toJSON());

    const comment = await Comment.create({ content: 'Nice post!', commenterId: user.id, postId: post.id });
    console.log('Created Comment:', comment.toJSON());
  } catch (error) {
    console.error('Error testing models:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
    console.log('Database connection closed.');
  }
}

// Execute the test
testModels();