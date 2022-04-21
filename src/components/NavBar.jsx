import React from "react";
import logo from "../images/logo.png";
import "../styles/NavBar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href="home">
        <img id="navbar-logo" src={logo} alt="website logo" />
      </a>
      <nav className="navigation-links">
        <ul>
          <li>
            <a href="properties">View Properties</a>
          </li>
          <li>
            <a href="adding-property">Add A Property</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
