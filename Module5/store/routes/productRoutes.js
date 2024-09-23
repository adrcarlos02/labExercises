// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to get all products
router.get('/', productController.getProducts);

// Route to get a product by ID
router.get('/:id', productController.getProductById);

module.exports = router;