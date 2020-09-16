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
              <img src={product.imagem} />
            </Link>
            <span>{product.titulo}</span>
            <span>{product.preco}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
