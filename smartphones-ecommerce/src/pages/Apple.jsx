import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import appleBanner from "../img/applebanner.png";
import useFilteredProds from "../components/useFilteredProds";
// import FilterOptions from '../components/useFilterOptions'

const Apple = () => {
  const [filteredProds, setSearch] = useFilteredProds();
  const appleProd = filteredProds.filter((cel) => cel.marca === "Apple");

  const bannerStyle = {
    background: `url(${appleBanner}) no-repeat`,
    width: "100%",
    backgroundSize: "cover",
  };

  return (
    <div className="container">
      <div className="banner" style={bannerStyle}>
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
          <h3>Ordenar por: </h3>
          <select>
            <option value="asc">Maior preço</option>
            <option value="desc">Menor preço</option>
          </select>
        </div>
      </div>
      <div className="card-container">
        {appleProd &&
          appleProd.map((product) => {
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
