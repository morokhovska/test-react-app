import React from "react";
import { Redirect } from "react-router-dom";


const CountryPage = ({ data }) => {
  if (!data) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <div>
      {
        data.map(item => {
          return (
            <div>
              <h2>{item.capital}</h2>
              <div>{item.population}</div>
              <div>
                <div>{item.latlng[0]}</div>
                <div>{item.latlng[1]}</div>
              </div>
              <img src={item.flag} alt="flag" width="100px" height="100px" />
              <button></button>
            </div>
          )
        })
      }
    </div>
  )
}
export default CountryPage