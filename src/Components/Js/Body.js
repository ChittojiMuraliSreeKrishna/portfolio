import React from "react";
import "../Css/Body.css";
import Intro from "./Intro";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Projects from "./Projects";
import Personal from "./Personal";
import Certificates from "./Certificates";

const Body = () => {
  return (
    <div className="body">
      <p className="heading">Murali Chittoji</p>
      <Intro />
      <Aboutme />
      <Skills />
      <Projects />
      <Personal />
      <Certificates />
    </div>
  );
};

export default Body;
