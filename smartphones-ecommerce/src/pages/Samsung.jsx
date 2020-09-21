import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";
import { Link } from "react-router-dom";
import "../App.css";
import samBanner from "../img/sambanner.jpg";

const Samsung = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const samProd = products.filter((cel) => cel.marca === "Samsung");

  const bannerStyle = {
    background: `url(${samBanner}) no-repeat`,
    width: "100%",
    backgroundSize: "cover",
  };

  return (
    <div className="container">
      <div className="banner" style={bannerStyle}></div>
      <div className="products-header">
        <h1>Samsung</h1>
      </div>
      <div className="card-container">
        {samProd.map((product) => {
          return (
            <div key={product.id} className="card">
              <Link to={`/details/${product.id}`}>
                <img src={product.imagem} alt={product.titulo} />
              </Link>
              <span>{product.titulo}</span>
              <span>
                R$ {product.preco.toFixed(2).toString().replace(".", ",")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Samsung;
