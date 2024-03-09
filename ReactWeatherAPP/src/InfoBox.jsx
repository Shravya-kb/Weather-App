import './InfoBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import Box from '@mui/material/Box';

export default function InfoBox({info}){
  
  const INIT_URL="https://media.istockphoto.com/id/1161401350/photo/aerial-view-white-clouds-in-blue-sky-top-view-view-from-drone-aerial-birds-eye-view-aerial.webp?b=1&s=170667a&w=0&k=20&c=sodYCcXjE0UPY5sTjzJcK6qbxBNSyg3_VO9Khdwr3eY=";

  let COLD_URL="https://img.freepik.com/free-photo/beautiful-shot-mountains-trees-covered-snow-fog_181624-17590.jpg?size=626&ext=jpg&ga=GA1.1.1383374479.1695375028&semt=ais";
  let HOT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGeGgAklF3hScP6LPFb1tvM2hWhkXu7CM-A&usqp=CAU";
  let RAINY_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";

  
  return(
    <div className="InfoBox">
      
      <div className='CardContainer'>
      <Box boxShadow={3} sx={{
        '&:hover': {
          boxShadow: 10, // Increase the boxShadow value for a more prominent hover effect
        },
      }}>
      <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAINY_URL : info.temp > 15? HOT_URL:COLD_URL}
        title="Weather Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city} {info.humidity > 80 ? <ThunderstormIcon/>: info.temp > 15? <WbSunnyIcon/>:<AcUnitIcon/>}
        
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Max Temp={info.temp_max}</p>
          <p>Min Temp={info.temp_min}</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
        
        
      </CardContent>
      
    </Card>
    </Box>
    </div>
    </div>
  )

}