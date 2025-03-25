import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";
import play_icon from "../../assets/play.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left"
      >
        <img src={assets.about_image2} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon"  onClick={() =>{setPlayState(true)}}/>
      </div>

      <div className="about-right">
        <h3>About Our Company</h3>
        <h2>Lighting the Way for Tomorrow</h2>
        <p>At JAMES ABRAHAM SOLAR ENERGY, we provide innovative solar energy solutions for homes, businesses, and communities. Our goal is to make clean, renewable energy accessible and cost-effective for everyone.</p>
        <p>From residential rooftops to large-scale projects, we design reliable and efficient solar systems tailored to diverse energy needs. Our solutions ensure maximum performance, durability, and seamless integration.</p>
        <p>We are committed to sustainability and customer satisfaction, helping individuals and businesses reduce costs and embrace a greener future. Together, we can power a cleaner, more sustainable world.</p>
      </div>
    </div>
  );
};

export default About;
