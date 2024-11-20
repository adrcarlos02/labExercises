// controllers/postController.js
const Post = require("../models/Post");
const Like = require("../models/Like");
const Comment = require("../models/Comment");

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? req.file.path : null;

    const post = new Post({
      author: req.user.id,
      title,
      description,
      image,
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "username email")
      .populate({
        path: "likes",
        populate: { path: "liker", select: "username" },
      })
      .populate({
        path: "comments",
        populate: { path: "commenter", select: "username" },
      })
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("author", "username email")
      .populate({
        path: "likes",
        populate: { path: "liker", select: "username" },
      })
      .populate({
        path: "comments",
        populate: { path: "commenter", select: "username" },
      });

    if (!post) return res.status(404).json({ message: "Post not found" });

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Update a post
exports.updatePost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? req.file.path : null;

    let post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    // Check if the user is the author
    if (post.author.toString() !== req.user.id)
      return res.status(401).json({ message: "Unauthorized" });

    post.title = title || post.title;
    post.description = description || post.description;
    if (image) post.image = image;

    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    // Check if the user is the author
    if (post.author.toString() !== req.user.id)
      return res.status(401).json({ message: "Unauthorized" });

    // Delete associated likes and comments
    await Like.deleteMany({ post: post._id });
    await Comment.deleteMany({ post: post._id });

    await post.deleteOne();
    res.json({ message: "Post removed" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};
