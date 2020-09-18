import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";
import { Link } from "react-router-dom";
import "../App.css";

const Apple = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const appleProd = products.filter((cel) => cel.marca === "Apple");

  return (
    <div className="card-container">
      {appleProd.map((product) => {
        return (
          <div key={product.id} className="card">
            <Link to={`/details/${product.id}`}>
              <img src={product.imagem} alt={product.titulo} />
            </Link>
            <span>{product.titulo}</span>
            <span>$ {product.preco.toFixed(2)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Apple;
