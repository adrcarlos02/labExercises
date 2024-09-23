// calculatorLib.js - Library for basic calculator operations

exports.add = (number1, number2) => {
  return number1 + number2;
};

exports.subtract = (number1, number2) => {
  return number1 - number2;
};

exports.multiply = (number1, number2) => {
  return number1 * number2;
};

exports.divide = (number1, number2) => {
  if (number2 === 0) {
    throw new Error('Cannot divide by zero');
  }
  return number1 / number2;
};



// Function to generate a random ID
exports.generateRandomID = () => {
  return Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 1,000,000
};

// Other calculator functions...
exports.add = (number1, number2) => {
  return number1 + number2;
};

// (the rest of the functions remain the same)