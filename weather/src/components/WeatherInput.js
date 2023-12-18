// WeatherInput.js
import React, { forwardRef } from 'react';
import '../App.css';

const WeatherInput = forwardRef(({ onCityChange }, ref) => {
  const handleChange = (event) => {
    const city = event.target.value;
    onCityChange(city);
  };

  return (
    <div>
      <label htmlFor="cityInput">Введите город:</label>
      <input ref={ref} type="text" id="cityInput" onChange={handleChange} />
    </div>
  );
});

export default WeatherInput;
