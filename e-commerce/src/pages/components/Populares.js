import React from "react";
import useData from "./useData";
import "../../App.css";
import { Link } from "react-router-dom";

const Populares = () => {
  const [celData] = useData();

  return (
    <div className="populares">
      <div className="titulo">
        <h3>Mais populares</h3>
      </div>
      <div className="produtos">
        <div className="prod-card">
          {celData.map((item) => {
            return (
              <div className="item">
                <Link to={"/details/" + item.id}>
                  <img key={item.id} src={item.imagem} alt="" />
                </Link>
                <p>{item.titulo}</p>
                <p>R$: {item.preco}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Populares;
