import cloud_img from '../Assets/cloud.png';
import humidity_img from '../Assets/humidity.png';
import wind_img from '../Assets/wind.png';

const Weather = ({weatherData}) => {
//console.log(weatherData);
  return (
    <div className='city_temp'>
      <div className="wheather_img">
        <img src={cloud_img} alt="cloudy" />
      </div>
      <span className="current_temp">{Math.floor(weatherData.main.temp - 273.15)} &deg;C</span>
      <span className="current_city">{weatherData.name}, {weatherData.sys.country}</span>
      <div className="w_data_box">
        <div className="data">
          <img src={humidity_img} alt="humidity" />
          <div className="valu_box">
            <span className="data_value">{weatherData.main.humidity}%</span>
            <span className="data_name">Humidity</span>
          </div>
        </div>
        <div className="data">
          <img src={wind_img} alt="wind" />
          <div className="valu_box">
            <span className="data_value">{Math.floor(weatherData.wind.speed)} km/h</span>
            <span className="data_name">Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather;