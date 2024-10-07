import React, { useState } from 'react';
import './Podcasts.css';
import { useSpring, animated, useTrail } from '@react-spring/web';

const PodcastEpisode = ({ title, embedLink, isExpanded, toggleExpand }) => (
  <div className={`podcast-episode ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
    <h3 className="podcast-title">{title}</h3>
    {isExpanded && (
      <div className="podcast-content">
        <iframe
          width="100%"
          height="315"
          src={embedLink}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )}
  </div>
);

const PodcastPage = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });

  const podcastEpisodes = [
    {
      title: "KNS Experience - Stories, Strategies & Success| K.N. Subramanya | Principal - RVCE",
      embedLink: "https://www.youtube.com/embed/ceAfsPzPQsw?si=_3uARkO6nTySVTPf"
    },
    // Add more episodes here as they become available
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const trail = useTrail(podcastEpisodes.length, {
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
  });

  return (
    <animated.div style={fadeIn} className="podcast-page">
      <h1>Our Podcast</h1>
      <p className="podcast-intro">Welcome to our podcast series! Explore our episodes below.</p>
      <div className="podcast-list">
        {trail.map((props, index) => (
          <animated.div key={index} style={props}>
            <PodcastEpisode
              {...podcastEpisodes[index]}
              isExpanded={expandedIndex === index}
              toggleExpand={() => toggleExpand(index)}
            />
          </animated.div>
        ))}
      </div>
    </animated.div>
  );
};

export default PodcastPage;