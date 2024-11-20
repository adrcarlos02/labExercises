import { Comment } from '../models/index.js';


export const getAllComments = async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await Comment.findAll({
      where: { postId }, // Fetch comments for the specific post
      include: [
        {
          association: 'commenter', // Assuming you have defined a 'commenter' association
          attributes: ['username', 'email'], // Include commenter details
        },
      ],
      order: [['createdAt', 'ASC']], // Order comments by creation time
    });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Add a comment
export const addComment = async (req, res) => {
  try {
    const { content } = req.body;
    const { postId } = req.params;

    const comment = await Comment.create({
      content,
      postId,
      commenterId: req.user.id, // User ID from the authenticated user
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Update a comment
export const updateComment = async (req, res) => {
  try {
    const { content } = req.body;

    req.comment.content = content || req.comment.content; // Update the comment
    await req.comment.save();

    res.status(200).json(req.comment);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Delete a comment
export const deleteComment = async (req, res) => {
  try {
    await req.comment.destroy();
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};