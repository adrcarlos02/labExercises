import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

import { sequelize } from './models/index.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import borrowHistoryRoutes from './routes/borrowHistoryRoutes.js'; // Import BorrowHistory routes

import { errorHandler } from './middleware/errorHandler.js'; // Import error handler
import { authenticateToken } from './middleware/authMiddleware.js';

dotenv.config();

const app = express();

// CORS middleware
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5174'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Apply helmet for security headers
app.use(helmet());

// Routes requiring authentication
app.use('/api/users', authenticateToken, userRoutes);
app.use('/api/items', authenticateToken, itemRoutes);
app.use('/api/categories', authenticateToken, categoryRoutes);
app.use('/api/borrow-histories', authenticateToken, borrowHistoryRoutes);

// Handle file uploads using Multer
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads/')); // Ensure uploads are stored in a consistent location
  },
  filename: function (req, file, cb) {
    // Generate a unique filename using timestamp and random number
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, and JPG are allowed.'));
    }
  },
  limits: { fileSize: 2 * 1024 * 1024 }, // Limit file size to 2MB
});

// Serve static files (e.g., uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', upload.single('profilePhoto'), userRoutes);
app.use('/api/items', upload.single('itemPhoto'), itemRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/borrow-histories', borrowHistoryRoutes); // Use BorrowHistory routes

// Global Error Handler
app.use(errorHandler);

// Sync database and start server
const PORT = process.env.PORT || 5001;

sequelize.sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });