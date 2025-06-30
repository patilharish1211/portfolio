import React from 'react';
import me from '../assets/Mine.jpg'

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="title">About <span className="highlight">Me</span></h1>
        <p className="subtitle">Learn more about my journey, skills, and experience.</p>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src={me} alt="Profile" style={{height: '500px'}} />
        </div>
        
        <div className="about-text">
          <h2>Patil Harish</h2>
          <h3>Developer & Designer</h3>
          
          <p>
            {/* I am a passionate product designer and developer with over 12 years of experience in creating intuitive and engaging user experiences. My journey in the digital world began when I discovered my passion for transforming ideas into beautifully crafted products. */}
            I'm a Full Stack Developer with the soul of a UI/UX designer — writing clean code by day and sketching seamless experiences by night. I don’t just build web apps; I craft digital journeys that are fast, responsive, and intuitive to the core. For me, great tech is nothing without great design. I’m forever exploring, forever refining — turning complex ideas into beautifully simple solutions that users love to click.
          </p>
          
          <p>
            Throughout my career, I've had the privilege of working with clients from around the world, helping them bring their visions to life. My approach combines aesthetic design with functional development, ensuring that every project not only looks great but also delivers exceptional user experience.
          </p>
          
          <div className="skills">
            <h3>My Skills</h3>
            <div className="skill-list">
              <div className="skill-item">
                <span className="skill-name">UI/UX Design</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div className="skill-item">
                <span className="skill-name">Web Development</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="skill-item">
                <span className="skill-name">Other Tools</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '73%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>MERN Stack & UI/UX Course.</h4>
              <p>Red and White Skill Education, 2024-2025</p>
            </div>
            <div className="education-item">
              <h4>Diploma in Computer Engineering.</h4>
              <p>Swarrnim Startup & Innovation University, 2024-2026</p>
            </div>
            <div className="education-item">
              <h4>HIGHER SECONDARY.</h4>
              <p>Gyanmanjari Vidyapeeth, 2022-2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;