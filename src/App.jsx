// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiFileText, FiMail, FiCpu } from 'react-icons/fi';
import './App.css';
import mine from '../src/assets/Mine.jpg'

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Technology from './pages/Technology'

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <FiHome className="nav-icon" />
            <span className="tooltip">Home</span>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <FiUser className="nav-icon" />
            <span className="tooltip">About</span>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <FiBriefcase className="nav-icon" />
            <span className="tooltip">Projects</span>
          </NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <FiFileText className="nav-icon" />
            <span className="tooltip">Resume</span>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <FiMail className="nav-icon" />
            <span className="tooltip">Contact</span>
          </NavLink>
          <NavLink to="/technology" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <FiCpu className="nav-icon" />
            <span className="tooltip">Tech</span>
          </NavLink>
        </nav>

        <div className="content">
          <div className="profile-card">
            <div className="profile-img">
              <img src={mine} alt="Profile" />
            </div>
            <h1 className="profile-title">Patil Harish</h1>
            <p className="profile-location">Gujarat, India</p>
            <div className="profile-social">
              <a href="https://www.linkedin.com/in/harish-patil-89b53a2ab/" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/patilharish1211" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1C5.925 1 1 5.925 1 12c0 4.869 3.162 8.996 7.555 10.447.552.101.755-.24.755-.533 0-.264-.01-1.136-.015-2.06-3.072.668-3.719-1.48-3.719-1.48-.503-1.278-1.23-1.62-1.23-1.62-1.006-.687.076-.673.076-.673 1.112.078 1.698 1.142 1.698 1.142.99 1.696 2.596 1.206 3.228.922.101-.717.388-1.206.706-1.483-2.452-.279-5.032-1.226-5.032-5.454 0-1.205.43-2.188 1.135-2.96-.114-.278-.492-1.398.108-2.915 0 0 .926-.296 3.035 1.13a10.58 10.58 0 0 1 2.762-.371c.937.004 1.88.127 2.762.371 2.107-1.426 3.03-1.13 3.03-1.13.603 1.517.225 2.637.112 2.915.708.772 1.134 1.755 1.134 2.96 0 4.238-2.586 5.172-5.045 5.446.399.343.753 1.024.753 2.065 0 1.49-.014 2.69-.014 3.054 0 .296.198.64.763.53C19.84 20.992 23 16.868 23 12c0-6.075-4.925-11-11-11z" />
                </svg>
              </a>

              <a href="https://www.instagram.com/mr.harish_official_12/" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
            <Link to="/contact" className="profile-talk-btn">Let's Talk</Link>
          </div>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/technology" element={<Technology />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
