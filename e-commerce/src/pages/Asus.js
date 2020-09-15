import React from "react";
import Footer from "./components/Footer";
import AsusItems from "./components/AsusItems";
import "../App.css";


const Asus = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <AsusItems />
      </div>
      <Footer />
    </div>
  );
};

export default Asus;
