import React from 'react';
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
              <div className="timeline-date">2018 - Present</div>
              <div className="timeline-content">
                <h3>Senior Product Designer</h3>
                <h4>Creative Solutions, Istanbul</h4>
                <p>Lead the design team in creating innovative digital products for clients across various industries. Responsible for the entire design process from concept to implementation.</p>
                <ul>
                  <li>Increased client satisfaction by 35% through improved design processes</li>
                  <li>Led a team of 5 designers and mentored junior team members</li>
                  <li>Implemented design systems that reduced development time by 40%</li>
                  <li>Collaborated with development teams to ensure seamless implementation</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2015 - 2018</div>
              <div className="timeline-content">
                <h3>UI/UX Designer</h3>
                <h4>Digital Innovations, Istanbul</h4>
                <p>Designed user interfaces and experiences for web and mobile applications. Worked closely with clients to understand requirements and deliver solutions that met their needs.</p>
                <ul>
                  <li>Created user interfaces for 20+ web and mobile applications</li>
                  <li>Conducted user research and usability testing to improve product designs</li>
                  <li>Collaborated with marketing teams to ensure brand consistency</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2012 - 2015</div>
              <div className="timeline-content">
                <h3>Web Designer</h3>
                <h4>Tech Solutions, Istanbul</h4>
                <p>Designed and developed websites for small to medium-sized businesses. Responsible for the entire design process from wireframing to final implementation.</p>
                <ul>
                  <li>Designed and developed 30+ responsive websites</li>
                  <li>Implemented SEO best practices resulting in improved search rankings</li>
                  <li>Managed client relationships and ensured project delivery on time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="resume-section">
          <div className="section-header">
            <FiBook className="section-icon" />
            <h2>Education</h2>
          </div>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2010 - 2012</div>
              <div className="timeline-content">
                <h3>Master of Design</h3>
                <h4>Istanbul Design Institute</h4>
                <p>Specialized in User Experience Design and Interactive Media. Graduated with honors.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2006 - 2010</div>
              <div className="timeline-content">
                <h3>Bachelor of Computer Science</h3>
                <h4>Istanbul Technical University</h4>
                <p>Focused on software development and human-computer interaction. Participated in multiple hackathons and design competitions.</p>
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
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">Wireframing & Prototyping</span>
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
              <h3>Tools</h3>
              <div className="skill-list">
                <div className="skill-item">
                  <span className="skill-name">Figma</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">Adobe XD</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">Adobe Photoshop</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <span className="skill-name">Adobe Illustrator</span>
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
          
          <div className="certifications">
            <div className="certification-item">
              <h3>Google UX Design Professional Certificate</h3>
              <p>Google, 2020</p>
            </div>
            
            <div className="certification-item">
              <h3>Advanced Web Development Bootcamp</h3>
              <p>Udemy, 2018</p>
            </div>
            
            <div className="certification-item">
              <h3>Certified Scrum Master</h3>
              <p>Scrum Alliance, 2017</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;