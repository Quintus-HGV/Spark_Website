import React from 'react';
import './ContactUs.css';
import { SocialIcon } from 'react-social-icons';  // Import the SocialIcon component

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-heading">REACH OUT TO US</h1>
      
      <div className="contact-cards">
        <div className="contact-card">
          <h2>Dr. SHANMUKHA NAGARAJ</h2>
          <p className="role">Faculty Advisor</p>
          <p className="email">Email: shanmukhan@rvce.edu.in</p>
        </div>
        
        <div className="contact-card">
          <h2>Ashok R</h2>
          <p className="role">President</p>
          <p className="email">Email: ashokr.ae22@rvce.edu.in</p>
        </div>
        
        <div className="contact-card">
          <h2>Jigyasa Agrawal</h2>
          <p className="role">Secretary</p>
          <p className="email">Email: jigyasaagrawal.cy22@rvce.edu.in</p>
        </div>
      </div>
      
      <div className="general-contact">
        <h2>Contact us at our email ID:</h2>
        <p className="email">spark.iucee@rvce.edu.in</p>
      </div>
      
      <div className="social-media">
        <h2>FOLLOW US ON:</h2>
        <div className="social-icons">
          <SocialIcon url="https://www.linkedin.com/company/spark-the-iucee-student-chapter-of-rvce/" target="_blank" />
          <SocialIcon url="https://www.instagram.com/spark_rvce/" target="_blank" />
          <SocialIcon url="https://www.youtube.com/@spark-iucee-rvcestudents" target="_blank" />
          <SocialIcon url="https://www.facebook.com/people/Spark-Rvce/100089467477108/" target="_blank" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
