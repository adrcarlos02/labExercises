import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize from './config/database.js';

import { User, Post, Like, Comment } from './models/index.js';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import likeRoutes from './routes/likeRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import weatherRoutes from './routes/weatherRoutes.js';

import AppError from './utils/AppError.js'; // Import the custom error class

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve static files (for images)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads/images', express.static(path.join(__dirname, 'uploads', 'images')));

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the Blog API',
  });
});

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/posts', likeRoutes); // Liking/unliking is nested under posts
app.use('/api/posts', commentRoutes); // Comments are nested under posts
app.use('/api/weather', weatherRoutes);

// Handle undefined routes
app.all('*', (req, res, next) => {
  // Use next() to pass an error to the error handler
  next(new AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
});

// Error handling middleware (enhanced)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
  } else {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
  }
});

// Start the server
const PORT = process.env.PORT || 5002;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected...');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();