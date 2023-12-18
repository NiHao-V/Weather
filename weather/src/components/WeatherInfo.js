// WeatherInfo.js

import React, { useEffect } from 'react';

const WeatherInfo = ({ lastRequestType, weatherData }) => {

  useEffect(() => {
    console.log('WeatherInfo updated:', lastRequestType, weatherData);
  }, [lastRequestType, weatherData]);

  // Функция для отображения температуры
  const renderTemperature = () => {
    if (weatherData && weatherData.main && weatherData.main.temp) {
      const temperatureCelsius = Math.round(weatherData.main.temp - 273.15); // Конвертируем в градусы Цельсия
      return <p>Температура: {temperatureCelsius}°C</p>;
    }
    return null;
  };

  // Функция для отображения описания погоды и иконки
  const renderWeatherDescription = () => {
    if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
      return (
        <div>
          <p>Описание погоды: {description}</p>
          <img src={iconUrl} alt="Weather Icon" />
        </div>
      );
    }
    return null;
  };

  // Функция для отображения давления
  const renderPressure = () => {
    if (weatherData && weatherData.main && weatherData.main.pressure) {
      return <p>Давление: {weatherData.main.pressure} hPa</p>;
    }
    return null;
  };

  // Функция для отображения влажности
  const renderHumidity = () => {
    if (weatherData && weatherData.main && weatherData.main.humidity) {
      return <p>Влажность: {weatherData.main.humidity}%</p>;
    }
    return null;
  };

  // Функция для отображения скорости ветра
  const renderWindSpeed = () => {
    if (weatherData && weatherData.wind && weatherData.wind.speed) {
      return <p>Скорость ветра: {weatherData.wind.speed} м/с</p>;
    }
    return null;
  };

  // Функция для отображения времени восхода и заката
  const renderSunriseSunset = () => {
    if (weatherData && weatherData.sys && weatherData.sys.sunrise && weatherData.sys.sunset) {
      const sunriseTimestamp = new Date(weatherData.sys.sunrise * 1000);
      const sunsetTimestamp = new Date(weatherData.sys.sunset * 1000);
      const formatTime = (timestamp) => timestamp.toLocaleTimeString();
      return (
        <div>
          <p>Восход солнца: {formatTime(sunriseTimestamp)}</p>
          <p>Закат солнца: {formatTime(sunsetTimestamp)}</p>
        </div>
      );
    }
    return null;
  };

  // Рендеринг компонента с использованием данных
  return (
    <div className="WeatherInfo">
      {weatherData ? null : <h3>Погода:</h3>}
      {weatherData && <h3>{lastRequestType}:</h3>}
      {renderTemperature()}
      {renderWeatherDescription

()}
      {renderPressure()}
      {renderHumidity()}
      {renderWindSpeed()}
      {renderSunriseSunset()}
    </div>
  );
};

export default WeatherInfo;
