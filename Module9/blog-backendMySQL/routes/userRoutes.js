// routes/userRoutes.js
import express from 'express';
import { register, login } from '../controller/userController.js';

const router = express.Router();

// Register a new user
router.post('/register', register);

// Login user
router.post('/login', login);

export default router;