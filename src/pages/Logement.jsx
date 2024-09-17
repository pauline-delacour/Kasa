import React from "react";
import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Rating from "../components/Rating";
import Profile from "../components/Profile";
import Collapse from "../components/Collapse";
import SlidesShow from "../components/Slideshow";


const Logement = () => {
  // récupération de l'id à partir de l'URL
  const { id } = useParams();
  // recherche du logement avec l'id dans le fichier Json
  const logement = logements.find((element) => element.id === id);

  //Si le logement n'existe pas, redirection vers la page d'erreur
  if (!logement) {
    return <Navigate to="/error" />;
  }
  return (
    <div className="articleLogement">
      <SlidesShow pictures={logement.pictures} />

      <div className="dessous-image">
        <div className="dessous-image-gauche">
          <span className="title">{logement.title}</span>
          <span className="location">{logement.location}</span>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="dessous-image-droite">
          <Profile host={logement.host}/>
          <Rating rating={logement.rating}/>
        </div>
      </div>
      <div className="article-collapse">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Logement;
