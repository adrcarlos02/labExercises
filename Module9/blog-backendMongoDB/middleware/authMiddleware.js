// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;

  // Check for token in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
    console.log('Token found:', token);
  } else {
    console.warn('No token provided');
    return res.status(403).json({ message: 'Access to the resource is prohibited.' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token decoded:', decoded);

    // Attach user to request
    req.user = await User.findById(decoded.id).select('-password');
    console.log('Authenticated user:', req.user);

    if (!req.user) {
      console.warn('User not found');
      return res.status(403).json({ message: 'Access to the resource is prohibited.' });
    }

    next();
  } catch (err) {
    console.error('Token verification failed:', err.message);
    return res.status(403).json({ message: 'Access to the resource is prohibited.' });
  }
};