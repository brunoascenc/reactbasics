import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";
import { Link } from "react-router-dom";
import "../App.css";
import motoBanner from "../img/motobanner.jpg";

const Motorola = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const motoProd = products.filter((cel) => cel.marca === "Motorola");

  const bannerStyle = {
    background: `url(${motoBanner})center no-repeat`,
    width: "100%",
    backgroundSize: "cover",
  };

  return (
    <div>
      <div className="banner" style={bannerStyle}></div>
      <div className="products-header">
        <h1>Motorola</h1>
      </div>
      <div className="card-container">
        {motoProd.map((product) => {
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

export default Motorola;
