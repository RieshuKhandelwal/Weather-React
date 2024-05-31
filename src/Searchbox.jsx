import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

const Searchbox = ({updateinfo}) => {

    let[city,setCity]=useState("");
    let[error,seterror]=useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "790d1baece439a44c644f3a12d40b286";

    let getWeatherInfo = async()=>{
        try {
          let promisedResponse = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
          let jsonResponse = await promisedResponse.json();
          let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
          };
          console.log(result);
          return result;
        } catch (error) {
          throw error;
        }
    }    

    let handleChange = (evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit = async(evt)=>{
      try {
        evt.preventDefault();
        setCity("");
        let newInfo = await getWeatherInfo();
        updateinfo(newInfo);
      } catch (error) {
        seterror(true); 
      }
    }

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
      <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
      <br /><br />
      <Button variant="contained" type='submit'>Search</Button>
      {error && <p style={{color:"red"}}>No Such Place Exists!</p>}
      </form>
    </div>
  )
}

export default Searchbox
