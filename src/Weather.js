import React from "react";
import "./Weather.css";

export default function Weather(){
    let weatherData={
        city: "New York",
        date: "Tuesday 10:00",
        description:"Cloudy",
        imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        humidity: 80,
        wind: 5
    };
    return(<div className="Weather mb-3 mt-4">
    <div className="row">
      <div className="col-4">
        <form className="searchForm " />
        <input type="text" placeholder="Search for a city" autoFocus="on" />
      </div>
      <div className="col-4 ">
        <button type="button" className="btn btn-primary">
          Search
        </button>
      </div>

      <div className="col-4 ">
        <button type="button" className="btn btn-primary">
          Current Location
        </button>
      </div>

      <div className="overview">
        <h1> {weatherData.city} </h1>
        <ul>
          <li></li>
          <li>
            last updated:{weatherData.date} <span id="current"></span>{" "}
          </li>
          <li>{weatherData.description}</li>
          <li></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt="{weatherData.description}"
              id="icon"
              className="float-left"
            />

            <strong className="temp">94</strong>
            <span className="units"> °F </span>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind {weatherData.wind} mph</li>
          </ul>
          
        </div>
      </div>
      <div></div>
    </div>
  </div>
);
}

        
 