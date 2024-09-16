import React from "react";
import imageAbout from '../assets/image-about.png';
import Collapse from "../components/Collapse";
import BannerImage from "../components/Banner";
import AboutData from "../data/about.json";


const About = () => {
  return (
    <div className="About">
      <BannerImage
       image={imageAbout}
       allText="Montagne "
       text=""
       hasOverlay={false}
       />
      <div className="content-about">
          {AboutData.map((article) => (
            <Collapse
              key={article.id}
              title={article.title}
              content={article.text}
            />
          ))}
      </div>  
    </div>
  );
}


export default About;
