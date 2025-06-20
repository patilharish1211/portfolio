import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="title">About <span className="highlight">Me</span></h1>
        <p className="subtitle">Learn more about my journey, skills, and experience.</p>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" alt="Profile" />
        </div>
        
        <div className="about-text">
          <h2>Patil Harish</h2>
          <h3>Product Designer & Developer</h3>
          
          <p>
            I am a passionate product designer and developer with over 12 years of experience in creating intuitive and engaging user experiences. My journey in the digital world began when I discovered my passion for transforming ideas into beautifully crafted products.
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
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div className="skill-item">
                <span className="skill-name">Web Development</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="skill-item">
                <span className="skill-name">Mobile App Design</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="skill-item">
                <span className="skill-name">Branding</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Master of Design</h4>
              <p>Istanbul Design Institute, 2010-2012</p>
            </div>
            <div className="education-item">
              <h4>Bachelor of Computer Science</h4>
              <p>Istanbul Technical University, 2006-2010</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;