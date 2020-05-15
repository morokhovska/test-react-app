import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryInfo from "./pages/CountryInfo";
import { getCountriesInfo } from "./services/countries";
import './App.css';
import './styles/pages.css';

function App() {
  const [countryInfo, setCountryInfo] = useState({ data: null, loading: false, error: false });

  const getCountry = async name => {
    setCountryInfo({
      ...countryInfo,
      loading: true,
      error: false
    });
    try {
      const result = await getCountriesInfo(name);
      setCountryInfo({
        data: result,
        loading: false,
      })
      console.log(result)
    } catch (error) {
      setCountryInfo({
        data: null,
        loading: false,
        error: true
      })
    }
  }
  const resetError = () => {
    setCountryInfo({
      ...countryInfo,
      error: false
    })
  }
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route exact path="/">
            <HomePage submit={getCountry} error={countryInfo.error} resetError={resetError} data={countryInfo.data} />
          </Route>
          <Route path="/country">
            <CountryInfo data={countryInfo.data} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
