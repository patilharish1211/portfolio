// import React from "react";
'../App.css'
import html from '../assets/tech_imgs/HTML5.png'
import css from '../assets/tech_imgs/CSS3.png'
import bootstrap from '../assets/tech_imgs/Bootstrap5.png'
import sass from '../assets/tech_imgs/SASS.png'
import jquery from '../assets/tech_imgs/Jquery.png'
import javascript from '../assets/tech_imgs/JavaScript.png'
import react from '../assets/tech_imgs/React.png'
import redux from '../assets/tech_imgs/Redux.png'
import node from '../assets/tech_imgs/Node.png'
import express from '../assets/tech_imgs/Express.png'
import mongo from '../assets/tech_imgs/MongoDB.png'
import git from '../assets/tech_imgs/Git.png'
import shopify from '../assets/tech_imgs/Shopify.png'
import liquid from '../assets/tech_imgs/Liquid.png'
import figma from '../assets/tech_imgs/Figma.png'
import photoshop from '../assets/tech_imgs/PhotoShop.png'
import canva from '../assets/tech_imgs/Canva.png'


const techList = [
  { name: "HTML5", logo: html },
  { name: "CSS3", logo: css },
  { name: "Bootstrap", logo: bootstrap },
  { name: "Sass", logo: sass },
  { name: "Jquery", logo: jquery },
  { name: "JavaScript", logo: javascript },
  { name: "React", logo: react },
  { name: "Redux", logo: redux },
  { name: "Node.js", logo: node },
  { name: "Express", logo: express },
  { name: "MongoDB", logo: mongo },
  { name: "Git", logo: git },
  { name: "Shopify", logo: shopify },
  { name: "Liquid", logo: liquid },
  { name: "Figma", logo: figma },
  { name: "PhotoShop", logo: photoshop },
  { name: "Canva", logo: canva },
];

const technology = () => {
  return (
    <div className="tech-container">
      {techList.map((tech, index) => (
        <div key={index} className="tech-card">
          <img src={tech.logo} alt={tech.name} className="tech-icon" />
        </div>
      ))}
    </div>
  );
};

export default technology;
