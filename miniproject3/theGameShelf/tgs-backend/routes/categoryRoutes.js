// routes/categoryRoutes.js

import express from 'express';
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/categoryController.js';
import { authenticateToken, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get all categories (authenticated users)
router.get('/', authenticateToken, getAllCategories);

// Get category by ID (authenticated users)
router.get('/:id', authenticateToken, getCategoryById);

// Create category (admin only)
router.post('/', authenticateToken, isAdmin, createCategory);

// Update category (admin only)
router.put('/:id', authenticateToken, isAdmin, updateCategory);

// Delete category (admin only)
router.delete('/:id', authenticateToken, isAdmin, deleteCategory);

export default router;