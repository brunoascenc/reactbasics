import React from "react";
import styled from "@emotion/styled";

const Condition = ({tempeture, condition}) => {
  const Clouds = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `;

  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
  `;

  return (
    <>
      <Temp>{tempeture} °C</Temp>
      <Clouds>{condition}</Clouds>
    </>
  );
};

export default Condition;
