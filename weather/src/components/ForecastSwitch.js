// components/ForecastSwitch.js

import React from 'react';
import '../App.css';

const ForecastSwitch = () => {
  return (
    <div>
      <label>
        <input type="radio" name="forecastType" value="current" /> Погода на сегодня
      </label>
      <label>
        <input type="radio" name="forecastType" value="5days" /> Погода на 5 дней
      </label>
    </div>
  );
};

export default ForecastSwitch;

