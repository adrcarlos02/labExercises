// routes/likeRoutes.js
const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/posts/:postId/like
// @desc    Like a post
// @access  Private
router.post('/posts/:postId/like', protect, likeController.likePost);

// @route   POST /api/posts/:postId/unlike
// @desc    Unlike a post
// @access  Private
router.post('/posts/:postId/unlike', protect, likeController.unlikePost);

// @route   GET /api/posts/:postId/likes
// @desc    Get likes for a post
// @access  Public
router.get('/posts/:postId/likes', likeController.getLikes);

module.exports = router;