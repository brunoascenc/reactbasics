import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";
import { Link } from "react-router-dom";
import "../App.css";
import appleBanner from "../img/applebanner.png";
import useFilteredProds from "./useFilteredProds";

const Apple = () => {
  const [setSearch, setSearchMarca] = useFilteredProds();
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
      <div className="filters">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquise por um produto..."
        />
        <div className="marcas">
          <h3>Marcas: </h3>
          <select onChange={(e) => setSearchMarca(e.target.value)}>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Asus">Asus</option>
            <option value="Motorola">Motorola</option>
          </select>
        </div>
      </div>
      <div className="card-container">
        {appleProd.map((product) => {
          return (
            <div key={product.id} className="card">
              <Link to={`/details/${product.id}`}>
                <img src={product.imagem} alt={product.titulo} />
                <div>
                  <span>{product.titulo}</span>
                </div>
              </Link>
              <span className="preco">
                R$: {product.preco.toFixed(2).toString().replace(".", ",")} à
                vista
              </span>
              <span className="parcela">ou {product.parcela}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Apple;
