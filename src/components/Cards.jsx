import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, cover }) => {
  // Utilisation du hook navigate
  const navigate = useNavigate();
  // fontion pour gerer la navigation vers la page logement
  const handleNavigation = () => {
    navigate(`/logement/${id}`);
  };
  return (
    <div className="card" onClick={handleNavigation}>
      <img src={cover} alt={title} className="card-cover" />
      <span className="card-title">{title}</span>
    </div>
  );
};

// Défini des propsTypes pour valider les types de props du composant
Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
};
export default Card;
