import React from "react";
// import WeatherCard from "./components/WeatherCard/component";
import "./App.css"
import WeatherEngine from "./components/WeatherEngine";

import "./App.css";

function App() {
  

  return (
    <div className="App">
      <WeatherEngine location="São Paulo, br" />
    </div>
  );
}

export default App;
