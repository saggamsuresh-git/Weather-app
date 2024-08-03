import axios from 'axios';

const API_URL = 'https://api.tomorrow.io/v4/weather/realtime';
const API_KEY = '1grXU5ktpcbWdq2DFd8Ftgm69f84Jxdn'; // Replace with your actual API key

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        location: city, // Assuming `city` is the location
        apikey: API_KEY
      },
      headers: {
        'accept': 'application/json'
      }
    });

    // Check if the response data is valid
    if (response.data && response.data.data) {
        console.log(response.data)
      return response.data;
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    // Handle errors related to the API request
    console.error('Error fetching weather data:', error.message);
    throw error; // Rethrow the error to be handled by the calling function
  }
};
