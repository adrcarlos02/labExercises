import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs/swagger.json' assert { type: 'json' };
import calculatorRoutes from './routes/calculatorRoutes.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Allow requests from port 5500
app.use(cors({
  origin: ['http://localhost:5500', 'http://127.0.0.1:5500'], // Frontend URL
  methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods
}));

// Serve static files from the 'public' directory
app.use('/', express.static(path.join(__dirname, 'public')));

// Mount calculator routes under /api/calculator
app.use('/api/calculator', calculatorRoutes);

// Mount Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Catch-all route for undefined paths
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});