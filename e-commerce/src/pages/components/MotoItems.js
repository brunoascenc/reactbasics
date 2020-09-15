import React from "react";
import useData from "./useData";
import "../../App.css";
import { Link } from "react-router-dom";

const MotoItems = () => {
  const [celData] = useData();
  const motoProd = celData.filter((cel) => cel.marca === "Motorola");

  return (
    <div className="apple">
      <div className="titulo">
        <h3>Motorola</h3>
      </div>
      <div className="produtos">
        <div className="prod-card">
          {motoProd.map((item) => {
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

export default MotoItems;
