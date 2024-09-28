//Exercise 7: Part 3 : Create a generic library for logging - pass a message to be logged, this will contain at least the ID of the caller, and the result. Log to the console every call made.


// loggerLib.js

exports.log = (id, operation, result) => {
  console.log(`ID: ${id}, Operation: ${operation}, Result: ${result}`);
};