// WeatherWidget.js
import React, { useRef, useState } from 'react';
import WeatherInput from './WeatherInput';
import LocationButton from './LocationButton';
import ForecastSwitch from './ForecastSwitch';
import WeatherInfo from './WeatherInfo';
import WeatherButton from './WeatherButton';
import '../App.css';

const WeatherWidget = ({ onCityChange, onLocationChange, selectedCity, selectedLocation }) => {
  const cityInputRef = useRef(null);
  const [weatherData, setWeatherData] = useState(null);

useState(null);
  const [lastRequestType, setLastRequestType] = useState(null);

  const handleCityChange = () => {
    const newCity = cityInputRef.current.value;
    onCityChange(newCity);
    onLocationChange(''); // Очищаем координаты при вводе города
  };

  const handleWeatherDataChange = (data, requestType) => {
    setWeatherData(data);
    setLastRequestType(requestType);
  };


  console.log('weatherData:', weatherData);
console.log('lastRequestType:', lastRequestType);

  return (
    <div className="WeatherWidget">
      <WeatherInput ref={cityInputRef} onCityChange={handleCityChange} />
      <WeatherButton onWeatherDataChange={handleWeatherDataChange} />
      <ForecastSwitch />
      <LocationButton onLocationChange={onLocationChange} onWeatherDataChange={handleWeatherDataChange} />
      <WeatherInfo weatherData={weatherData} lastRequestType={lastRequestType} />
    </div>
  );
};

export default WeatherWidget;
