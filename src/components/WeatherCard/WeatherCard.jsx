import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';

import './WeatherCard.css';

export default function WeatherCard() {
  const { condition, city, error, isLoading } = useContext(WeatherContext);

  if (error) {
    return (
      <div className="weather-container">
        <div className="condition-box">
          <h1>Some error occurred while fetching data. Please try again</h1>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="weather-container">
        <div className="condition-box">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="weather-container">

      <div className="condition-box">
        <h1>{condition.text}</h1>
      </div>
      <div className="temperature-box">
        <h1>{condition.temperature}</h1>
        <h2>°C</h2>
      </div>
      <div className="city-box">
        <h1>{city}</h1>
      </div>
    </div>
  );
}
