import React from "react";
import "./Card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={
          props.monster && `https://robohash.org/${props.monster.id}?set=set2&size=180x180`
        }
        alt="monster"
      />
      <h2>{props.monster && props.monster.name}</h2>
      <p>{props.monster && props.monster.email}</p>
    </div>
  );
};
