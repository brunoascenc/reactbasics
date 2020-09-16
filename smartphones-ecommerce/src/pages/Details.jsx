import React, { useContext } from "react";
import { DataContext } from "../data/DataProvider";
import { Link } from "react-router-dom";

const Details = (props) => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  const productDetail = products.find(
    (item) => item.id === props.match.params.id
  );

  return (
    <div>
      <img src={productDetail.imagem} alt={productDetail.titulo} />
      <h3>{productDetail.tituloDetalhe}</h3>
      <span>{productDetail.preco}</span>
      <Link to="/carrinho" onClick={() => addCart(productDetail.id)}>
        Add to cart
      </Link>
    </div>
  );
};

export default Details;
