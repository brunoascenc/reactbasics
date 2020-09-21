import React from 'react';
import "../App.css";

const Footer = () => {
    return (
      <div className="footer-container">
        <footer>
          <div className="copyright">
            <p>
              Copyright &copy; 2020 | <span>hzone</span>
            </p>
          </div>
          <div className="info">
            <h2>hzone</h2>
            <li>
              <a href="/#">Sobre</a>
            </li>
            <li>
              <a href="/#">Avaliações</a>
            </li>
            <li>
              <a href="/#">Certificados</a>
            </li>
            <li>
              <a href="/#">Políticas de Privacidade</a>
            </li>
            <li>
              <a href="/#">Lojas</a>
            </li>
          </div>
          <div className="newsletter">
            <div className="email">
              <h3>Receba novidades</h3>
              <input type="email" placeholder="Seu email..." />
              <button>Enviar</button>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default Footer;
