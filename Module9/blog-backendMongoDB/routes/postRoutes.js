// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// File filter to accept images only
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  }
  cb(new Error('Only images are allowed'));
};

const upload = multer({ storage, fileFilter });

// Public Routes
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);

// Protected Routes
router.post('/', protect, upload.single('image'), postController.createPost);
router.put('/:id', protect, upload.single('image'), postController.updatePost);
router.delete('/:id', protect, postController.deletePost);

module.exports = router;