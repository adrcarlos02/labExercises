// routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/posts/:postId/comments
// @desc    Add a comment to a post
// @access  Private
router.post('/posts/:postId/comments', protect, commentController.addComment);

// @route   GET /api/posts/:postId/comments
// @desc    Get comments for a post
// @access  Public
router.get('/posts/:postId/comments', commentController.getComments);

// @route   DELETE /api/comments/:id
// @desc    Delete a comment
// @access  Private
router.delete('/comments/:id', protect, commentController.deleteComment);

module.exports = router;