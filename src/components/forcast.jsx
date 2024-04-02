import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import cloud_img from '../Assets/cloud.png';
import clear_img from '../Assets/clear.png';
import drizzle_img from '../Assets/drizzle.png';
import rain_img from '../Assets/rain.png';
import snow_img from '../Assets/snow.png';

const Forcast = ({data}) => {
console.log(data);

const daysName = ["Sun", "Mon" , "Tue", "Wed", "Thu", "Fri", "Sat"]

const weatherIconMap = {
  '01d': clear_img,
  '01n': clear_img,
  '02d': cloud_img,
  '02n': cloud_img,
  '03d': drizzle_img,
  '03n': drizzle_img,
  '04d': drizzle_img,
  '04n': drizzle_img,
  '09d': rain_img,
  '09n': rain_img,
  '10d': rain_img,
  '10n': rain_img,
  '13d': snow_img,
  '13n': snow_img,
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
      },
    },
  ],
};


const getWeatherImage = (iconCode) => {
  return weatherIconMap[iconCode] || clear_img;
};
  return (
    <div className="forcast">
      <Slider {...settings} className="forcast_list">
        {data.list.splice(0, 7).map((item, index) =>(
          <div key={index} className='list'>
            <span>{daysName[new Date(item.dt_txt).getDay()]}</span>
            <img src={getWeatherImage(item.weather[0].icon)} alt="forcast image" />
            <span>{Math.floor(item.main.temp)} &deg;c</span>
          </div>
          )
        )}
        
      </Slider>
    </div>
  )
}

export default Forcast;
