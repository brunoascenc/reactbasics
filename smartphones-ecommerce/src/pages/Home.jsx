import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";
import "../App.css";
import { Link } from "react-router-dom";
import banner from '../iphones.png'
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <div className="home">
      <div className="landing-page">
        <div className="bg-left">
          <div className="landing-txt">
            <h2>Iphone XR</h2>
            <button>Avaible Now</button>
            <div className="more-btn"><IoIosArrowDown/></div>
          </div>
        </div>
        <div className="bg-right">
          <div className="socials">
            <ul>
              <IconContext.Provider
                value={{
                  style: { fontSize: "25px" },
                }}
              >
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaTwitter />
                </li>
              </IconContext.Provider>
            </ul>
          </div>
        </div>
        <div className="banner">
          <img src={banner} alt="asijas" />
        </div>
      </div>
      <div className="card-container">
        {products.map((product) => {
          return (
            <div key={product.id} className="card">
              <Link to={`/details/${product.id}`}>
                <img src={product.imagem} alt={product.titulo} />
              </Link>
              <span>{product.titulo}</span>
              <span>{product.preco.toFixed(2)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
