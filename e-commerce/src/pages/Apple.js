import React from "react";
import AppleItems from './components/AppleItems'
import Footer from "./components/Footer";
import "../App.css";


const Apple = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <AppleItems />
      </div>
      <Footer />
    </div>
  );
};

export default Apple;
