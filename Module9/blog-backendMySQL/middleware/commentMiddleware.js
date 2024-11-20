import { Comment } from '../models/index.js';

// Middleware to check if the user owns the comment
export const authorizeComment = async (req, res, next) => {
  try {
    const { id } = req.params; // Comment ID from the route
    const comment = await Comment.findByPk(id);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if the comment belongs to the authenticated user
    if (comment.commenterId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized to manage this comment' });
    }

    req.comment = comment; // Attach the comment to the request
    next();
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};