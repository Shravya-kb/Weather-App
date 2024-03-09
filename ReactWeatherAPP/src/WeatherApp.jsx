import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';
export default function WeatherApp(){
  const [weatherInfo, setWeatherInfo]=useState({
    city:"Paris",
    feelsLike: 32.43,
    humidity: 37,
    temp: 32.48,
    temp_max: 32.48,
    temp_min: 32.48,
    weather: "few clouds",
  });

  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
  };
  return(
    <div style={{textAlign:"center"}}>
      <h1>Weather App by Shravya K B</h1>
      <SearchBox  updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}