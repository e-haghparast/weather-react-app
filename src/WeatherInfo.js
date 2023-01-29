import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>description: {props.data.description}</li>
      </ul>

      <div className="row mt-4 flex-column flex-md-row align-items-center mb-2">
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <div>
            <WeatherIcon code={props.data.icon} size={55} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}</li>
            <li>Wind: {props.data.wind} k/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
