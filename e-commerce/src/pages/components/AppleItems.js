import React from "react";
import "../../App.css";
import useData from "./useData";
import { Link } from "react-router-dom";

const AppleItems = () => {
  const [celData] = useData();
  const appleProd = celData.filter((cel) => cel.marca === "Apple");

  return (
    <div className="apple">
      <div className="titulo">
        <h3>Apple</h3>
      </div>
      <div className="produtos">
        <div className="prod-card">
          {appleProd.map((item) => {
            return (
              <div className="item">
                <Link to={"/details/" + item.id}>
                  <img key={item} src={item.imagem} alt="" />
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

export default AppleItems;
