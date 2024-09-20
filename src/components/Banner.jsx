import React from "react";
import PropTypes from "prop-types";

const BannerImage = ({ image, altText, text, hasOverlay }) => {
  //Valeur par défault défini
  text = text || "";
  hasOverlay = hasOverlay || false;

  return (
    <div className="bannerImage">
      <img src={image} alt={altText} className="imgBanner" />
      {hasOverlay && <div className="overlay"></div>}
      <span className="textbanner">{text}</span>
    </div>
  );
};
// Défini des propsTypes pour valider les types de props du composant
BannerImage.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  text: PropTypes.string,
  hasOverlay: PropTypes.bool,
};
export default BannerImage;
