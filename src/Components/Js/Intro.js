import React from "react";
import "../Css/Intro.css";
import coding from "../Images/coding.avif";
import {
  FaLinkedin,
  FaGithub,
  FaCodepen,
  FaTwitter,
  FaDev,
} from "react-icons/fa";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro_subcontainer">
        <div>
          <p className="sub_heading">
            Hello World!, mySelf Murali <b>: )</b>
            <br /> I'm a webDev & Python Developer,
            <br /> Based in Hyderabad, Telangana.
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/murali-sree-krishna-chittoji-06a353170/"
              className="links"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ChittojiMuraliSreeKrishna"
              className="links"
            >
              <FaGithub />
            </a>
            <a href="https://codepen.io/murali-sree-krishna" className="links">
              <FaCodepen />
            </a>
            <a href="https://twitter.com/CmuraliSree" className="links">
              <FaTwitter />
            </a>
            <a href="https://dev.to/cmuralisree" className="links">
              <FaDev />
            </a>
          </div>
        </div>
        <img src={coding} className="intro_img" alt="coding" />
      </div>
    </div>
  );
};

export default Intro;
