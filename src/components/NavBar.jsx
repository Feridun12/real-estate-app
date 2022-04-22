import React from "react";
import { NavLink } from "react-router-dom";
// styling imports
import logo from "../images/logo.png";
import "../styles/NavBar.css";

function Navbar() {
  // let navigate = useNavigate();
  return (
    <div className="navbar">
      <NavLink to="./">
        <img id="navbar-logo" src={logo} alt="website logo" />
      </NavLink>
      <nav className="navigation-links">
        <ul>
          <li>
            <NavLink to="/properties">View Properties</NavLink>
          </li>
          <li>
            <NavLink to="/add-property">Add A Property</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
