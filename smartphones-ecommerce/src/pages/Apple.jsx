import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";
import { Link } from "react-router-dom";
import "../App.css";
import appleBanner from "../img/applebanner.png";

const Apple = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const appleProd = products.filter((cel) => cel.marca === "Apple");

  const bannerStyle = {
    background: `url(${appleBanner}) no-repeat`,
    width: "100%",
    backgroundSize: "cover",

  };

  return (
    <div className="container">
      <div className="banner" style={bannerStyle}>
        {/* <img src={appleBanner} alt="" /> */}
      </div>
      <div className="products-header">
        <h1>Apple</h1>
      </div>
      <div className="card-container">
        {appleProd.map((product) => {
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

export default Apple;
