import { Item, Category, BorrowHistory, User } from '../models/index.js';
import { Op } from 'sequelize';

/**
 * @desc    Get all items
 * @route   GET /api/items
 * @access  Public
 */
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll({
      attributes: ['id', 'title', 'description', 'status', 'photo', 'categoryId', 'createdAt', 'updatedAt'],
      include: [
        { model: Category, as: 'category', attributes: ['id', 'name'] },
        { model: User, as: 'borrower', attributes: ['id', 'name', 'email'] },
      ],
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @desc    Get item by ID
 * @route   GET /api/items/:id
 * @access  Public
 */
export const getItemById = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id, {
      attributes: ['id', 'title', 'description', 'status', 'photo', 'categoryId', 'createdAt', 'updatedAt'],
      include: [
        { model: Category, as: 'category', attributes: ['id', 'name'] },
        { model: User, as: 'borrower', attributes: ['id', 'name', 'email'] },
      ],
    });
    if (!item) return res.status(404).json({ error: 'Item not found.' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @desc    Create a new item
 * @route   POST /api/items
 * @access  Admin
 */
export const createItem = async (req, res) => {
  try {
    const { title, description, categoryId } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    // Validate category
    if (categoryId) {
      const category = await Category.findByPk(categoryId);
      if (!category) return res.status(400).json({ error: 'Invalid category ID.' });
    }

    const item = await Item.create({ title, description, categoryId, photo });
    res.status(201).json({ message: 'Item created successfully.', item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @desc    Update an existing item
 * @route   PUT /api/items/:id
 * @access  Admin
 */
export const updateItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found.' });

    const { title, description, categoryId } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : item.photo;

    // Validate category
    if (categoryId) {
      const category = await Category.findByPk(categoryId);
      if (!category) return res.status(400).json({ error: 'Invalid category ID.' });
    }

    Object.assign(item, { title, description, categoryId, photo });
    await item.save();

    res.json({ message: 'Item updated successfully.', item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @desc    Delete an item
 * @route   DELETE /api/items/:id
 * @access  Admin
 */
export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found.' });

    if (item.status === 'borrowed') {
      return res.status(400).json({ error: 'Cannot delete an item that is currently borrowed.' });
    }

    await item.destroy();
    res.json({ message: 'Item deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @desc    Borrow an item
 * @route   POST /api/items/:id/borrow
 * @access  Authenticated User
 */
export const borrowItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found.' });

    if (item.status !== 'available') {
      return res.status(400).json({ error: 'Item is not available for borrowing.' });
    }

    item.status = 'borrowed';
    item.borrowerId = req.user.userId;

    await item.save();

    await BorrowHistory.create({
      userId: req.user.userId,
      itemId: item.id,
      borrowDate: new Date(),
    });

    res.json({ message: 'Item borrowed successfully.', item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @desc    Return an item
 * @route   POST /api/items/:id/return
 * @access  Authenticated User
 */
export const returnItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found.' });

    if (item.status !== 'borrowed' || item.borrowerId !== req.user.userId) {
      return res.status(400).json({ error: 'You cannot return this item.' });
    }

    item.status = 'available';
    item.borrowerId = null;

    await item.save();

    const borrowRecord = await BorrowHistory.findOne({
      where: {
        userId: req.user.userId,
        itemId: item.id,
        returnDate: { [Op.is]: null },
      },
    });

    if (borrowRecord) {
      borrowRecord.returnDate = new Date();
      await borrowRecord.save();
    }

    res.json({ message: 'Item returned successfully.', item });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};