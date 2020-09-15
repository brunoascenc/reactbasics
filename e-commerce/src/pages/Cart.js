import React from "react";
import "../App.css";
import Footer from './components/Footer'
import cellphonesData from "../data/data";

const Cart = (props) => {
   const product = cellphonesData.find(
     (item) => item.id === props.match.params.id
   );

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1>Cart</h1>
        {/* {product.map((item) => { */}
          return (
            <div className="item">
              <img key={product.id} src={product.imagem} alt="" />
              <p>{product.titulo}</p>
              <p>R$: {product.preco}</p>
            </div>
           );
        {/* })}  */}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
