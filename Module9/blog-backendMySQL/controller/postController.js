// controllers/postController.js
import { Post, User, Like, Comment } from '../models/index.js';

// Create a new post
export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? req.file.filename : null;

    // Validate input
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required.' });
    }

    // Create post
    const post = await Post.create({
      title,
      description,
      image,
      authorId: req.user.id
    });

    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'email']
        },
        {
          model: Like,
          as: 'likes',
          include: [
            {
              model: User,
              as: 'liker',
              attributes: ['id', 'username']
            }
          ]
        },
        {
          model: Comment,
          as: 'comments',
          include: [
            {
              model: User,
              as: 'commenter',
              attributes: ['id', 'username']
            }
          ]
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Get a single post by ID
export const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;

    // Validate ID
    if (isNaN(postId)) {
      return res.status(400).json({ message: 'Invalid Post ID.' });
    }

    const post = await Post.findByPk(postId, {
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['id', 'username', 'email']
        },
        {
          model: Like,
          as: 'likes',
          include: [
            {
              model: User,
              as: 'liker',
              attributes: ['id', 'username']
            }
          ]
        },
        {
          model: Comment,
          as: 'comments',
          include: [
            {
              model: User,
              as: 'commenter',
              attributes: ['id', 'username']
            }
          ]
        }
      ]
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found.' });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Update a post
export const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, description } = req.body;
    const image = req.file ? req.file.filename : null;

    // Validate ID
    if (isNaN(postId)) {
      return res.status(400).json({ message: 'Invalid Post ID.' });
    }

    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found.' });
    }

    // Check if the logged-in user is the author
    if (post.authorId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized to update this post.' });
    }

    // Update fields
    post.title = title || post.title;
    post.description = description || post.description;
    post.image = image || post.image;

    await post.save();

    res.status(200).json(post);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;

    // Validate ID
    if (isNaN(postId)) {
      return res.status(400).json({ message: 'Invalid Post ID.' });
    }

    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found.' });
    }

    // Check if the logged-in user is the author
    if (post.authorId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized to delete this post.' });
    }

    // Delete associated likes and comments
    await Like.destroy({ where: { postId: post.id } });
    await Comment.destroy({ where: { postId: post.id } });

    // Delete the post
    await post.destroy();

    res.status(200).json({ message: 'Post deleted successfully.' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};