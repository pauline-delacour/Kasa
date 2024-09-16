import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ id, title, cover }) => {
  return (
    <div className="card">
      <Link to={`/logement/${id}`}>
        <img src={cover} alt={title} className="card-cover" />
        <span className="card-title">{title}</span>
      </Link>
    </div>
  );
};
Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
};
export default Card;
