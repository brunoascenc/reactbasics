import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import useFilteredProds from "../components/useFilteredProds";

const Home = () => {
  const [filteredProds, setSearch, setSearchMarca] = useFilteredProds();

  return (
    <div className="home">
      <LandingPage />
      <div className="products-header">
        <h1>Mais Vendidos</h1>
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
        {filteredProds &&
          filteredProds.map((product) => {
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

export default Home;
