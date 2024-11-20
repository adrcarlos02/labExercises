// routes/likeRoutes.js
import express from 'express';
import { likePost, unlikePost } from '../controller/likeController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Like a post
router.post('/:postId/like', authMiddleware, likePost);

// Unlike a post
router.delete('/:postId/unlike', authMiddleware, unlikePost);

export default router;