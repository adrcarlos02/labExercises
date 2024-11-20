// routes/calculatorRoutes.js
//why is this necessary? 
//Defines the endpoints and maps them to controller actions.


import express from 'express';
import { add, subtract, multiply, divide } from '../controllers/calculatorController.js';
import path from 'path';
import { fileURLToPath } from 'url';

// To use __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Define routes for calculator operations
router.get('/add', add);
router.get('/subtract', subtract);
router.get('/multiply', multiply);
router.get('/divide', divide);

// Route to serve the calculator view
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/calculator.html'));
});

export default router;

//How does this work?
// Imports:
// •	Imports Express and destructures controller functions.
// •	Imports path and fileURLToPath to handle file paths in ES6 modules.
// •	Route Definitions:
// •	Maps each calculator operation endpoint (/add, etc.) to its respective controller function.
// •	Defines a root route (/) to serve the calculator.html view.
// Export:
// •	Exports the router as the default export for use in the main application file.

// Note: In ES6 modules, __dirname isn’t available by default. The provided method using fileURLToPath and path.dirname replicates its functionality.