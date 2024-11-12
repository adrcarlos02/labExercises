// middleware/authMiddleware.js

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticateToken = (req, res, next) => {
  // Get token from cookie or authorization header
  const token = req.cookies.token || req.headers["authorization"]?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token." });

    // Attach decoded user data to the request object
    req.user = decoded;
    next();
  });
};

export const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied. Admins only." });
  }
  next();
};