import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = async (req, res, next) => {
  try {
    // Extract token from the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authorization header missing or malformed.' });
    }

    const token = authHeader.split(' ')[1]; // Extract token part after "Bearer"
    if (!token) {
      return res.status(401).json({ message: 'No token provided, authorization denied.' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user in the database
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found, authorization denied.' });
    }

    // Attach user object to the request
    req.user = user;
    next();
  } catch (error) {
    console.error('Authorization error:', error);

    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired, please log in again.' });
    }

    res.status(401).json({ message: 'Token is invalid.' });
  }
};

export default authMiddleware;