// controllers/authController.js

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/index.js';
import { Op } from 'sequelize';
import { validationResult } from 'express-validator';

dotenv.config();

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
export const register = async (req, res) => {
  // Handle validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, mobileNumber, email, password, role } = req.body;

  try {
    // Check if user already exists with email or mobileNumber
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ email }, { mobileNumber }],
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Email or mobile number already exists.' });
    }

    // Hash password with increased salt rounds for better security
    const hashedPassword = await bcrypt.hash(password, 12);

    // Prevent users from assigning themselves roles other than 'user'
    const userRole = role && role === 'admin' ? 'admin' : 'user';

    // Create user
    const newUser = await User.create({
      name,
      mobileNumber,
      email,
      password: hashedPassword,
      role: userRole,
    });

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ error: 'Internal Server Error.' });
  }
};

/**
 * @desc    Login a user
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = async (req, res) => {
  // Handle validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { identifier, password } = req.body; // 'identifier' can be email or mobile number

  try {
    // Find user by email or mobileNumber
    const user = await User.findOne({
      where: {
        [Op.or]: [{ email: identifier }, { mobileNumber: identifier }],
      },
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid email or mobile number.' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid password.' });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send token in cookie and response body
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 3600000, // 1 hour in milliseconds
    });

    res.json({ message: 'Logged in successfully.', token });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'Internal Server Error.' });
  }
};

/**
 * @desc    Logout a user
 * @route   POST /api/auth/logout
 * @access  Public
 */
export const logout = (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
    });
    res.json({ message: 'Logged out successfully.' });
  } catch (error) {
    console.error('Logout Error:', error);
    res.status(500).json({ error: 'Internal Server Error.' });
  }
};