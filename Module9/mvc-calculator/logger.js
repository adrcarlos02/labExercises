//logger.js
//Why create this?
//Provides a generic logging mechanism to log operations.

const log = (id, operation, result) => {
  console.log(`ID: ${id}, Operation: ${operation}, Result: ${result}`);
};

export default { log };

//How does this work?
//Explanation:
	// •	Defines a log function that logs the operation details to the console.
	// •	Exports the log function as a default export for use across the application.