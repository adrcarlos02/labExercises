// routes/postRoutes.js
import express from 'express';
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
} from '../controller/postController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

// Create a new post
router.post('/', authMiddleware, upload.single('image'), createPost);

// Get all posts
router.get('/', getAllPosts);

// Get a single post by ID
router.get('/:id', getPostById);

// Update a post
router.put('/:id', authMiddleware, upload.single('image'), updatePost);

// Delete a post
router.delete('/:id', authMiddleware, deletePost);

export default router;