import React, { useState, useEffect } from 'react'

import WeatherCard from "./WeatherCard/component"

const WeatherEngine = ({location}) => {
    
     const [query, setQuery] = useState("London, gb");
     const [weather, setWeather] = useState({
       temp: null,
       city: null,
       condition: null,
       country: null,
     });

     const getWeather = async (q) => {
       const apiResponse = await fetch(
         `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=edf701ea5a85954466365cd5c6fde239`
       );
       const resJSON = await apiResponse.json();
       setWeather({
         temp: resJSON.main.temp,
         city: resJSON.name,
         condition: resJSON.weather[0].main,
         country: resJSON.sys.country,
       });
     };

     const handleSearch = (e) => {
       e.preventDefault();
       getWeather(query);
     };

     useEffect(() => {
       getWeather(location);
     }, [location]);
    
      return (
        <div className="App">
          <WeatherCard
            tempeture={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
          />
          <form>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
          </form>
        </div>
      );
}

export default WeatherEngine;