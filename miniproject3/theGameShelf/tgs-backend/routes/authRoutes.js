import express from 'express';
import { body } from 'express-validator';
import { register, login, logout } from '../controllers/authController.js';

const router = express.Router();

// Registration route with validation and sanitization
router.post(
  '/register',
  [
    body('name')
      .trim()
      .escape()
      .notEmpty()
      .withMessage('Name is required.'),
    body('email')
      .normalizeEmail()
      .isEmail()
      .withMessage('Invalid email format.'),
    body('mobileNumber')
      .trim()
      .matches(/^(\+?61|0)4\d{8}$/)
      .withMessage('Invalid Australian mobile number format.'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long.'),
    body('role')
      .optional()
      .isIn(['user', 'admin'])
      .withMessage('Role must be either user or admin.'),
  ],
  register
);

// Login route with validation and sanitization
router.post(
  '/login',
  [
    body('identifier')
      .trim()
      .escape()
      .notEmpty()
      .withMessage('Email or mobile number is required.'),
    body('password')
      .escape()
      .notEmpty()
      .withMessage('Password is required.'),
  ],
  login
);

// Logout route (no validation needed)
router.post('/logout', logout);

export default router;