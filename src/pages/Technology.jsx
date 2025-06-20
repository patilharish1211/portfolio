import React from "react";

const techList = [
  { name: "HTML5", logo: "html.png" },
  { name: "CSS", logo: "css.png" },
  { name: "Bootstrap", logo: "bootstrap.png" },
  { name: "Sass", logo: "sass.png" },
  { name: "jQuery", logo: "jquery.png" },
  { name: "JavaScript", logo: "javascript.png" },
  { name: "React.js", logo: "react.png" },
  { name: "Redux", logo: "redux.png" },
  { name: "Node.js", logo: "node.png" },
  { name: "Express.js", logo: "express.png" },
  { name: "MongoDB", logo: "mongodb.png" },
  { name: "Git", logo: "git.png" },
  { name: "Shopify", logo: "shopify.png" },
  { name: "Liquid.js", logo: "liquid.png" },
  { name: "Figma", logo: "figma.png" },
  { name: "Photoshop", logo: "photoshop.png" },
  { name: "Canva", logo: "canva.png" },
];

const Technologies = () => {
  return (
    <div className="tech-grid">
      {techList.map((tech, index) => (
        <div key={index} className="tech-item">
          <img src={`/images/${tech.logo}`} alt={tech.name} className="tech-logo" />
          <p>{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
