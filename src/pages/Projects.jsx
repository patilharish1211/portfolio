import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
//HTML/CSS/BT
import Agriculture from '../assets/project_imgs/Agriculture.png'
import Nova from '../assets/project_imgs/Nova.png'
import SierraDesigns from '../assets/project_imgs/SieraDesigns.png'

//JS
import BellRoy from '../assets/project_imgs/BellRoy.png'
import BeardBrand from '../assets/project_imgs/BeardBrand.png'
import JSNormalProjects from '../assets/project_imgs/Js_Normal_Projects.png'

//React
import WestSide from '../assets/project_imgs/WestSide.png'
import Everlane from '../assets/project_imgs/Everlane.png'
import Todo_List from '../assets/project_imgs/Todo_List.png'
import ReactNormalProjects from '../assets/project_imgs/React_Normal_Projects.png'

//Node
import NodeNormalProjects from '../assets/project_imgs/Node.js_Normal_Projects.png'

//Json-Server
import WestSide_BE from '../assets/project_imgs/WestSide_BE.png'
import BeellRoy_BE from '../assets/project_imgs/BellRoy_BE.png'
import BeardBrand_BE from '../assets/project_imgs/BeardBrand_BE.png'

//other
import CppNormalPrograms from '../assets/project_imgs/C++_Normal_Programming.jpg'
import Calculalator from '../assets/project_imgs/Calculator.png'
import Age_Calculalator from '../assets/project_imgs/Age_Calculator.png'


const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Agriculture Redesign',
      category: 'HTML/CSS/BT',
      image: Agriculture,
      description: 'Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.',
      technologies: ['HTML5', 'CSS3', 'BootStrap5'],
      livelink: 'https://agriculture-clone.netlify.app',
      codelink: 'https://github.com/patilharish1211/AgriCulture_WebSite_Clone'
    },
    {
      id: 2,
      title: 'Nova Redesign',
      category: 'HTML/CSS/BT',
      image: Nova,
      description: 'Revamped the entire e-commerce UI/UX to enhance engagement and boost conversions..',
      technologies: ['HTML5', 'CSS3', 'BootStrap5'],
      livelink: 'https://nova-clone.netlify.app',
      codelink: 'https://github.com/patilharish1211/Nova_WebSite_Clone'
    },
    {
      id: 3,
      title: 'Sierra Designs Clone',
      category: 'HTML/CSS/BT',
      image: SierraDesigns,
      description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
      technologies: ['HTML5', 'CSS3', 'BootStrap5'],
      codelink: 'https://github.com/patilharish1211/sierradesigns'
    },
    {
      id: 4,
      title: 'BellRoy',
      category: 'JavaScript',
      image: BellRoy,
      description: 'Transformed an online store with a fresh design aimed at improving user flow and sales.',
      technologies: ['HTML5', 'CSS3', 'BootStrap5', 'JavaScript'],
      livelink: 'https://bellroyclone-fe.netlify.app',
      codelink: 'https://github.com/patilharish1211/BellRoy_Clone_Front-End'
    },
    {
      id: 5,
      title: 'Beardbrand',
      category: 'JavaScript',
      image: BeardBrand,
      description: 'Led a full overhaul of an e-commerce site, prioritizing intuitive navigation and higher conversion rates.',
      technologies: ['HTML5', 'CSS3', 'BootStrap5', 'JavaScript'],
      livelink: 'https://beardbrand-clone.netlify.app',
      codelink: 'https://github.com/patilharish1211/BeardBrand_Clone_Front-END'
    },
    {
      id: 6,
      title: 'JS Normal Projects',
      category: 'JavaScript',
      image: JSNormalProjects,
      description: 'Built beginner to intermediate-level projects using APIs, core programming logic, and Object-Oriented Programming concepts.',
      technologies: ['HTML5', 'CSS3', 'BootStrap5', 'JavaScript'],
      codelink: 'https://github.com/patilharish1211/Harish-JS'
    },
    {
      id: 7,
      title: 'WestSide',
      category: 'React',
      image: WestSide,
      description: 'Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.',
      technologies: ['React', 'React-Bootstrap', 'JavaScript'],
      livelink: 'https://westside-frontend.netlify.app/',
      codelink: 'https://github.com/patilharish1211/westside-frontend'
    },
    {
      id: 8,
      title: 'Everlane',
      category: 'React',
      image: Everlane,
      description: 'Modernized an e-commerce website with a focus on seamless user interaction and revenue growth.',
      technologies: ['React', 'React-Bootstrap', 'Fetch'],
      codelink: 'https://github.com/patilharish1211/everlane_front-end'
    },
    {
      id: 9,
      title: 'Todo List',
      category: 'React',
      image: Todo_List,
      description: 'Built a dynamic Todo app with React frontend and JSON Server as a mock backend for data storage.',
      technologies: ['React', 'React-Bootstrap', 'Json', 'APIs'],
      codelink: 'https://github.com/patilharish1211/To_Do_List_FE-BE'
    },
    {
      id: 10,
      title: 'React Normal Projects',
      category: 'React',
      image: ReactNormalProjects,
      description: 'Worked on foundational projects involving API creation, logic building, and OOP structure to strengthen backend skills.',
      technologies: ['React', 'JavaScript', 'APIs'],
      codelink: 'https://github.com/patilharish1211/React_Projects'
    },
    {
      id: 11,
      title: 'Node Normal Projects',
      category: 'Node',
      image: NodeNormalProjects,
      description: 'Worked on foundational projects involving API creation, logic building, and OOP structure to strengthen backend skills.',
      technologies: ['JavaScript', 'Node.js', 'Json', 'APIs'],
      codelink: 'https://github.com/patilharish1211/NODE_JS'
    },
    {
      id: 12,
      title: 'WestSide Back-End',
      category: 'Json',
      image: WestSide_BE,
      description: 'Built a fake RESTful API with JSON Server for testing frontend functionality.',
      technologies: ['JavaScript', 'Json', 'APIs'],
      livelink: 'https://westside-backend.onrender.com',
      codelink: 'https://github.com/patilharish1211/Westside-backend'
    },
    {
      id: 13,
      title: 'BellRoy Back-End',
      category: 'Json',
      image: BeellRoy_BE,
      description: 'Used JSON Server as a lightweight database alternative for local development.',
      technologies: ['JavaScript', 'Json', 'APIs'],
      livelink:'https://bellroy-clone-back-end.onrender.com',
      codelink:'https://github.com/patilharish1211/BellRoy_Clone_Back-End'
    },
    {
      id: 14,
      title: 'Beardbrand Back-End',
      category: 'Json',
      image: BeardBrand_BE,
      description: 'Set up a mock backend using JSON Server to simulate real API responses.',
      technologies: ['JavaScript', 'Json', 'APIs'],
      livelink: 'https://beardbrand-clone-back-end.onrender.com',
      codelink: 'https://github.com/patilharish1211/BeardBrand_Clone_BACK-END'
    },
    {
      id: 15,
      title: 'C++ Programs',
      category: 'Other',
      image: CppNormalPrograms,
      description: 'Developed simple C++ code examples to understand syntax, control flow, and input/output.',
      technologies: ['C++'],
      codelink: 'https://github.com/patilharish1211/DSA'
    },
    {
      id: 16,
      title: 'Calculator',
      category: 'Other',
      image: Calculalator,
      description: 'Created a functional calculator with clean UI and real-time calculations using JS.',
      technologies: ['HTML5', 'CSS3', 'JavaScript',],
      codelink: 'https://github.com/patilharish1211/Calculator'
    },
    {
      id: 17,
      title: 'Age Calculator',
      category: 'Other',
      image: Age_Calculalator,
      description: 'Built an age calculator in React using React-Bootstrap for UI and JSON Server to store user input via API.',
      technologies: ['React', 'React-Bootstrap', 'Json-Server', 'APIs'],
      codelink: 'https://github.com/patilharish1211/Age_Calculator'
    }
  ];

  // Filter states
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Categories for filter
  // const categories = ['All', 'Web Design', 'Mobile App', 'Branding', 'Web App', 'Others'];
  const categories = ['All', 'HTML/CSS/BT', 'JavaScript', 'React', 'Node', 'Json', 'Other']; 
  
  // Handle filter change
  const handleFilterClick = (category) => {
    setActiveFilter(category);
    
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1 className="title">My <span className="highlight">Projects</span></h1>
        <p className="subtitle">Explore my recent work and creative solutions.</p>
      </div>

      <div className="project-filters">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href="#" className="project-link">View Details <FiExternalLink /></a>
              </div>
            </div>
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span className="tech-tag" key={index}>{tech}&nbsp;&nbsp;</span>
                ))}
              </div><br />
              <a href={project.livelink}><button style={{color: '#7f5af0'}}>LIVE</button></a>&nbsp;&nbsp;&nbsp;
              <a href={project.codelink}><button style={{color: '#7f5af0'}}>CODE</button></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;