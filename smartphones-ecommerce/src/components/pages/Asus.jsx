import React from "react";
import "../../App.css";
import asusBanner from "../../img/asusbanner.jpg";
import useFilteredProds from "../hooks/useFilteredProds";
import OrderBy from "../hooks/OrderBy";
import ProductCard from "../ProductsCard";

const Asus = () => {
  const [filteredProds, setSearch] = useFilteredProds();
  const asusProd = filteredProds.filter((cel) => cel.marca === "Asus");
  const [sorted, handleOrderBy] = OrderBy(asusProd);

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
      <div className="filters">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquise por um produto..."
        />
        <div className="marcas">
          <p>Ordenar por: </p>
          <select onChange={(e) => handleOrderBy(e.target.value)}>
            <option value="">Mais vendidos</option>
            <option value="desc">Menor preço</option>
            <option value="asc">Maior preço</option>
          </select>
        </div>
      </div>
      <ProductCard productName={sorted} />
    </div>
  );
};

export default Asus;
