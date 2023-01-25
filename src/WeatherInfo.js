import React from "react";
import FormattedDate from "./FormattedDate.js";


export default function WeatherInfo(props){
    return (
      <div className="weatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>description: {props.data.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              width="60px"
            />{" "}
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°c</span>
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
