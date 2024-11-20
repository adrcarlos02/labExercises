import express from 'express';
import { getWeatherByCity } from '../controller/weatherController.js';

const router = express.Router();

// Route for query parameters
router.get('/', getWeatherByCity); // Example: GET /api/weather?city=London

// Route for path parameters
router.get('/:city', getWeatherByCity); // Example: GET /api/weather/London

export default router;