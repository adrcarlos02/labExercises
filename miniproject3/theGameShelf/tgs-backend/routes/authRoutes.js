// routes/userRoutes.js

import express from 'express';
import { body } from 'express-validator';
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
router.put(
  '/:id',
  authenticateToken,
  [
    body('email').optional().isEmail().withMessage('Invalid email format.'),
    body('mobileNumber')
      .optional()
      .matches(/^(\+?61|0)4\d{8}$/)
      .withMessage('Invalid Australian mobile number format.'),
    body('password')
      .optional()
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long.'),
    body('role').optional().isIn(['user', 'admin']).withMessage('Invalid role.'),
  ],
  updateUser
);

// Delete user (authenticated user or admin)
router.delete('/:id', authenticateToken, deleteUser);

export default router;