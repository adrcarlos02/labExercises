// Import the functions from square.js
const { square, squareRoot } = require('./square');

// Test the square function
test('square 5 to get 25', () => {
  expect(square(5)).toBe(25);
});

// Test the squareRoot function
test('squareRoot of 25 to get 5', () => {
  expect(squareRoot(25)).toBe(5);
});

//How does Jest know what’s a test file?
// First: any files in a directory with the name __test__ are considered a test. If you put a JavaScript file in one of these folders, Jest will try to run it.
// Second: Jest will recognize any file with the suffix .spec.js or .test.js. It will search your entire repository for any files matching this pattern, and include them when the npm test command is run.