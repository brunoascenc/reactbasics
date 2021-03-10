import React from "react";
import { Card } from "../card/Card";
import "./CardList.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
        <Card/>
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}/>
      ))}
    </div>
  );
};
