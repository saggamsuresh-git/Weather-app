import React from 'react';
import '../styles/WeatherInfo.css';
import weatherCodeData from './WeatherCode.json';

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) {
    return <p>No weather data available</p>;
  }

  const { data, location } = weatherData;
  const { values } = data;
  const { temperature, humidity, windSpeed, weatherCode } = values;

  const getBackgroundClass = () => {
    if (weatherCode === 1001) return 'clear-bg'; // Assuming code 1001 means clear weather
    if (values.cloudCover > 50) return 'rainy-bg'; // If cloud cover is high
    if (weatherCode >= 1000 && weatherCode < 2000) return 'snowy-bg'; // Example snowy condition
    return 'default-bg';
  };

  const getWeatherDescription = () => {
    return weatherCodeData.weatherCode[weatherCode] || 'Unknown Condition';
  };

  return (
    <div >
      <div className="weather-info-content">
        <h2>Weather in {location.name}</h2>
        <p>Temperature: {temperature.toFixed(1)}°C</p>
        <p>Condition: {getWeatherDescription()}</p>
        <p>Wind Speed: {windSpeed.toFixed(1)} m/s</p>
        <p>Humidity: {humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
