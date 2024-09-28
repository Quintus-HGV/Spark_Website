import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/images/rvce.png" alt="rv logo" className="rvlogo" />
          <img src="/images/spark.png" alt="spark logo" className="sparklogo" />
          <img src="/images/iucee.png" alt="spark logo" className="sparklogo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/office-bearers">Office Bearers</Link></li>
          <li><Link to="/wings">Wings</Link></li>
          <li><Link to="/activities">Activities & Events</Link></li>
          <li><Link to="/podcasts">Podcasts</Link></li>
          <li className="dropdown" ref={dropdownRef}>
            <span onClick={toggleDropdown}>
              More <i className={`arrow ${isDropdownOpen ? 'up' : 'down'}`}></i>
            </span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/projects">Projects</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
