import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiSend, FiDownload, FiAward, FiBriefcase, FiBook, FiExternalLink } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';
// import 'react-simple-typewriter/dist/index.css'

const Home = () => {
  // Sample project data for featured projects
  const featuredProjects = [
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      description: 'Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Figma']
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      description: 'A secure and user-friendly mobile banking application with advanced features and intuitive interface.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Sketch']
    },
    {
      id: 3,
      title: 'Corporate Brand Identity',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
      technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'InDesign']
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="header">

        <div className='typewriter-effect' style={{fontFamily: 'monospace'}}>
          <h2>
            # I’m a{' '}
            <span style={{ color: '#8a56ff', fontStyle: 'revert' }}>
              <i>
                <Typewriter
                words={[
                  'Full Stack Web Developer.',
                  'UI/UX Designer.',
                  'Programmer.',
                  'Front-End Developer.',
                  'Back-End Developer.'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1000}
              />
              </i>
            </span>
          </h2>
        </div><br />

        <h1 className="title">Transforming Your <br />Ideas into <span className="highlight">Reality</span></h1>
        {/* <p className="subtitle">Passionate about creating intuitive and engaging user experiences.<br />Specialize in transforming ideas into beautifully crafted products.</p> */}
        <p className="subtitle">Full Stack Developer passionate about clean code, modern tech, UI/UX, <br /> and building responsive web apps. Always learning, always creating.</p>


        <div className="buttons">
          <Link to="/contact" className="talk-btn">Let's Talk</Link>
          <Link to="/projects" className="work-btn">My Work <span className="arrow">→</span></Link>
        </div>

      </div>

      {/* About Section */}
      <div className="home-section about-section">
        <div className="section-header">
          <h2 className="section-title">About <span className="highlight">Me</span></h2>
          <Link to="/about" className="section-link">View Full Details →</Link>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" alt="Profile" />
          </div>

          <div className="about-text">
            <h3>Patil Harish</h3>
            <h4>Developer & Designer</h4>

            <p>
              {/* I am a passionate product designer and developer with over 12 years of experience in creating intuitive and engaging user experiences. My journey in the digital world began when I discovered my passion for transforming ideas into beautifully crafted products. */}
                Full Stack Developer with a passion for clean code, modern technologies, and intuitive UI/UX design. I enjoy building fast, responsive web applications that deliver great user experiences. Constantly exploring, learning, and creating better digital solutions.
            </p>

            <div className="skills-preview">
              <h4>My Skills</h4>
              <div className="skill-list">
                <div className="skill-item">
                  <span className="skill-name">UI/UX Design</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name">Web Development</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="home-section projects-section">
        <div className="section-header">
          <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
          <Link to="/projects" className="section-link">View All Projects →</Link>
        </div>

        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <Link to="/projects" className="project-link">View Details <FiExternalLink /></Link>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Preview Section */}
      <div className="home-section resume-section">
        <div className="section-header">
          <h2 className="section-title">My <span className="highlight">Resume</span></h2>
          <Link to="/resume" className="section-link">View Full Resume →</Link>
        </div>

        <div className="resume-preview">

          <div className="resume-column">
            <div className="resume-preview-section">
              <div className="section-header">
                <FiBook className="section-icon" />
                <h3>Education</h3>
              </div>

              <div className="timeline-preview">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2024 - 2026</div>
                  <div className="timeline-content">
                    <h4>MERN Stack & UI/UX Course</h4>
                    <h5>Istanbul Design Institute</h5>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2024 - 2026</div>
                  <div className="timeline-content">
                    <h4>Diploma in Computer Engineering</h4>
                    <h5>Swarrnim Startup & Innovation University</h5>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">2022 - 2023</div>
                  <div className="timeline-content">
                    <h4>HIGHER SECONDARY</h4>
                    <h5>Gyanmanjari Vidhyalay</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-cta">
          <button className="download-btn">
            <FiDownload /> Download CV
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="home-section contact-section">
        <div className="section-header">
          <h2 className="section-title">Get in <span className="highlight">Touch</span></h2>
          <Link to="/contact" className="section-link">Contact Page →</Link>
        </div>

        <div className="contact-preview">
          <div className="contact-info-preview">
            <div className="contact-item">
              <div className="contact-icon">
                <FiPhone />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+90 555 123 4567</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiMail />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>aabraham.james@example.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Istanbul, Turkey</p>
              </div>
            </div>
          </div>

          <div className="contact-form-preview">
            <Link to="/contact" className="contact-cta-btn">
              <FiSend /> Send Me a Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;