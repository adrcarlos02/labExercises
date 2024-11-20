// controllers/likeController.js
const Like = require('../models/Like');
const Post = require('../models/Post');

// Like a post
exports.likePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    
    // Check if user already liked the post
    const existingLike = await Like.findOne({ post: postId, liker: req.user.id });
    if (existingLike) return res.status(400).json({ message: 'Post already liked' });
    
    const like = new Like({
      post: postId,
      liker: req.user.id,
    });
    
    await like.save();
    
    // Add like to post's likes array
    post.likes.push(like._id);
    await post.save();
    
    res.status(201).json(like);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    
    const like = await Like.findOne({ post: postId, liker: req.user.id });
    if (!like) return res.status(400).json({ message: 'Post not liked yet' });
    
    await like.remove();
    
    // Remove like from post's likes array
    await Post.findByIdAndUpdate(postId, { $pull: { likes: like._id } });
    
    res.json({ message: 'Post unliked' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Get likes for a post
exports.getLikes = async (req, res) => {
  try {
    const postId = req.params.postId;
    
    const likes = await Like.find({ post: postId })
      .populate('liker', 'username')
      .sort({ createdAt: -1 });
    
    res.json(likes);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};