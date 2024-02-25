import React, { useState } from "react";
import "./projects.css";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Project from "./Project";
import { projectData } from "../../data/projectsdata";
import mobile from "../../assets/mobile.svg";

const Projects = () => {
  const [showLaptop, setShowLaptop] = useState(false);
  const laptopText = "See Laptop Animation";
  const mobileText = "See Mobile Animaton";
  const [text, setText] = useState(laptopText);

  const handleClick = () => {
    setShowLaptop(!showLaptop)
    if (text === laptopText) {
      setText(mobileText);
    } else {
      setText(laptopText);
    }
    
  };

  return (
    <>
      <h1 className="project-heading">Frontend Projects</h1>
      <div className="projects">
        {projectData.map((project) => (
          <div className="flex container" key={project.id}>
            <Project
              iphone={project.phoneImage}
              screen={project.phoneScreen}
              laptop={project.laptopImage}
              laptopScreen={project.laptopScreen}
              heading={project.heading}
              paragraph={project.paragraph}
              technologies={project.technologies}
              handleClick={handleClick}
              text={text}
              showLaptop={showLaptop}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
