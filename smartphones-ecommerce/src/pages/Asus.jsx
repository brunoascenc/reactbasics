import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";
import { Link } from "react-router-dom";
import "../App.css";

const Asus = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const asusProd = products.filter((cel) => cel.marca === "Asus");

  return (
    <div>
      <div className="card-container">
        {asusProd.map((product) => {
          return (
            <div key={product.id} className="card">
              <Link to={`/details/${product.id}`}>
                <img src={product.imagem} />
              </Link>
              <span>{product.titulo}</span>
              <span>{product.preco}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Asus;
