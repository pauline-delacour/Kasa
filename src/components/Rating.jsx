import React from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

const Rating = ({ rating }) => {
    const totalStars = 5;

    return (
        <div className="star-rating">
            {Array.from({length: totalStars}, (v, i) => (
                <span key={i} className={i < rating ? 'star filled' : 'star'}><FaStar />
                </span>
            ))}

        </div>
    )
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired
}

export default Rating 