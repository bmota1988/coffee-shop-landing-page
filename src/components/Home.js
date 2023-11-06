import React from "react";
import { useState } from "react";
import "../style/Home.css"; // Import the CSS file for the Home component

function Home() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="content">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Coffee Delights</h1>
          <p>Your Perfect Coffee Experience Awaits</p>
          <button className="cta-button" onClick={toggleMenu}>
            View Menu
          </button>
          {isMenuVisible && (
            <div className="menu-card">
              <div className="menu-header">
                <h2>Our Menu</h2>
                <button className="close-button" onClick={closeMenu}>
                  Close
                </button>
              </div>
              <ul>
                <li>Espresso</li>
                <li>Cappuccino</li>
                <li>Latte</li>
                <li>Americano</li>
                <li>Mocha</li>
                <li>Macchiato</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
