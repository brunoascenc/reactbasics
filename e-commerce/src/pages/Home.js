import React from "react";
import Banner from "./components/Banner";
import Populares from "./components/Populares";
import Footer from "./components/Footer";
import "../App.css";


const Home = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <Banner />
        <Populares />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
