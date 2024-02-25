import React from "react";
import "./banner.css";
import { Fade, Zoom, Rotate } from "react-reveal";
function Banner() {
  return (
    <>
      <div className="banner-overlay"></div>
      <div className="banner-section">
        <Fade>
          <div className="banner-intro">
            <Rotate>
              <h1 className="hello" id="hello">
                Hello!
              </h1>
            </Rotate>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Banner;
