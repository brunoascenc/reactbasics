import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../data/DataProvider";
import Dropdown from "../components/Dropdown";
import "../App.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";

const Header = () => {
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <h1>Smartie</h1>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to="/shop" className="shop-link">
                Shop
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <div className="cart">
              <Link to="/cart">
                <IconContext.Provider
                  value={{
                    style: { fontSize: "35px" },
                  }}
                >
                  <li>
                    <AiOutlineShoppingCart />
                  </li>
                </IconContext.Provider>

                {/* <BiCart /> */}
                <span className="cart-qtd">{cart.length}</span>
              </Link>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
