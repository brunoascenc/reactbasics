import React from "react";
import "../App.css";
import DropdownMenu from './components/Dropdown'
import { Link } from "react-router-dom";

const Header = ({itemsAdded}) => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <h1>Blues</h1>
          <ul>
            <DropdownMenu />
            <Link to="/sobre">
              <li>Sobre</li>
            </Link>
            <Link to="/contato">
              <li>Contato</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/carrinho">
              <li>Cart {itemsAdded}</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
