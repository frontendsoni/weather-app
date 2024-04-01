import cloud_img from '../Assets/cloud.png';
import humidity_img from '../Assets/humidity.png';
import wind_img from '../Assets/wind.png';

const Forcast = ({data}) => {
console.log(data);
  return (
    <div className="forcast">
      <ul className="forcast_list">
        {data.list.splice(0, 7).map((item, index) =>(
          <li key={index}>
            <span>Tue</span>
            <img src={cloud_img} alt="cloudy" />
            <span>{item.main.temp}&deg;</span>
          </li>
          )
        )}
        
      </ul>
    </div>
  )
}

export default Forcast;