import React from "react";
import WeatherCard from "./components/WeatherCard/component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard tempeture={-15} />
      <WeatherCard tempeture={25} />
      <WeatherCard tempeture={-5} />
    </div>
  );
}

export default App;
