import React, { useState, useEffect } from 'react';
import './Activities.css';
import EventsGallery from './EventsGallery';

// Sample Images for Slider with names
const sliderImages = [
  { src: '/images/IV1.jpg', name: 'Industry Visits' },
  { src: '/images/IV2.jpg', name: 'Industry Visits' },
  { src: '/images/IV3.jpg', name: 'Industry Visits' },
  { src: '/images/Speaker.jpg', name: 'Expert Talks' },
  { src: '/images/empowher.jpg', name: 'Expert Talks' },
  { src: '/images/Workshop1.jpg', name: 'Workshops' },
  { src: '/images/Workshop2.jpg', name: 'Workshops' },
];

// Sample Activities Data
const activities = [
  {
    image: '/images/shakti.jpg',
    title: 'Shakti Shiksha',
    points: ['Awareness Program for girls', 'Health & Hygiene', 'Career Guidance'],
    details: 'Reflecting on the success of our women empowerment event- \'Shakti Shiksha\'',
    youtubeLink: 'https://www.youtube.com/embed/FQTqmJHSroQ?si=V8FIuN_GonsDTJoz',
  },
  {
    image: '/images/Kaalnirnay.jpg',
    title: 'KAALNIRNAY',
    points: ['Preventing Climate Change', 'Distributing Climate Clocks', 'Hands-on tutorials'],
    details: 'Awareness program towards the climate change',
    youtubeLink: 'https://www.youtube.com/embed/r2cQMMzvP2I?si=eoIsMlH2MLtwB9mp',
  },
  {
    image: '/images/sdg.jpg',
    title: 'Through the eyes of You(th)',
    points: ['SDG Photography Contest', 'Awareness on SDGs'],
    details: 'Encouraging young talent to capture their unique perspectives on SDGs',
    youtubeLink: 'https://www.youtube.com/embed/1htKOA4vkGU?si=WjApZGy2y_mtqfT3',
  },

  {
    image: '/images/i3.jpg',
    title: 'Infosys Campus Visit',
    points: ['Exploring the Infosys Campus', 'Connecting with Industry Experts'],
    details: 'A visit where innovation thrives, knowledge flows, and dreams take shape.',
    youtubeLink: 'https://www.youtube.com/embed/-YdDg8O5Mhc?si=g8j9JXOOcHSQoRzT',
  },

  {
    image: '/images/IV2.jpg',
    title: 'YTPS RTPS Industry Visit',
    points: ['Yeramarus Thermal Power Station', 'Raichur Thermal Power Station'],
    details: 'Discovering the fascinating world of thermal power plants at Yeramarus and Raichur',
    youtubeLink: 'https://www.youtube.com/embed/VOOXQGl3VfM?si=z3giDcbDXJNwVLKE',
  },

  {
    image: '/images/environment.jpg',
    title: 'Environment Day',
    points: ['Environment Awareness Quiz', 'Planting Saplings', 'Clean & Green Campus'],
    details: 'SPARK organized a Quiz event at RVCE to commemorate World Environment Day',
    youtubeLink: 'https://www.youtube.com/embed/MkSiT0NZ89o?si=XXqQeIBO0t-YNc7Y',
  },
  
];

const Activities = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedActivity, setExpandedActivity] = useState(null);

  // Auto-transition slider images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1));
  };

  const handleActivityClick = (activity) => {
    setExpandedActivity(activity);
  };

  const handleClosePopup = () => {
    setExpandedActivity(null);
  };

  return (
    <div className="activities-container">
      {/* Slider Section */}
      <div className="slider">
        <img src={sliderImages[currentSlide].src} alt="Event Slide" className="slide-image" />
        <div className="slider-overlay">
          <span className="activity-name">{sliderImages[currentSlide].name}</span>
        </div>
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>

      {/* Activities Section */}
      <div className="activities-section">
        {activities.map((activity, index) => (
          <div 
            key={index} 
            className={`activity-box ${expandedActivity === activity ? 'expanded' : ''}`}
            onClick={() => handleActivityClick(activity)}
          >
            <img src={activity.image} alt={activity.title} className="activity-image" />
            <div className="activity-content">
              <h3>{activity.title}</h3>
              <ul>
                {activity.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Activity Details */}
      {expandedActivity && (
        <div className="activity-popup" onClick={handleClosePopup}>
          <div className="popup-content">
            <h2>{expandedActivity.title}</h2>
            <p>{expandedActivity.details}</p>
            <div className="youtube-container">
              <iframe 
                src={expandedActivity.youtubeLink} 
                title={expandedActivity.title}
                frameBorder="0"
                allowFullScreen
                className="youtube-video"
              ></iframe>
            </div>
            <p>{expandedActivity.extraInfo}</p>
          </div>
        </div>
      )}
      <EventsGallery />
    </div>
  );
};

export default Activities;
