import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import BackgroundImage from './components/BackgroundImage';
import './styles/App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="App">
      {/* <BackgroundImage weatherDescription={weatherData ? weatherData.weather.description : ''} /> */}
      <div className="container py-5">
        <h1 className="text-center mb-4">Weather Information Service</h1>
        <WeatherForm setWeatherData={setWeatherData} />
        {weatherData && <WeatherInfo weatherData={weatherData} />}
      </div>
    </div>
  );
}

export default App;
