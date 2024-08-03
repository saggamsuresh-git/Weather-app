// utils/apiClient.js
const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://api.tomorrow.io/v4/weather/realtime', // Base URL for Tomorrow.io API
  timeout: 5000,
});

module.exports = apiClient;
