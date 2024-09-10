import React from "react";
import imageBanner from '../assets/imageBanner.png';
import Card from "../components/Cards";
import "../styles/Home/Home.scss";
import logements from "../data/logements.json";

const Home = () => {
  return (
    <><div className="image-banner">
      <img src={imageBanner} alt="plage qui donne sur une falaise" className="imageBanner"/>
      <span className="textBanner">Chez vous, partout et ailleurs</span>
    </div>
    <div className="card-content">
        <div className="cards">
        {logements.map((logement) => (
          <Card
          key={logement.id}
          title={logement.title}
          cover={logement.cover}/>
        ))}
        </div>
      </div></>
  );
}

export default Home;
