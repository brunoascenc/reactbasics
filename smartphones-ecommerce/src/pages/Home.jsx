import React from "react";
import "../App.css";
import LandingPage from "../components/LandingPage";
import useFilteredProds from "../components/useFilteredProds";
import ProductCard from "../components/ProductsCard";

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
          <p>Marcas: </p>
          <select onChange={(e) => setSearchMarca(e.target.value)}>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Asus">Asus</option>
            <option value="Motorola">Motorola</option>
          </select>
        </div>
      </div>
      <ProductCard productName={filteredProds} />
    </div>
  );
};

export default Home;
