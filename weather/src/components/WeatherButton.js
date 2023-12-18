// WeatherButton

import React, { useState, useEffect } from 'react';
import '../App.css';

const WeatherButton = ({ onWeatherDataChange }) => {
  const [cityError, setCityError] = useState(null);

  const getWeatherData = async () => {
    try {
      const apiKey = '8b975ead09e9eed4d0a85f3a0af2ca78';
      const cityInput = document.getElementById('cityInput');
      const city = cityInput ? cityInput.value : null;

      if (city) {
        // Если введен город, запрашиваем погоду по городу
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        
        if (response.ok) {
          const data = await response.json();

          // Передаем информацию о погоде в WeatherInfo.js с заголовком
          onWeatherDataChange && onWeatherDataChange(data, `Погода в городе ${capitalizeFirstLetter(city)}`);

          // Очищаем строку ввода города
          cityInput && (cityInput.value = '');

          // Сбрасываем сообщение об ошибке
          setCityError(null);
        } else {
          // Если город не найден, выводим сообщение об ошибке
          setCityError('Город не найден');

          // Удаляем сообщение об ошибке через 3 секунды
          setTimeout(() => {
            setCityError(null);
          }, 3000);
        }
      } else {
        // Если город не введен, выводим сообщение об ошибке
        setCityError('Введите город');

        // Удаляем сообщение об ошибке через 3 секунды
        setTimeout(() => {
          setCityError(null);
        }, 3000);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);

      // Если произошла ошибка при запросе, устанавливаем сообщение об ошибке
      setCityError('Произошла ошибка при запросе. Пожалуйста, попробуйте еще раз.');

      // Удаляем сообщение об ошибке через 3 секунды
      setTimeout(() => {
        setCityError(null);
      }, 3000);
    }
  };

  // Функция для форматирования первой буквы в верхний регистр
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    // Убираем ошибку через 3 секунды
    const errorTimeout = setTimeout(() => {
      setCityError(null);
    }, 3000);

    return () => clearTimeout(errorTimeout);
  }, [cityError]);

  return (
    <div>
      {cityError && <p className={`LocationError ${cityError ? 'active' : ''}`}>{cityError}</p>}
      <button onClick={getWeatherData} className="custom-btn btn weather-btn">
        <span>Погода в выбранном городе</span>
      </button>
    </div>
  );
};

export default WeatherButton;

