import React from "react";
import useData from "./useData";
import "../../App.css";
import { Link } from "react-router-dom";

const AsusItems = () => {
  const [celData] = useData();
  const asusProd = celData.filter((cel) => cel.marca === "Asus");

  return (
    <div className="apple">
      <div className="titulo">
        <h3>Asus</h3>
      </div>
      <div className="produtos">
        <div className="prod-card">
          {asusProd.map((item) => {
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

export default AsusItems;
