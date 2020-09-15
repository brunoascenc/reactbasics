import React from "react";
import MotoItems from "./components/MotoItems";
import Footer from "./components/Footer";
import "../App.css";

const Motorola = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <MotoItems />
      </div>
      <Footer />
    </div>
  );
};

export default Motorola;
