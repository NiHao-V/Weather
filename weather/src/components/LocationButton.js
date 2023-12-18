// LocationButton.js
import React, { useState, useEffect } from 'react';
import '../App.css';

const LocationButton = ({ onLocationChange, onWeatherDataChange }) => {
  const [locationError, setLocationError] = useState(null);

  const getLocation = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            setLocationError(null);
            const coordinates = `${position.coords.latitude}, ${position.coords.longitude}`;

            const apiKey = '8b975ead09e9eed4d0a85f3a0af2ca78';
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`);
            const data = await response.json();

            // Передаем информацию о погоде в WeatherInfo.js с заголовком
            onWeatherDataChange && onWeatherDataChange(data, 'Погода по Вашей геолокации');

            // Передаем координаты
            onLocationChange && onLocationChange(coordinates);
          },
          (error) => {
            setLocationError('Включите геолокацию или введите название города вручную.');
            console.error('Location error:', error);
          }
        );
      } else {
        setLocationError('Ваш браузер не поддерживает геолокацию.\nВведите название города вручную.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    const errorTimeout = setTimeout(() => {
      setLocationError(null);
    }, 3000);

    return () => clearTimeout(errorTimeout);
  }, [locationError]);

  return (
    <div>
      <button onClick={getLocation} className="custom-btn btn">
        <span>Погода по Вашей геолокации</span>
      </button>
      {locationError && <p className={`LocationError ${locationError ? 'active' : ''}`}>{locationError}</p>}
    </div>
  );
};

export default LocationButton;
