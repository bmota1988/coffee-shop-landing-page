import React from "react";
import logo from "../logo.svg";
import "../style/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
