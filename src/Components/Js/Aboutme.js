import React from "react";
import "../Css/AboutMe.css";
import mine from "../Images/mine.jpg";
import { Typography } from "@material-ui/core";

const Aboutme = () => {
  return (
    <div>
      <p className="sideHeadings">About Me</p>
      <div className="outer_frame">
        <div className="outer_header">
          <div className="buttons_container">
            <div className="outer_buttons red"></div>
            <div className="outer_buttons yellow"></div>
            <div className="outer_buttons green"></div>
          </div>
        </div>
        <div className="outer_body">
          <img src={mine} alt="Mine" className="my_pic" />
          <div className="desc_container">
            <p className="my_desc">
              I am Self Taught programmer, I have a decent knowledge in FrontEnd
              and Python languages, that are required for an company & I aim to
              be associated with organization which helps me grow personally and
              professionally{" "}
            </p>
            <p className="my_desc">
              I find myself intrested in learning a new topic or trying out new
              software & i like to change the possibilities of saying it's
              difficult to easy
            </p>
            <p className="my_desc">
              Apart from web development i try other stuff like trying out a new
              frameworks in python
            </p>
          </div>
        </div>
      </div>
      <div className="contactMe">
        <Typography variant="h4" align="center">
          Contact me
        </Typography>
        <div className="contact__body">
          <div className="coffecup">
            <div className="coffecap"></div>
            <div className="coffe">
              <div className="coffelogo"></div>
            </div>
          </div>
          <div className="contact__details">
            <p className="phoneno">
              <b>+91</b> 9972577728
            </p>
            <p className="email">
              <b>@</b> cmkrishna97@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
