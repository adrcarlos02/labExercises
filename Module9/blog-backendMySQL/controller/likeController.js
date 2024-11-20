// controllers/likeController.js
import { Like, Post, User } from '../models/index.js';

// Like a post
export const likePost = async (req, res) => {
  try {
    const postId = req.params.postId;

    // Validate ID
    if (isNaN(postId)) {
      return res.status(400).json({ message: 'Invalid Post ID.' });
    }

    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found.' });
    }

    // Check if the user has already liked the post
    const existingLike = await Like.findOne({
      where: {
        postId: post.id,
        likerId: req.user.id
      }
    });

    if (existingLike) {
      return res.status(400).json({ message: 'You have already liked this post.' });
    }

    // Create like
    const like = await Like.create({
      postId: post.id,
      likerId: req.user.id
    });

    res.status(201).json(like);
  } catch (error) {
    console.error('Error liking post:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Unlike a post
export const unlikePost = async (req, res) => {
  try {
    const postId = req.params.postId;

    // Validate ID
    if (isNaN(postId)) {
      return res.status(400).json({ message: 'Invalid Post ID.' });
    }

    const like = await Like.findOne({
      where: {
        postId,
        likerId: req.user.id
      }
    });

    if (!like) {
      return res.status(404).json({ message: 'Like not found.' });
    }

    await like.destroy();

    res.status(200).json({ message: 'Post unliked successfully.' });
  } catch (error) {
    console.error('Error unliking post:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};