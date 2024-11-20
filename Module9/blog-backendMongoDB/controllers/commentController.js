// controllers/commentController.js
const Comment = require('../models/Comment');
const Post = require('../models/Post');

// Add a comment to a post
exports.addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const postId = req.params.postId;
    
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    
    const comment = new Comment({
      post: postId,
      commenter: req.user.id,
      text,
    });
    
    await comment.save();
    
    // Add comment to post's comments array
    post.comments.push(comment._id);
    await post.save();
    
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Get comments for a post
exports.getComments = async (req, res) => {
  try {
    const postId = req.params.postId;
    
    const comments = await Comment.find({ post: postId })
      .populate('commenter', 'username')
      .sort({ createdAt: -1 });
    
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    
    const comment = await Comment.findById(commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });
    
    // Check if the user is the commenter
    if (comment.commenter.toString() !== req.user.id)
      return res.status(401).json({ message: 'Unauthorized' });
    
    await comment.remove();
    
    // Remove comment from post's comments array
    await Post.findByIdAndUpdate(comment.post, { $pull: { comments: commentId } });
    
    res.json({ message: 'Comment removed' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};