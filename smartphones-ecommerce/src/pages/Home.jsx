import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";
import "../App.css";
import { Link } from "react-router-dom";
import LandingPage from "../components/LandingPage";

const Home = () => {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <div className="home">
      <LandingPage />
      <div className="products-header">
        <h1>Best Products</h1>
      </div>
      <div className="card-container">
        {products.map((product) => {
          return (
            <div key={product.id} className="card">
              <Link to={`/details/${product.id}`}>
                <img src={product.imagem} alt={product.titulo} />
              </Link>
              <span>{product.titulo}</span>
              <span>
                R$: {product.preco.toFixed(2).toString().replace(".", ",")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
