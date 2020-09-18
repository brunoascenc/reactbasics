import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../data/DataProvider";

const Header = () => {
  const value = useContext(DataContext);
  const [cart] = value.cart;

  return (
    <div>
      <header>
        <nav className="navbar">
          <h1>Logo</h1>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/apple">
              <li>Apple</li>
            </Link>
            <Link to="/samsung">
              <li>Samsung</li>
            </Link>
            <Link to="/motorola">
              <li>Motorola</li>
            </Link>
            <Link to="/asus">
              <li>Asus</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
              <span>{cart.length}</span>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
