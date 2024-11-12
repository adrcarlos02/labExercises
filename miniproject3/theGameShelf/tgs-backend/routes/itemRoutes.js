// routes/itemRoutes.js

import express from 'express';
import { body, param } from 'express-validator';
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  borrowItem,
  returnItem,
} from '../controllers/itemController.js';
import { authenticateToken, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get all items
router.get('/', getAllItems);

// Get item by ID
router.get('/:id', [
  param('id').isInt().withMessage('Item ID must be an integer.')
], getItemById);

// Create item (admin only)
router.post(
  '/',
  authenticateToken,
  isAdmin,
  [
    body('title').notEmpty().withMessage('Title is required.'),
    body('description').optional().isString(),
    body('categoryId').isInt().withMessage('Category ID must be an integer.'),
  ],
  createItem
);

// Update item (admin only)
router.put(
  '/:id',
  authenticateToken,
  isAdmin,
  [
    param('id').isInt().withMessage('Item ID must be an integer.'),
    body('title').optional().notEmpty().withMessage('Title cannot be empty.'),
    body('description').optional().isString(),
    body('categoryId').optional().isInt().withMessage('Category ID must be an integer.'),
  ],
  updateItem
);

// Delete item (admin only)
router.delete('/:id', authenticateToken, isAdmin, deleteItem);

// Borrow an item (authenticated user)
router.post('/:id/borrow', authenticateToken, [
  param('id').isInt().withMessage('Item ID must be an integer.'),
], borrowItem);

// Return an item (authenticated user)
router.post('/:id/return', authenticateToken, [
  param('id').isInt().withMessage('Item ID must be an integer.'),
], returnItem);

export default router;