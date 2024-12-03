import React, { useState, useEffect } from 'react';

const eventsData = [
  {
    title: "LinkedIn Launchpad",
    images: ['/images/events/10.1.jpg', '/images/events/10.2.jpg', '/images/events/10.3.jpg', '/images/events/10.4.jpg'],
    description: "Basic Beginner Friendly Guide on LinkedIn Profile Making"
  },
  /*
  {
    title: "Through the eyes of You(th) 2.0",
    images: ['/images/events/1.1.jpg', '/images/events/1.2.jpg', '/images/events/1.3.jpg', '/images/events/1.4.jpg'],
    description: "2nd Edition of our Flagship SDG Photography Event"
  },*/
  {
    title: "Pratham Tejasotsavam",
    images: ['/images/events/1.1.jpg', '/images/events/1.2.jpg', '/images/events/1.3.jpg', '/images/events/1.4.jpg'],
    description: "One year of our Student Chapter!"
  },
  {
    title: "AUNSF 2.0 2024",
    images: ['/images/events/2.1.jpg', '/images/events/2.2.jpg', '/images/events/2.3.jpg'],
    description: "The second edition of Anurag University National Student Forum"
  },
  {
    title: "ICF Industry Visit",
    images: ['/images/events/3.1.jpg', '/images/events/3.2.jpg', '/images/events/3.3.jpg','/images/events/3.4.jpg', '/images/events/3.5.jpg', '/images/events/3.6.jpg','/images/events/3.7.jpg'],
    description: "An industrial Visit to the Integral Coach Factory, Chennai"
  },

  {
    title: "ISRO SDSC Industry Visit",
    images: ['/images/events/4.1.jpg', '/images/events/4.2.jpg', '/images/events/4.3.jpg', '/images/events/4.4.jpg'],
    description: "SPARK's industry visit to ISRO Satish Dhawan Space Centre in Sriharikota"
  },

  {
    title: "Avishkar Manthan",
    images: ['/images/events/5.1.jpg', '/images/events/5.2.jpg', '/images/events/5.3.jpg'],
    description: "SPARK team participating in the Avishkar Manthan at Malnad College of Engineering"
  },

  {
    title: "EmpowHER - Women's Day 2024",
    images: ['/images/events/6.1.jpg', '/images/events/6.2.jpg', '/images/events/6.3.jpg', 'images/events/6.4.jpg'],
    description: "EmpowHER Women's day Event organised in RVCE"
  },

  {
    title: "IASF 2024",
    images: ['/images/events/7.1.jpg', '/images/events/7.2.jpg', '/images/events/7.3.jpg','/images/events/7.4.jpg', '/images/events/7.5.jpg', '/images/events/7.6.jpg'],
    description: "Glimpses from IASF 2024 at KLE Hubli"
  },

  {
  title: "Problem Based Learning Seminar",
  images: ['/images/events/8.1.jpg', '/images/events/8.2.jpg', '/images/events/8.3.jpg', 'images/events/8.4.jpg'],
  description: "Insightful seminar by Sampada Pachaury Ma'am on PBL"
},

{
  title: "Annual Athletic Meet 2022-23",
  images: ['/images/events/9.1.jpg', '/images/events/9.2.jpg', '/images/events/9.3.jpg', 'images/events/9.4.jpg'],
  description: "Athletic Meet 2022-23 at RVCE"
},


];

const EventsGallery = () => {
  const [currentImageIndices, setCurrentImageIndices] = useState(eventsData.map(() => 0));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndices(prevIndices =>
        prevIndices.map((index, eventIndex) => 
          (index + 1) % eventsData[eventIndex].images.length
        )
      );
    }, 2000); // Change image every 3 seconds, badha bhi sakte hai!

    return () => clearInterval(intervalId);
  }, []);

  const changeImage = (eventIndex, direction) => {
    setCurrentImageIndices(prevIndices => {
      const newIndices = [...prevIndices];
      const imageCount = eventsData[eventIndex].images.length;
      if (direction === 'next') {
        newIndices[eventIndex] = (newIndices[eventIndex] + 1) % imageCount;
      } else {
        newIndices[eventIndex] = (newIndices[eventIndex] - 1 + imageCount) % imageCount;
      }
      return newIndices;
    });
  };

  return (
    <div className="events-gallery">
      <h2>Events Gallery</h2>
      <div className="events-container">
        {eventsData.map((event, eventIndex) => (
          <div key={eventIndex} className="event-box">
            <h3>{event.title}</h3>
            <div className="event-slideshow">
              <img 
                src={event.images[currentImageIndices[eventIndex]]} 
                alt={`${event.title} - Image ${currentImageIndices[eventIndex] + 1}`} 
              />
              <button onClick={() => changeImage(eventIndex, 'prev')} className="prev">&#10094;</button>
              <button onClick={() => changeImage(eventIndex, 'next')} className="next">&#10095;</button>
            </div>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsGallery;