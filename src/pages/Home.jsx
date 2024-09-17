import React from "react";
import Card from "../components/Cards";
import logements from "../data/logements.json";
import BannerImage from "../components/Banner";
import homeImage from "../assets/imageBanner.png";

const Home = () => {
  return (
    <div>
      <BannerImage
        image={homeImage}
        altText="vue sur la mer"
        text="Chez vous, partout et ailleurs"
        hasOverlay={true}
      />

      <div className="card-content">
        <div className="cards">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
