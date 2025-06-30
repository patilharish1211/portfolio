// import React from 'react';
import { FiDownload, FiAward, FiBriefcase, FiBook } from 'react-icons/fi';

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-header">
        <h1 className="title">My <span className="highlight">Resume</span></h1>
        <p className="subtitle">A summary of my experience, education, and skills.</p>
        <button className="download-btn">
          <FiDownload /> Download CV
        </button>
      </div>

      <div className="resume-content">
        <div className="resume-section">
          <div className="section-header">
            <FiBriefcase className="section-icon" />
            <h2>Work Experience</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2024 - 2025</div>
              <div className="timeline-content">
                <h3>FULL STACK WEB DEVELOPER (MERN)</h3>
                <h4>Red And White Multimedia Education</h4>
                <p>Gained experience with front-end and back-end technologies like HTML, CSS, JavaScript, React, Node.js, and
                  MongoDB. Developed and deployed web applications with a focus on responsive design, performance
                  optimization, and user experience.</p>
                <p>Collaborated on team projects and demonstrated skills in problem-solving, debugging, and version control using
                  Git. Completed coursework and hands-on training in Full Stack Development, including JavaScript frameworks,
                  database management, and server-side scripting.
                </p>
              </div>
            </div>

            {/* <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2006 - 2010</div>
              <div className="timeline-content">
                <h3>Bachelor of Computer Science</h3>
                <h4>Istanbul Technical University</h4>
                <p>Focused on software development and human-computer interaction. Participated in multiple hackathons and design competitions.</p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="resume-section">
          <div className="section-header">
            <FiBook className="section-icon" />
            <h2>Education</h2>
          </div>

          <div className="timeline">
            {/* Web Designer */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2024 - 2025</div>
              <div className="timeline-content">
                <h3>MERN Stack Developer</h3>
                <h4>Red and White Skill Education.</h4>
                {/* <p>Designed and developed websites for small to medium-sized businesses. Responsible for the entire design process from wireframing to final implementation.</p> */}
                <p>Built real-like web apps using the MERN stack, turning ideas into full-stack solutions with clean code, responsive design, and interactive features.</p>
                <ul>
                  <li>Designed and developed many responsive websites.</li>
                  <li>Applied UI/UX and basic SEO for better design and visibility.</li>
                  <li>Handled projects from wireframe to deployment with clean code.</li>
                </ul>
              </div>
            </div>

            {/* UI/UX Designer */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2024 - 2025</div>
              <div className="timeline-content">
                <h3>UI/UX Designer</h3>
                <h4>Red and White Skill Education.</h4>
                {/* <p>Designed user interfaces and experiences for web and mobile applications. Worked closely with clients to understand requirements and deliver solutions that met their needs.</p> */}
                <p>Explored the fundamentals of UI/UX design through hands-on practice and real-like projects, focusing on clean visuals and smooth user flows.</p>
                <ul>
                  <li>Created 20+ UI screens in Figma, applying layout, color, and typography basics.</li>
                  <li>Applied intro-level user research and feedback to improve mock designs.</li>
                  <li>Built sample projects focused on visual consistency and smooth user flow.</li>
                </ul>
              </div>
            </div>

            {/* Diploma in Computer Engineering */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2024 - 2026</div>
              <div className="timeline-content">
                <h3>Diploma in Computer Engineering</h3>
                <h4>Swarrnim Startup & Innovation University.</h4>
                {/* <p>Designed and developed websites for small to medium-sized businesses. Responsible for the entire design process from wireframing to final implementation.</p> */}
                {/* <p>Built real-like web apps using the MERN stack, turning ideas into full-stack solutions with clean code, responsive design, and interactive features.</p> */}
                <p>Studied core subjects like Data Structures, DBMS, Operating Systems, Networking, and Software Engineering. Applied technical knowledge through practical web development using the MERN stack.</p>
                <ul>
                  <li>Built responsive full-stack projects using MongoDB, Express, React, and Node.js.</li>
                  <li>Applied UI/UX principles and basic SEO for better design and usability.</li>
                  <li>Completed projects from wireframing to deployment with clean and structured code.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <div className="section-header">
            <FiAward className="section-icon" />
            <h2>Skills & Expertise</h2>
          </div>

          <div className="skills-container">
            <div className="skills-column">
              <h3>Design</h3>
              <div className="skill-list">
                <div className="skill-item">
                  <span className="skill-name">UI/UX Design</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name">Wireframing & Prototyping</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name">Adobe Photoshop</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name">Figma</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '68%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-column">
              <h3>Development</h3>
              <div className="skill-list">
                <div className="skill-item">
                  <span className="skill-name">HTML/CSS</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name">React</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name">Node.js</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-column">
              <h3>Tools</h3><br />
              <div className="skill-list">
                <div className="skill-item">
                  <span className="skill-name">VSCode</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name">Vite</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '70%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name">Git & GitHub</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '68%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <span className="skill-name">Canva</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <div className="section-header">
            <FiAward className="section-icon" />
            <h2>Certifications</h2>
          </div>

          <div className="certifications" style={{marginLeft: '30px'}}>
            <div className="certification-item">
              <h3>Hackathon Participant - Techwar</h3>
              <p>Red and White Skill Education, 2024</p>
            </div>

            <div className="certification-item">
              <h3>Integrated Personality Development Course IPDC</h3>
              <p>Red and White Skill Education, 2024</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;