import { useState, useEffect } from "react";
import Forcast from "./forcast";
import SearchBar from "./searchbar";
import Weather from "./weather";

import cloud_img from '../Assets/cloud.png';
import clear_img from '../Assets/clear.png';
import drizzle_img from '../Assets/drizzle.png';
import rain_img from '../Assets/rain.png';
import snow_img from '../Assets/snow.png';


const AppBoard = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [cordinates, setCordinates] = useState(null);
  const [forcastData, setForcastData] =useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [weather_icon, setWeatherIcon] = useState('')


  const key = '2f132fc260785b56d6e2b488ef880c01';

  // Function to fetch weather data
  const getWeatherData = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`);

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
        setIsLoading(false);
      }

      if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n' ) {
        setWeatherIcon(clear_img);
      }
      else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
        setWeatherIcon(cloud_img);
      }
      else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
        setWeatherIcon(drizzle_img);
      }
      else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
        setWeatherIcon(drizzle_img);
      }
      else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
        setWeatherIcon(rain_img);
      }
      else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
        setWeatherIcon(rain_img);
      }
      else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
        setWeatherIcon(snow_img);
      }
      else {
        setWeatherIcon(clear_img);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setIsLoading(false);
    }
  };

  const getForcastData = async (coords) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${key}`);

      if(!response.ok) {
        throw new Error('Failed to fetch forcast data');
      }

      const data = await response.json();
      
      if(data) {
        setForcastData(data);
        setIsLoading(false);
      }
    }
    catch (error) {
      console.error('Error fetching forcast data:', error);
      setIsLoading(false);
  }
  }
  useEffect(() => {
    const defaultCity = 'New Delhi';
    getWeatherData(defaultCity); 

  }, []);

  useEffect(() => {
    if (cordinates) {
      
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
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) :(
          weatherData && <Weather 
          
            weatherData={weatherData}
            w_image = {weather_icon}
          />
        )}
        {forcastData && <Forcast 
          data = {forcastData}
        />}
      </div>
    </div>
  );
};

export default AppBoard;
