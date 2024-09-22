// app.js - new file at top level
const express = require('express')  // Step 1: Import the Express framework
const app = express()               // Step 2: Create an instance of the Express app
const port = 3000                   // Step 3: Define the port (though not used here, it will be used in index.js)

// Step 4: Import routes for the calculator
// The './routes/calculatorRoutes' points to a separate file that will handle routes for the calculator
const calculatorRoutes = require('./routes/calculatorRoutes');

// Step 5: Map the routes to the app
// All routes that start with '/calculator' will be handled by calculatorRoutes
app.use('/calculator', calculatorRoutes);

// Step 6: Export the app
// We export the `app` object so that other files, such as `index.js`, can use it.
module.exports = app;