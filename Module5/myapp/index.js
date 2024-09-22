const express = require('express');

// --- First App (Port 3000) ---

const app = express(); // Use 'app' for the first app
const port = 3000;

// Import the necessary routes for the first app
const testRoutes = require('./routes/myTestRoutes');
const calculatorRoutes = require('./routes/calculatorRoutes');

// parse requests of content-type - application/json
app.use(express.json());

// Map the test and calculator routes to the first app
app.use('/mytest', testRoutes);
app.use('/calculator', calculatorRoutes);

// Serve static content on port 3000
app.use('/', express.static('public'));

// Start the first app on port 3000
app.listen(port, () => {
    console.log(`App 1 listening at http://localhost:${port}`);
});


// --- Second App (Port 3001) for User Routes ---

const app2 = express(); // Use 'app2' for the second app
const port2 = 3001;

// Import the user routes for the second app
const userRoutes = require('./routes/userRoutes');

// parse requests of content-type - application/json for app2
app2.use(express.json());

// Map the user routes to the second app
app2.use('/users', userRoutes);

// Serve static content on port 3001 (optional)
app2.use('/', express.static('public'));

// Start the second app on port 3001
app2.listen(port2, () => {
  console.log(`App 2 listening at http://localhost:${port2}`);
});