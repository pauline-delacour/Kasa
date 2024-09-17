import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, cover }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/logement/${id}`)
  }
  return (
    <div className="card" onClick={handleNavigation}>
        <img src={cover} alt={title} className="card-cover" />
        <span className="card-title">{title}</span>
    </div>
  );
};
Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
};
export default Card;
