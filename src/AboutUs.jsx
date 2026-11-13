import React from 'react';
import './AboutUs.css';

function AboutUs() {
  pStyle = {
    textAlign: 'center'
  };
  return (
    <div className="about-us-container">
      <div className="about-us-description">
        <p style={{ textAlign: 'center' }}>Welcome to Paradise Nursery, where green meets serenity!</p>
        <p>Our mission is to bring nature closer to your home by offering a wide variety of high-quality indoor and outdoor plants. We believe that plants not only enhance the beauty of living spaces but also improve mental well-being and air quality.</p>
        <p>Whether you are a seasoned plant enthusiast or just starting your green journey, our expert team is here to help you select the perfect plants for your space. Explore our collection today and transform your home into a lush green sanctuary.</p>
      </div>
    </div>
  );
}

export default AboutUs;
