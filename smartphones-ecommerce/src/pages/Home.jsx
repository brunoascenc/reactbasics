import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import { RiArrowDownSLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import SeeMoreBtn from "../components/SeeMoreBtn";

const Home = () => {
  const [handleShowMoreProds, productsToShow, products] = SeeMoreBtn();

  return (
    <div className="home">
      <LandingPage />
      <div className="products-header">
        <h1>Mais Vendidos</h1>
      </div>
      <div className="card-container">
        {productsToShow.map((product) => {
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
      <div className="see-more">
        {productsToShow.length <= products.length ? (
          <button onClick={handleShowMoreProds}>
            Veja Mais
            <IconContext.Provider
              value={{
                style: { fontSize: "25px" },
              }}
            >
              <RiArrowDownSLine />
            </IconContext.Provider>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
