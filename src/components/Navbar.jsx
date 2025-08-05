import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo on left */}
      <div className="logo-container">
        <img src="/plants/logo.png" alt="PlantPal Logo" className="logo-img" />
        <span className="logo-text">PlantPal</span>
      </div>

      {/* Links on right */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/benefits">Benefits</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

