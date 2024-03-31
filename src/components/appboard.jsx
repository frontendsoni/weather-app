import { useState, useEffect } from "react";
import Forcast from "./forcast";
import SearchBar from "./searchbar";
import Weather from "./weather";

const AppBoard = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const key = '2f132fc260785b56d6e2b488ef880c01';

  // Function to fetch weather data
  const getWeatherData = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setCity('');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    const defaultCity = 'New Delhi';
    getWeatherData(defaultCity); 
  }, []);

  // Function to handle search
  const handleSearch = () => {
    if (city.trim() !== '') {
      getWeatherData(city);
    }
  };

  return (
    <div className="container">
      <div className="app_wrap">
        <SearchBar
          city={city}
          setCity={setCity}
          handleSearch={handleSearch}
        />
        {weatherData && <Weather weatherData={weatherData} />}
        <Forcast />
      </div>
    </div>
  );
};

export default AppBoard;
