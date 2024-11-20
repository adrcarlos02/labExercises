// controllers/userController.js
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';

dotenv.config();

// Helper function to generate JWT
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

// Register a new user
export const register = [
  // Validation rules
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters.'),
  body('email').isEmail().withMessage('Please provide a valid email.'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters.'),

  // Controller logic
  async (req, res) => {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { username, email, password } = req.body;

      // Check if user exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use.' });
      }

      // Create user
      const user = await User.create({ username, email, password });

      // Generate token
      const token = generateToken(user);

      res.status(201).json({ token });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  }
];

// Login user
export const login = [
  // Validation rules
  body('email').isEmail().withMessage('Please provide a valid email.'),
  body('password').notEmpty().withMessage('Password is required.'),

  // Controller logic
  async (req, res) => {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;

      // Find user
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials.' });
      }

      // Check password
      const isMatch = await user.validPassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials.' });
      }

      // Generate token
      const token = generateToken(user);

      res.status(200).json({ token });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  }
];