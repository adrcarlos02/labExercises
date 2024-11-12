// controllers/borrowHistoryController.js

import { BorrowHistory, User, Item } from '../models/index.js';

/**
 * @desc    Get all borrow histories (Admin Only)
 * @route   GET /api/borrow-histories
 * @access  Admin
 */
export const getAllBorrowHistories = async (req, res) => {
  try {
    const histories = await BorrowHistory.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Item,
          as: 'item',
          attributes: ['id', 'title'],
        },
      ],
      order: [['borrowDate', 'DESC']],
    });
    res.json(histories);
  } catch (error) {
    console.error('Error fetching all borrow histories:', error);
    res.status(500).json({ error: 'Internal Server Error.' });
  }
};

/**
 * @desc    Get borrow histories for a specific user
 * @route   GET /api/borrow-histories/user/:userId
 * @access  Authenticated User or Admin
 */
export const getUserBorrowHistories = async (req, res) => {
  const { userId } = req.params;

  // If the requester is not an admin, ensure they can only access their own history
  if (req.user.role !== 'admin' && req.user.userId !== parseInt(userId)) {
    return res.status(403).json({ error: 'Access denied.' });
  }

  try {
    const histories = await BorrowHistory.findAll({
      where: { userId },
      include: [
        {
          model: Item,
          as: 'item',
          attributes: ['id', 'title'],
        },
      ],
      order: [['borrowDate', 'DESC']],
    });
    res.json(histories);
  } catch (error) {
    console.error(`Error fetching borrow histories for user ID ${userId}:`, error);
    res.status(500).json({ error: 'Internal Server Error.' });
  }
};

/**
 * @desc    Get borrow histories for a specific item
 * @route   GET /api/borrow-histories/item/:itemId
 * @access  Admin
 */
export const getItemBorrowHistories = async (req, res) => {
  const { itemId } = req.params;

  try {
    const histories = await BorrowHistory.findAll({
      where: { itemId },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name', 'email'],
        },
      ],
      order: [['borrowDate', 'DESC']],
    });
    res.json(histories);
  } catch (error) {
    console.error(`Error fetching borrow histories for item ID ${itemId}:`, error);
    res.status(500).json({ error: 'Internal Server Error.' });
  }
};