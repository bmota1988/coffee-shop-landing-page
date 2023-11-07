import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <span class="material-symbols-outlined">coffee</span>
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
