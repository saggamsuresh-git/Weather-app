// controllers/weatherController.js
const axios = require('axios');
const config = require('../config/config');

const getWeather = async (req, res) => {
  try {
    const { city } = req.query;
    const response = await axios.get('https://api.tomorrow.io/v4/weather/realtime', {
      params: {
        location: city, // Ensure this matches the parameter expected by Tomorrow.io API
        apikey: config.apiKey // API key for Tomorrow.io
      },
      headers: {
        'accept': 'application/json'
      }
    });

    // Log response data for debugging
    console.log(response.data);

    // Send the response data to the frontend
    res.json(response.data);
  } catch (error) {
    // Log and handle errors
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
};

module.exports = { getWeather };
