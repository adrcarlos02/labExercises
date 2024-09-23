// app.js
const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json'); // Swagger documentation
const productRoutes = require('./routes/productRoutes'); // Routes for the API

const app = express();
const port = 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Use Swagger for API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Use product routes for API calls
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});