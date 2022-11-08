import React, {useState}from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
  
  const[ weatherData, setWeatherData] =useState({ready:false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true,
      temperature:response.data.temperature,
      humidity: response.data.temperature.humidity,
      description:response.data.condition.description,
      wind: response.data.wind.speed,
      date:"Wednesday 7:00",
      city: response.data.city,
      iconUrl:`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png`,
    });
    
  
  }
  if (weatherData.ready){
  return(
  <div className= "Weather">
    <form>
      <div className="row">
        <div className="col-9">
      <input 
      type="search" 
      placeholder="Enter a city"
      className="form-control"
      autoFocus="on"
      />
      </div>
      <div className="col-3">
      <input 
      type="submit" 
      value="Search" 
      className="btn btn-primary w-100"/>
        </div>
      </div>
    </form>
    <h1> {weatherData.city}</h1>
    <ul>
      <li>{weatherData.date}</li>
      <li className="text-capitalize">{weatherData.description}</li>
    </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix">
       
        <img
      src={weatherData.iconUrl}
      alt={weatherData.description}
      className="float-left"
      
      />
         
     
      <span className="temperature">{Math.round(weatherData.temperature)}</span> 
      <span className="unit">°C</span>
        
      </div>
      </div>
   
    <div className="col-6">
      <ul>
        
        <li>
          Humidity:{weatherData.humidity}%
        </li>
        <li>
          Wind:{Math.round(weatherData.wind)} km/h
        </li>
      </ul>
    </div>
    </div> 
  </div>
  );
} else{
const apiKey = "t61f284fda10efo678fae0b2713f2fbf";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`
axios.get(apiUrl).then(handleResponse);

return "loading..";


}
}