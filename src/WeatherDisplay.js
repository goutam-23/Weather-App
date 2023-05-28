import React from 'react';
import './Weather.css';

const WeatherDisplay = ({ weatherData }) => {
  const { location, current } = weatherData;

  return (
    <div className='output'>
      <h2>{location.name}</h2>
      <p>Temperature: {current.temp_c}°C</p>
      <p>Condition: {current.condition.text}</p>
      <p>Wind: {current.wind_kph} km/h</p>
      <p>Humidity: {current.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
