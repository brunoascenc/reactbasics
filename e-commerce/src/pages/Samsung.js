import React from "react";
import SamItems from "./components/SamItems";
import Footer from "./components/Footer";
import "../App.css";

const Samsung = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <SamItems />
      </div>
      <Footer />
    </div>
  );
};

export default Samsung;
