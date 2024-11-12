// middleware/authMiddleware.js

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const autheticationToken = (req, res, next) => {
  const token = req.cookies.token || req.headers["authorization"];
  if (!token)
    return res.status(401).json({ error: "Access denied. No token provided." });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(400).json({ error: "Invalid token." });
    req.user = decoded;
    next();
  });
};

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin")
    return res.status(403).json({
      error: "Access denied. Admins only.",
    });
  next();
};
