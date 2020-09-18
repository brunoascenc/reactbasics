import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <div className="card-container">
      {products.map((product) => {
        return (
          <div key={product.id} className="card">
            <Link to={`/details/${product.id}`}>
              <img src={product.imagem} alt={product.titulo} />
            </Link>
            <span>{product.titulo}</span>
            <span>{product.preco.toFixed(2)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
