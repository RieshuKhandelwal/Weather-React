import React, { useState } from 'react'
import Searchbox from './Searchbox'
import InfoBox from './InfoBox'

const Weatherapp = () => {

    const [weatherInfo,setWeatherInfo] = useState({});

    let updateinfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Weather app by Rieshu</h1>
      <Searchbox updateinfo={updateinfo} />
      <InfoBox info = {weatherInfo}/>
    </div>
  )
}

export default Weatherapp