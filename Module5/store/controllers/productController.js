// controllers/productController.js
const axios = require('axios');

exports.getProducts = async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data); // Send fetched data to front-end
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

exports.getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching product by ID' });
  }
};