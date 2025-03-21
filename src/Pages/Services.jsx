import React from 'react'
import '../Services.css'

const Services = () => {
  return (
    <div className="container">
      <div className="section">
        <h1>OUR FOCUSABLE SERVICES</h1>
      </div>
      <div className="row">
        <div className="service-box-items">
          <div className="icon">
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