// routes/borrowHistoryRoutes.js

import express from 'express';
import { param } from 'express-validator';
import {
  getAllBorrowHistories,
  getUserBorrowHistories,
  getItemBorrowHistories,
} from '../controllers/borrowHistoryController.js';
import { authenticateToken, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

/**
 * @route   GET /api/borrow-histories
 * @desc    Get all borrow histories
 * @access  Admin
 */
router.get('/', authenticateToken, isAdmin, getAllBorrowHistories);

/**
 * @route   GET /api/borrow-histories/user/:userId
 * @desc    Get borrow histories for a specific user
 * @access  Authenticated User or Admin
 */
router.get(
  '/user/:userId',
  authenticateToken,
  [
    param('userId')
      .isInt()
      .withMessage('User ID must be an integer.'),
  ],
  getUserBorrowHistories
);

/**
 * @route   GET /api/borrow-histories/item/:itemId
 * @desc    Get borrow histories for a specific item
 * @access  Admin
 */
router.get(
  '/item/:itemId',
  authenticateToken,
  isAdmin,
  [
    param('itemId')
      .isInt()
      .withMessage('Item ID must be an integer.'),
  ],
  getItemBorrowHistories
);

export default router;