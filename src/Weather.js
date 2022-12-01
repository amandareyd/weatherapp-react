import React, {useState}from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
  
  const[ weatherData, setWeatherData] =useState({ready:false});
  const[ city, setCity]=useState(props.defaultCity);
  
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true,
      temperature:response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description:response.data.condition.description,
      wind: response.data.wind.speed,
      date:new Date(response.data.time*1000),
      city: response.data.city,
      icon: response.data.condition.icon,
    });
    
  
  }
function search(){
  const apiKey = "t61f284fda10efo678fae0b2713f2fbf";
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse);
}

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
setCity(event.target.value);
  }
 
  if (weatherData.ready){
  return(
  <div className= "Weather">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
      <input 
      type="search" 
      placeholder="Enter a city"
      className="form-control"
      autoFocus="on"
      onChange={handleCityChange}
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
    <WeatherInfo data={weatherData}/>
   <WeatherForecast/>
  </div>
  );
} else{

search();
return "loading..";


}
}