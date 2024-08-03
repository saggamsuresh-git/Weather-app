import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { fetchWeather } from '../api'; // Adjust path if necessary

const WeatherForm = ({ setWeatherData }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before new request
    setLoading(true); // Set loading state to true

    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (error) {
      setError('Failed to fetch weather data. Please check the city name or try again later.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={loading} className="mt-2">
        {loading ? 'Loading...' : 'Get Weather'}
      </Button>
      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    </Form>
  );
};

export default WeatherForm;
