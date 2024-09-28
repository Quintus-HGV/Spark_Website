/*import React from 'react';
import './Projects.css';
import { useSpring, animated } from '@react-spring/web';

const activities = [
  {
    title: 'Workshop on AI',
    description: 'An engaging workshop on Artificial Intelligence conducted by industry experts.',
    image: '/images/ai_ai.png'
  },
  {
    title: 'Site Visit to Tech Park',
    description: 'A site visit to the local tech park to understand modern infrastructure and technologies.',
    image: '/images/icf_icf.webp'
  },
  {
    title: 'Seminar on Cybersecurity',
    description: 'An informative seminar on the latest trends and practices in cybersecurity.',
    image: '/images/cyber_cyber.png'
  },
  {
    title: 'Hackathon Event',
    description: 'A competitive event where participants code and create innovative solutions.',
    image: '/images/ai_ai.png'
  },
  {
    title: 'Machine Learning Workshop',
    description: 'Hands-on workshop on Machine Learning techniques and applications.',
    image: '/images/ai_ai.png'
  },
  {
    title: 'Networking Session',
    description: 'An opportunity to network with industry professionals and peers.',
    image: '/images/ai_ai.png'
  },
  {
    title: 'Data Science Seminar',
    description: 'A seminar discussing the latest trends and tools in Data Science.',
    image: '/images/ai_ai.png'
  },
  {
    title: 'IoT Project Demo',
    description: 'Demonstration of innovative IoT projects by students.',
    image: '/images/ai_ai.png'
  },
  {
    title: 'Blockchain Conference',
    description: 'A conference exploring the impact and future of blockchain technology.',
    image: '/images/ai_ai.png'
  },
  {
    title: 'Cloud Computing Workshop',
    description: 'Workshop on cloud computing services and their applications.',
    image: '/images/ai_ai.png'
  },
  {
    title: 'AI in Healthcare',
    description: 'A talk on the applications of AI in the healthcare industry.',
    image: '/images/ai_ai.png'
  },
  {
    title: 'Tech Talk: Quantum Computing',
    description: 'An insightful talk on the basics and advancements in Quantum Computing.',
    image: '/images/ai_ai.png'
  },
];

const Projects = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props} className="activity-page">
      <section className="activity-section">
        <div className="activity-header">Recent Activities</div>
        <div className="activity-details">
          {activities.map((activity, index) => (
            <div key={index} className="activity-slot">
              <img src={activity.image} alt={activity.title} />
              <p className="activity-title">{activity.title}</p>
              <p className="activity-description">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>
    </animated.div>
  );
};

export default Projects;
*/

export default function Projects() {
  return (
    <div>
      <h1>Projects Page</h1>
      <p>Coming soon...</p>
    </div>
  );
}
