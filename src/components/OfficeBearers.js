import React from 'react';
import './OfficeBearers.css';
import { useSpring, animated } from '@react-spring/web';

const officeBearers = {
  chairman: { name: 'Dr. K N Subramanya', title: 'Principal', image: '/images/princi.jpg' },
  facultyAdvisors: [
    { name: 'Dr. K.S. GEETHA', title: 'Vice Principal', image: '/images/vp.jpeg' },
    { name: 'Dr. SHANMUKHA NAGARAJ', title: 'Dean Academics', image: '/images/dean.jpg' },
  ],
  facultyCoordinator: { name: 'Dr. PRAPULLA S B', title: 'Assistant Professor, CSE', image: '/images/psb.jpg' },
  coreTeam: [
    { name: 'President', title: 'Ashok R, ASE', image: '/images/ashok.png' },
    { name: 'Vice-President', title: 'Nikhitha Sunil, IEM', image: '/images/nikitha.png' },
    { name: 'Secretary', title: 'Jigyasa Agrawal, CSE (CY)', image: '/images/jigyasa.png' },
    { name: 'Treasurer', title: 'Harsh Gupta, ISE', image: '/images/harsh.png' },
  ],
  wings: [
    { name: 'Activities & Events', title: 'Abhishek Saraff, CSE (CY)', image: '/images/abhishek.png' },
    { name: 'Industrial Connect and People\'s Operations', title: 'Adarsh Srivastava, CSE (CY)', image: '/images/adarsh.png' },
    { name: 'Industrial Connect and People\'s Operations', title: 'Poorna Chandra K S, CSE', image: '/images/poorna.png' },
    { name: 'Social Media', title: 'Gayathri V, CHE', image: '/images/gayathri.png' },
    { name: 'Projects', title: 'Abhishek S, IEM', image: '/images/abhishek_im.png' },
    { name: 'Projects', title: 'Chinmaya Nadig, IEM', image: '/images/chinmaya.png' },
    { name: 'Research & Development', title: 'Yashwanth R, MECH', image: '/images/yashwanth.png' },
    { name: 'Women Empowerment', title: 'Nikhitha Sunil, IEM', image: '/images/nikitha.png' },
  ],
};

const OfficeBearers = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props} className="office-bearers">
      <h1>Office Bearers</h1>
      <img src="/images/flowchart.png" alt="Flowchart" className="flowchart-image" />
      <section className="details chairman-section">
        <div className="section-header">Chairman</div>
        <div className="bearer-card center-card">
          <img src={officeBearers.chairman.image} alt={officeBearers.chairman.name} className="bearer-image" />
          <h3>{officeBearers.chairman.name}</h3>
          <p>{officeBearers.chairman.title}</p>
        </div>
      </section>
      <section className="details advisors-section">
        <div className="section-header">Faculty Advisors</div>
        <div className="bearers-row">
          {officeBearers.facultyAdvisors.map((advisor, index) => (
            <div key={index} className="bearer-card">
              <img src={advisor.image} alt={advisor.name} className="bearer-image" />
              <h3>{advisor.name}</h3>
              <p>{advisor.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="details coordinator-section">
        <div className="section-header">Faculty Coordinator</div>
        <div className="bearer-card center-card">
          <img src={officeBearers.facultyCoordinator.image} alt={officeBearers.facultyCoordinator.name} className="bearer-image" />
          <h3>{officeBearers.facultyCoordinator.name}</h3>
          <p>{officeBearers.facultyCoordinator.title}</p>
        </div>
      </section>
      <section className="details core-team-section">
        <div className="section-header">Core Team</div>
        <div className="bearers-row">
          {officeBearers.coreTeam.map((member, index) => (
            <div key={index} className="bearer-card">
              <img src={member.image} alt={member.name} className="bearer-image" />
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="details wings-section">
        <div className="section-header">Wing Heads</div>
        <div className="bearers-row">
          {officeBearers.wings.slice(0, 4).map((wing, index) => (
            <div key={index} className="bearer-card">
              <img src={wing.image} alt={wing.name} className="bearer-image" />
              <h3>{wing.name}</h3>
              <p>{wing.title}</p>
            </div>
          ))}
        </div>
        <div className="bearers-row">
          {officeBearers.wings.slice(4).map((wing, index) => (
            <div key={index} className="bearer-card">
              <img src={wing.image} alt={wing.name} className="bearer-image" />
              <h3>{wing.name}</h3>
              <p>{wing.title}</p>
            </div>
          ))}
        </div>
      </section>
    </animated.div>
  );
};

export default OfficeBearers;
