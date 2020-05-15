import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { getWeatherInfo } from "../services/weather";

const CountryPage = ({ data }) => {

  const [weather, setWeatherInfo] = useState(null);
  const [currentCapital, setCurrentCapital] = useState("");

  const onClickHandler = capital => async () => {
    setCurrentCapital(capital);
    const result = await getWeatherInfo(capital);
    setWeatherInfo(result.current);
    console.log(result);
  }
  if (!data) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <div className="country-info">
      <div className="country-list">
        {
          data.map(item => {
            return (
              <div className="country">
                <div className="card-title">
                  <h2>{item.capital}</h2>
                  <img src={item.flag} alt="flag" width="50px" />
                </div>
                <div className="items">Population: {item.population}</div>
                <div>
                  <div className="items">latitude: {item.latlng[0]}</div>
                  <div className="items">longitude: {item.latlng[1]}</div>
                </div>
                <button onClick={onClickHandler(item.capital)}>Capital Weather</button>
              </div>
            )
          })
        }
      </div>
      <div className="weather-info">
        {
          weather && <div className="weather-card">
            <h1>{currentCapital}</h1>
            <div className="items">Temperature:
              {
                " " + weather.temperature
              }
            </div>
            <img src={weather.weather_icons} alt="weather" width="100px" height="100px" />
            <div className="items">Wind speed:
              {
                " " + weather.wind_speed
              }
            </div>
            <div className="items">Precip:
              {
                " " + weather.precip
              }
            </div>
          </div>
        }

      </div>
    </div>
  )
}
export default CountryPage