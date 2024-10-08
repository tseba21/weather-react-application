import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
              <li></li>
              {props.data.description}
            </li>
          </ul>
        </div>
      </div>{" "}
      <div className="col-lg-6 col-md-6 col-sm-8 ">
        <div className="temperature-container d-flex justify-content-between">
          <div>
            <WeatherIcon code={props.data.icon} size={52} />
            <spam className="temperature">
              {Math.round(props.data.temperature)}
            </spam>
            <span className="unit">°C</span>
          </div>{" "}
          <ul>
            {" "}
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>
            </li>
            <li>
              {" "}
              Wind: <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
