import React from 'react'
import './Services.css'


const Services = () => {
  return (
    <div className="container">
      <div className="section">
        <h1>OUR FOCUSABLE SERVICES</h1>
      </div>
      <div className="row">
        <div className="service-box-items">
          <div className="icon"> 
            
            <h3>Stay Connected</h3>
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
        <div className="service-box-items">
          <div className="icon"> 
            <h3>Be Seen </h3>
            <p>Our AV conferencing solutions enhance visuals for crystal-clear meetings, whether virtual or in-person
            </p>
            <ul>
              <li>Video Walls</li>
              <li>Video Conferencing</li>
              <li>Repeater Screens</li>
              <li>Projectors (PTZ)</li>
              <li>Desk Pop-Up Monitors</li>
              <li>Video Recording Systems</li>
              <li>Digital Microphone Control System</li>
            </ul>
          </div>
        </div>
        <div className="service-box-items">
          <div className="icon"> 
            <h3>Be Heard</h3>
            <p>Amidst the noise, we make sure your voice is heard loud and clear. Every point matters. Our offerings encompass:
            </p>
            <ul>
              <li>Conference Interpretation System</li>
              <li>Room Audio Technology</li>
              <li>Audio Recording System</li>
              <li>Conferencing Voting Software</li>
            </ul>
          </div>
        </div>
        <div className="service-box-items">
          <div className="icon"> 
            <h3>Take Control</h3>
            <p>Security is paramount. Our advanced security equipment empowers you to oversee your environment effectively:
            </p>
            <ul>
              <li>State-of-the-Art Security Surveillance Systems</li>
              <li>Biometric & Remote Access Control Systems</li>
              <li>Audio Recording System</li>
              <li>Smart Security System and Control Panel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services