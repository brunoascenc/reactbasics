import React, { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../../App.css";

const DropdownMenu = () => {
  const [show, setShow] = useState(false);

  return (
    <NavDropdown
      show={show}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      title="Shop"
      id="nav-dropdown"
    >
      <NavDropdown.Item eventKey="4.1">
        <Link to="/">
          <li>Home</li>
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="4.2">
        <Link to="/apple">
          <li>Apple</li>
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="4.3">
        <Link to="/samsung">
          <li>Samsung</li>
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="4.4">
        <Link to="/motorola">
          <li>Motorola</li>
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="4.4">
        <Link to="/asus">
          <li>Asus</li>
        </Link>
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default DropdownMenu;
