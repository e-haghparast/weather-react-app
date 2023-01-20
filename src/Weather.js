import React from "react";
import "./weather.css";
export default function Weather() {
  return (
    <div className="weather">
      <h1>New York</h1>
      <ul>
        <li>Friday 10:55</li>
        <li>Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZKSdAL0zEeYU8LpyVn35diUtgI3LXNyFkA&usqp=CAU"
            alt="Cloudy" width="60px"
          />{" "}
          <span className="temperature">7</span>
          <span className="unit">°c</span>
        </div>

        <div className="col-6">
          <ul>
            <li>preciptation:15%</li>
            <li>Humidity:72%</li>
            <li>Wind:13k/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
