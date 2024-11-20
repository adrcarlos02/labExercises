import axios from 'axios';

const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';

export const getWeatherByCity = async (req, res) => {
  try {
    const city = req.query.city || req.params.city;

    if (!city) {
      return res.status(400).json({ message: 'City is required' });
    }

    console.log('Fetching weather for city:', city);
    console.log('Using API Key:', process.env.WEATHER_API_KEY);

    const url = `${BASE_URL}?key=${process.env.WEATHER_API_KEY}&q=${city}`
    const response = await axios.get(url);

    console.log(response);

    const { name, main, weather } = response.data;

    res.status(200).json({
      city: name,
      temperature: main.temp,
      description: weather[0].description,
    });
  } catch (error) {
    console.error('Weather API Error:', error.response?.data || error.message);

    if (error.response?.status === 401) {
      return res.status(401).json({ message: 'Invalid API key. Please check your API key.' });
    } else if (error.response?.status === 404) {
      return res.status(404).json({ message: 'City not found.' });
    }

    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};