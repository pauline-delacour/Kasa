import React from "react";
import '../styles/About/About.scss';
import imageAbout from '../assets/image-about.png';
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div className="About">
      <img src={imageAbout} alt="montage" className="imageAbout" />
      <div className="content-about">
       <Collapse
       title={<span>Fiabilité</span>}
       content={<p>Ceci est le texte du composant collapse</p>}/>
       <Collapse
       title={<span>Respect</span>}
       content={<p>Ceci est le texte du composant collapse</p>}/>
        <Collapse
       title={<span>Service</span>}
       content={<p>Ceci est le texte du composant collapse</p>}/>
         <Collapse
       title={<span>Sécurité</span>}
       content={<p>Ceci est le texte du composant collapse</p>}/>
      </div>  
    </div>
  );
}


export default About;
