import React from "react";
import "./intromessage.css";
import { Slide } from "react-reveal";
function IntroMessage() {
  return (
    <div className="intromessage">
      <div className="name">
        <Slide right>
          <p>My name is Pawan</p>
        </Slide>
        <Slide left>
          <p>I am a software developer</p>
        </Slide>
        <Slide top>
          <p>Please checkout my projects below</p>
        </Slide>
      </div>
    </div>
  );
}

export default IntroMessage;
