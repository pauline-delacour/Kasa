import React from "react";
import PropTypes from "prop-types";


const BannerImage = ({ image, altText , text, hasOverlay }) => {
    return(
        <div className="bannerImage">
            <img src={image} alt={altText} className="imgBanner"/>  
            {hasOverlay && <div className="overlay"></div>}
            <span className="textbanner">{text}</span>
        </div>
    );
};

BannerImage.propTypes = {
    image: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    text: PropTypes.string,
    hasOverlay: PropTypes.bool
}

BannerImage.defaultProps = {
    text: '',
    hasOverlay: false
}
export default BannerImage;