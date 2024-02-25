import React, { useState } from "react";
import "../projects/projects.css";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Roll, Bounce, Rotate } from "react-reveal";

function Project(props) {
  const {
    key,
    iphone,
    screen,
    laptop,
    laptopScreen,
    heading,
    paragraph,
    technologies,
    handleClick,
    showLaptop,
    text,
  } = props;

  return (
    <>
      <Roll>
        <div className="phone" key={key}>
          <img src={iphone} alt="" />
          <div className="screen">
            <img src={screen} alt="" />
          </div>
        </div>
      </Roll>
      <Bounce>
        <div className="description">
          <h3>{heading}</h3>
          <p>{paragraph}</p>
          <p>{technologies}</p>
          <div className={showLaptop ? "laptop-active" : "laptop-section"}>
            <div className="laptop">
              <img src={laptop} alt="" />
              <div className="laptop-screen">
                <img src={laptopScreen} alt="" />
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="lp-mb-showbtn" onClick={handleClick}>
              {text} &gt;
            </button>
            <button className="code">Source Code &gt;</button>
            <button className="live">See Live &gt;</button>
          </div>
        </div>
      </Bounce>
    </>
  );
}

export default Project;
