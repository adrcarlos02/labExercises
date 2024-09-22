// Function to calculate the square of a number
function square(a) {
  return a * a;
}

// Function to calculate the square root of a number
function squareRoot(a) {
  return Math.sqrt(a);
}

// Export both functions so they can be imported in the test file
module.exports = { square, squareRoot };