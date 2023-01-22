import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import FormattedDate from "./FormattedDate.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZKSdAL0zEeYU8LpyVn35diUtgI3LXNyFkA&usqp=CAU",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="search-city w-100"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="search-button btn w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
     <li>
      <FormattedDate date={weatherData.date}/>
     </li>
          <li>description: {weatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              width="60px"
            />{" "}
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°c</span>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity:{weatherData.humidity}</li>
              <li>Wind:{weatherData.wind}k/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bfd67b65e01f8c3751ffb4a48f09d863";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
