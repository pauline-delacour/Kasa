import React, { useState } from "react";
import PropTypes from "prop-types";
import vectorLeft from "../assets/VectorLeft.png";
import vectorRight from "../assets/VectorRight.png";

const SlidesShow = ({ pictures }) => {
  // Utilisation de useState pour stocker l'image actuelle
  const [currentImage, setCurrentImage] = useState(0);

  //Fonction pour aller à l'image suivante
  const nextImage = () => {
    setCurrentImage((prevImage) =>
      // si c'est la derniere image, on revient à la première
      prevImage === pictures.length - 1 ? 0 : prevImage + 1
    );
  };

  //Fonction pour allez à l'image précédente
  const prevImage = () => {
    setCurrentImage((prevImage) =>
      //si on est à la première, on revient à la derniere
      prevImage === 0 ? pictures.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentImage]}
        alt={`Slide ${currentImage + 1}`}
        className="slideshow-image"
      />
      {/*fleche pour aller a l'image précédente*/}
      <button className="prev" onClick={prevImage}>
        <img src={vectorLeft} alt="Prévious"/>
       
      </button>
      {/*fleche pour aller a l'image suivante */}
      <button className="next" onClick={nextImage}>
      <img src={vectorRight} alt="Next"/>
        
      </button>
      {/*Affichage de la numeration de la diapositive*/}
      <div className="slideshow-count">
        {currentImage + 1}/{pictures.length}
      </div>
    </div>
  );
};
SlidesShow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SlidesShow;
