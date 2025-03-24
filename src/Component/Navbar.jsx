import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"; 
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <img onClick={() => navigate("/")} className="navbar-logo" src={assets.logo} alt="Logo" />

      <ul className="navbar-menu">
        <NavLink to="/"><li>HOME</li></NavLink>
        <NavLink to="/services"><li>SERVICES</li></NavLink>
        <NavLink to="/about"><li>ABOUT</li></NavLink>
        <NavLink to="/blog"><li>BLOG</li></NavLink>
        <NavLink to="/contact"><li>CONTACT</li></NavLink>
      </ul>


      <div className="right-section">
        <button onClick={() => navigate("/portfolio")} className="portfolio-button">Portfolio</button>

        <img className="mobile-menu-icon" onClick={() => setShowMenu(true)} src={assets.menu_icon} alt="Menu" />
      </div>

      <div className={`mobile-menu ${showMenu ? "show" : ""}`}>
        <div className="mobile-menu-header">
          <img className="navbar-logo" src={assets.logo} alt="Logo" />
          <img className="mobile-menu-icon" onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <ul className="mobile-menu-list">
          <NavLink onClick={() => setShowMenu(false)} to="/"><p className="mobile-menu-item">HOME</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/services"><p className="mobile-menu-item">SERVICES</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about"><p className="mobile-menu-item">ABOUT</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/blog"><p className="mobile-menu-item">BLOG</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact"><p className="mobile-menu-item">CONTACT</p></NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
