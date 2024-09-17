import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/LOGO.png';

const Header = () => {
  const location = useLocation()
  // récupére le chemin de la page courante

  return (
    <nav className="header">
      <img src={logo} alt="Logo" className="logo-kasa"/>

      <div className="nav-link">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>A propos</Link>
      </div>
    </nav>
  );          
}

export default Header;
