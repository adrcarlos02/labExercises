const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

// Add route
router.get('/add', calculatorController.add);

// Subtract route
router.get('/subtract', calculatorController.subtract);

// Multiply route
router.get('/multiply', calculatorController.multiply);

// Divide route
router.get('/divide', calculatorController.divide);

module.exports = router;