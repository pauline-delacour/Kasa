import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/LOGO.png';
import '../styles/Header/Header.scss'

function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="Logo" className="logo-kasa"/>

      <div className="nav-link">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </div>
    </nav>
  );          
}

export default Header;
