import React from 'react';
import { assets } from '../../assets/assets';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      
    
    <div className="contact-wrapper">
      <div className="contact-header">
        <p>CONTACT <span className="contact-highlight">US</span></p>
      </div>

      <div className="contact-container">
        <img className="contact-image" src={assets.about_image2} alt="Contact" />

        <div className="contact-info">
          <p className="contact-title">Our Office</p>
          <p className="contact-details">Suite C7, Rukaya Plaza,</p>
          <p className="contact-details">93 Obafemi Awolowo Way,</p>
          <p className="contact-details">Jabi District, Abuja.</p>
          <p className="contact-details">
            <strong>Tel:</strong> +234(0)-817-288-8496  
          </p>
          <p className="contact-details"><strong>Email:</strong> info@icontechconsulting.com</p>
          <p className="contact-title">Careers at Icontech Consulting</p>
          <p className="contact-details">Learn more about our job openings</p>
          <button className="contact-button">Explore Our Service</button>
        </div>
        <div className="contact-col">
        <form>
          <label>Your name</label>
            <input type="text" placeholder="Your Name" required />
          <label>Phone Number</label>
            <input type="text" placeholder="Phone Number" required/>
          <label>Write your messages here</label>
          <textarea name="message"rows='6'placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
      </div>
      </div>
    </div>

    <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31520.086002441938!2d7.425991312114974!3d9.062783054346449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSuite%20C7%2C%20Rukaya%20Plaza%2C%2093%20Obafemi%20Awolowo%20Way%2C%20Jabi%20District%2C%20Abuja.!5e0!3m2!1sen!2sng!4v1742824409982!5m2!1sen!2sng"
          width="100%"
          height="400"
          style={{ border: '0', borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
