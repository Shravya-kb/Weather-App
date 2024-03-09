import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import {useState} from "react";
export default function SearchBox({updateInfo}){
  let [city,setCity] = useState("");
  let [error,setError] = useState(false);
  const API_URL="https://api.openweathermap.org/data/2.5/weather";

  const API_KEY="911c019d7a1abd3272d0cbb54a4098aa";

  let getWeatherInfo=async()=>{
    try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();

    console.log(jsonResponse);
    let result = {
      city:city,
      feelsLike : jsonResponse.main.feels_like, 
      humidity:jsonResponse.main.humidity, 
      temp:jsonResponse.main.temp, 
      temp_max:jsonResponse.main.temp_max, 
      temp_min:jsonResponse.main.temp_min,
      weather:jsonResponse.weather[0].description,
    }
    console.log(result);
    return result;
    }catch(err){
      throw err;
    }
  };
  
  let handleChange=(evt)=>{
    setCity(evt.target.value);
  }

  let handleSubmit = async(evt) => {
    try{
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch(err){
      setError(true);
    }
  }

  return(
    <div className="SearchBox">
    
    <form onSubmit={handleSubmit}>
    <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
    <br></br><br></br>
   <Button variant="contained" type="submit" >
        Search Button
      </Button>
      {error && <p style={{color:"red"}}>No such place exists!</p>}
    </form>
    </div>
  )
}