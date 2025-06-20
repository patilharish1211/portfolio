import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  // Sample project data
  const projects = [
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
    {
      id: 4,
      title: 'Social Media Dashboard',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      description: 'A comprehensive dashboard for managing and analyzing social media accounts and campaigns.',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js']
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      description: 'A fitness tracking application with workout plans, progress monitoring, and social features.',
      technologies: ['Flutter', 'Firebase', 'Adobe XD']
    },
    {
      id: 6,
      title: 'Restaurant Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80',
      description: 'A modern and responsive website for a high-end restaurant with online reservation system.',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL']
    },
  ];

  // Filter states
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Categories for filter
  const categories = ['All', 'Web Design', 'Mobile App', 'Branding', 'Web App'];

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
                  <span className="tech-tag" key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;