import React from 'react'
import "../App.css";
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Footer from './components/Footer'

const Sobre = () => {

    return (
      <div className="page-container">
        <div className="content-wrapper">
          <Container>
            <Row className="justify-content-md-center">
              <h1>Quem somos?</h1>
            </Row>
            <Row className="justify-content-md-center">
              <p>
                Blues Celulares é uma empresa brasileira de comércio eletrônico.
                Criada em 1999, foi uma das pioneiras do Brasil neste segmento.
                Em 2006, juntou-se com a Americanas.com, criando a B2W. É uma
                loja virtual oficializada pela Associação Brasileira dos
                Produtores de Discos e pela Federação Internacional da Indústria
                Fonográfica.
              </p>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
}

export default Sobre