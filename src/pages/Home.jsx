import React from "react";
import imageBanner from '../assets/imageBanner.png';
import Card from "../components/Cards";
import "../styles/Home/Cards.scss"; 


const Home = () => {
  return (
    <><div className="image-banner">
      <img src={imageBanner} alt="plage qui donne sur une falaise" />
      <span>Chez vous, partout et ailleurs</span>
    </div>
    <div className="card-content">
        <div className="cards">
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
        </div>
      </div></>
  );
}

export default Home;
