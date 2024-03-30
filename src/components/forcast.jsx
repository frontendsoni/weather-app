import cloud_img from '../Assets/cloud.png';
import humidity_img from '../Assets/humidity.png';
import wind_img from '../Assets/wind.png';

const Forcast = () => {

  return (
    <div className="forcast">
      <ul className="forcast_list">
        <li>
          <span>Mon</span>
          <img src={cloud_img} alt="cloudy" />
          <span>23&deg;</span>
        </li>
        <li>
          <span>Mon</span>
          <img src={cloud_img} alt="cloudy" />
          <span>23&deg;</span>
        </li>
        <li>
          <span>Mon</span>
          <img src={cloud_img} alt="cloudy" />
          <span>23&deg;</span>
        </li>
        <li>
          <span>Mon</span>
          <img src={cloud_img} alt="cloudy" />
          <span>23&deg;</span>
        </li>
        <li>
          <span>Mon</span>
          <img src={cloud_img} alt="cloudy" />
          <span>23&deg;</span>
        </li>
        <li>
          <span>Mon</span>
          <img src={cloud_img} alt="cloudy" />
          <span>23&deg;</span>
        </li>
        <li>
          <span>Mon</span>
          <img src={cloud_img} alt="cloudy" />
          <span>23&deg;</span>
        </li>
      </ul>
    </div>
  )
}

export default Forcast;