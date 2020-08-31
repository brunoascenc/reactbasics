import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = ({tempeture, condition, city, country}) => {
  let highColor = 0;
    let lowColor = 0;
    let bg = null;
  if (tempeture > 12) {
    highColor = (1 - (tempeture - 12) / 28) * 255;
      lowColor = highColor - 150;
      bg = ` linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
    )`;
  } else if (tempeture <= 12) {
    highColor = (1 - (tempeture + 20) / 32) * 255;
      lowColor = highColor - 150;
       bg = ` linear-gradient(
      to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)
    )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 25px;
  `;

  return (
    <Card>
      <Location city={city} country={country}/>
      <Icon condition={condition}/>
      <Condition tempeture={tempeture} condition={condition}/>
    </Card>
  );
};

export default WeatherCard;
