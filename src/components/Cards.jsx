import React from "react";
import "../styles/Home/Cards.scss";
import PropTypes from 'prop-types';

const Card = ({title, cover,}) => {
    return(
        <div className="card">
          <img src={cover} alt={title} className="card-cover"/>
          <span className="card-title">{title}</span>
        </div>
    );
}
Card.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
}
export default Card;