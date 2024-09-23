// controllers/calculatorController.js
const calculatorLib = require('../calculatorLib'); // Import the library
const loggerLib = require('../loggerLib'); // Import the logger

exports.add = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const sum = calculatorLib.add(number1, number2); // Use the library function
  const id = calculatorLib.generateRandomID(); // Generate a random ID
    loggerLib.log(id, 'Addition', sum); // Log the operation
  res.json({ result: sum });
};

exports.subtract = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const difference = calculatorLib.subtract(number1, number2); // Use the library function
  const id = calculatorLib.generateRandomID(); // Generate a random ID
  loggerLib.log(id, 'Subtraction', difference); // Log the operation
  res.json({ result: difference });
};

exports.multiply = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  const product = calculatorLib.multiply(number1, number2); // Use the library function
  const id = calculatorLib.generateRandomID(); // Generate a random ID
  loggerLib.log(id, 'Multiplication', product); // Log the operation
  res.json({ result: product });
};

exports.divide = (req, res) => {
  const number1 = parseInt(req.query.num1);
  const number2 = parseInt(req.query.num2);
  try {
    const quotient = calculatorLib.divide(number1, number2); // Use the library function
    const id = calculatorLib.generateRandomID(); // Generate a random ID
    loggerLib.log(id, 'Division', quotient); // Log the operation
    res.json({ result: quotient });
  } catch (error) {
    res.json({ error: error.message });
  }
};