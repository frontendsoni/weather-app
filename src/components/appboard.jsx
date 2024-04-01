import { useState, useEffect } from "react";
import Forcast from "./forcast";
import SearchBar from "./searchbar";
import Weather from "./weather";

const AppBoard = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [cordinates, setCordinates] = useState(null);
  const [forcastData, setForcastData] =useState(null);

//console.log(cordinates);
//console.log(forcastData);
  const key = '2f132fc260785b56d6e2b488ef880c01';

  // Function to fetch weather data
  const getWeatherData = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      if (data) {
        const newCordinates = {
          lat:data.coord.lat,
          lon:data.coord.lon
        }
        setCordinates(newCordinates)
        setWeatherData(data);
        setCity('');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const getForcastData = async (coords) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${key}`);

      if(!response.ok) {
        throw new Error('Failed to fetch forcast data');
      }

      const data = await response.json();
      //console.log(data);
      if(data) {
        setForcastData(data);
      }
    }
    catch {}
  }
  useEffect(() => {
    const defaultCity = 'New Delhi';
    getWeatherData(defaultCity); 
  }, []);

  useEffect(() => {
    if (cordinates) {
      //console.log(cordinates);
      getForcastData(cordinates);
    }
  }, [cordinates]);

  // Function to handle search
  const handleSearch = () => {
    if (city.trim() !== '') {
      getWeatherData(city);
      if(cordinates) {
        getForcastData(cordinates);
      }
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
        {forcastData && <Forcast data = {forcastData} />}
      </div>
    </div>
  );
};

export default AppBoard;
