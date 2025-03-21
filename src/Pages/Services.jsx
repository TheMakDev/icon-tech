import React from 'react'
import './Styles/Services.css'

import service_img from './path/to/service_img.jpg'; // Update the path to the correct image file

const Services = () => {
  return (
    <div className="container">
      <div className="section">
        <h1>OUR FOCUSABLE SERVICES</h1>
      </div>
      <div className="row">
        <div className="service-box-items">
          <div className="icon"> <img src={service_img} alt="" />
            <h3>STAY CONNECTED</h3>
            <p>Our automation systems ensure uninterrupted connectivity, no matter your 
              location. Stay in the loop, never missing a 
              moment. Our tool kit includes:
            </p>
            <ul>
              <li>Home Automation</li>
              <li>Office Automation</li>
              <li>Fibre-to-the-Home Internet Connection</li>
              <li>High Definition Pan tilt Zoom Cameras (PTZ)</li>
              <li>Motion Sensitive Lighting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services