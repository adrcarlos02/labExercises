// routes/userRoutes.js

import express from 'express';
import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';
import { authenticateToken, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get all users (admin only)
router.get('/', authenticateToken, isAdmin, getAllUsers);

// Get user by ID (authenticated user or admin)
router.get('/:id', authenticateToken, getUserById);

// Update user (authenticated user or admin)
router.put('/:id', authenticateToken, updateUser);

// Delete user (authenticated user or admin)
router.delete('/:id', authenticateToken, deleteUser);

export default router;