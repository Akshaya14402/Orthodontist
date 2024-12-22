import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/contact">Appointment</Link></li> */}
      </ul>
      <div className="hamburger" onClick={toggleSidebar}>
        &#9776;
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="close-btn" onClick={closeSidebar}>&times;</span>
        </div>
        <ul className="sidebar-links">
          <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
          {/* <li><Link to="/contact" onClick={closeSidebar}>Appointment</Link></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
