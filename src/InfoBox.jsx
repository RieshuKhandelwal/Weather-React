import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"


const InfoBox = ({info}) => {
    let Rainy_URL = "https://th.bing.com/th/id/OIP.nX5pnQxG3pc9ZHizFdW2SgAAAA?rs=1&pid=ImgDetMain"
    let Winter_URL = "https://cdn.wallpapersafari.com/88/21/bQlq8Y.jpg"
    let Summer_URL = "https://th.bing.com/th/id/OIP.1knaDRc-ynNZdvDbH-8oAAHaEo?w=301&h=187&c=7&r=0&o=5&dpr=1.7&pid=1.7"
  return (
    <div className='InfoBox'>
        <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={
                info.humidity>80?Rainy_URL : info.temp > 28?Summer_URL : Winter_URL
            }
            title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city }&nbsp;{
                 info.humidity>80?<ThunderstormIcon/> : info.temp > 28?<WbSunnyIcon/> : <AcUnitIcon/>
            }
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}&deg;C</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>
                    The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                </p>
                </Typography>
            </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default InfoBox
