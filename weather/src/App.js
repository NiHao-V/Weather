// App.js
import React, { useState } from 'react';
import WeatherWidget from './components/WeatherWidget';
import './App.css';

function App() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedLocation('');
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setSelectedCity('');
  };

  return (
    <div className="App">
      <WeatherWidget
        onCityChange={handleCityChange}
        onLocationChange={handleLocationChange}
        selectedCity={selectedCity}
        selectedLocation={selectedLocation}
      />
    </div>
  );
}

export default App;