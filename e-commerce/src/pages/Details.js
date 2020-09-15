import React, { useState } from "react";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import cellphonesData from "../data/data";
import Header from "./Header";
import { Link } from "react-router-dom";

const Details = (props) => {
  const [cart, setCart] = useState([]);
  const product = cellphonesData.find(
    (item) => item.id === props.match.params.id
  );

  const handleCart = (product) => {
    console.log("oi");
    setCart([...cart, product]);
  };

  return (
    <>
      <Header itemsAdded={cart.length} />
      {/* <img src={product.imagem} alt="cell" /> */}
      <Container>
        <Row className="justify-content-center">
          <Col md={5} xs={12}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-inline w-100"
                  src={product.imagem}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.lado}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.traseira}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6} xs={12}>
            <h3>{product.tituloDetalhe}</h3>
            <p>R$: {product.preco}</p>
            <Link to={"/carrinho/" + product.id}>
              <Button
                onClick={() => handleCart(product)}
                variant="primary"
                size="lg"
              >
                Comprar
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Details;
