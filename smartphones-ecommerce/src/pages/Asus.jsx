import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";
import { Link } from "react-router-dom";
import "../App.css";
import asusBanner from "../img/asusbanner.jpg";

const Asus = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const asusProd = products.filter((cel) => cel.marca === "Asus");

  const bannerStyle = {
    background: `url(${asusBanner})center no-repeat`,
    width: "100%",
    backgroundSize: "cover",
  };

  return (
    <div>
      <div className="banner" style={bannerStyle}></div>
      <div className="products-header">
        <h1>Asus</h1>
      </div>
      <div className="card-container">
        {asusProd.map((product) => {
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

export default Asus;
