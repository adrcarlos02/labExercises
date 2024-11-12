// controllers/userController.js

import { User } from '../models/index.js';
import bcrypt from 'bcryptjs';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
    });
    if (!user) return res.status(404).json({ error: 'User not found.' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    // Only allow the user to update their own profile or admin
    if (req.user.userId !== userId && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied.' });
    }

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: 'User not found.' });

    const { name, mobileNumber, email, password, role } = req.body;

    if (name) user.name = name;
    if (mobileNumber) user.mobileNumber = mobileNumber;
    if (email) user.email = email;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 12);
      user.password = hashedPassword;
    }
    if (role && req.user.role === 'admin') user.role = role;
    if (req.file) user.profilePhoto = `/uploads/${req.file.filename}`;

    await user.save();

    res.json({ message: 'User updated successfully.', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    // Only allow the user to delete their own account or admin
    if (req.user.userId !== userId && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied.' });
    }

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: 'User not found.' });

    // Prevent deletion if the user has unreturned items
    const borrowedItems = await user.getBorrowedItems({ where: { status: 'borrowed' } });
    if (borrowedItems.length > 0) {
      return res.status(400).json({ error: 'Cannot delete account with unreturned items.' });
    }

    await user.destroy();

    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};