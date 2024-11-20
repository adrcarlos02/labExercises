import express from 'express';
import {
  addComment,
  deleteComment,
  getAllComments,
} from '../controller/commentController.js'; // Corrected the import path
import authMiddleware from '../middleware/authMiddleware.js'; // Corrected the middleware path

const router = express.Router();

// Add a comment to a post (authenticated users only)
router.post('/:postId/comments', authMiddleware, addComment);

// Get all comments for a post
router.get('/:postId/comments', getAllComments);

// Delete a comment (authenticated users only)
router.delete('/comments/:commentId', authMiddleware, deleteComment);

export default router;