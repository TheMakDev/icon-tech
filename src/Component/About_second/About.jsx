import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";
// import play_icon from "../../assets/play_icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left"
      >
        <img src={assets.about_image2} alt="" className="about-img" />
        {/* <img src={play_icon} alt="" className="play-icon" /> */}
      </div>

      <div className="about-right">
        <h3>About Our Company</h3>
        <h2>Lighting the Way for Tomorrow</h2>
        <p>Icontech was born out of a need to redefine the way people and businesses interact with technology. This led us to a path of creating worldWe create integrated audio-visual experiences that transform the way you live learn and work; to help you stay connected, be seen, be heard and remain in control of your digitally enabled environment.</p>
      </div>
    </div>
  );
};

export default About;
