import React from "react";
import "../Css/Skills.css";

const Skills = () => {
  return (
    <div>
      <p className="sideHeadings">Skills</p>
      <div className="skills">
        <div className="skills_container">
          <div className="skills_header"></div>
          <div className="card_container">
            <div className="cards">
              <p className="cards_heading">Front-End</p>
              <ul>
                <li>HTML, CSS, Jquery</li>
                <li> JavaScript (ES6)</li>
                <li>React, React-Native</li>
                <li>Tkinter</li>
              </ul>
            </div>
            <div className="cards">
              <p className="cards_heading">Back-End</p>
              <ul>
                <li>PHP</li>
                <li>Django, Flask</li>
                <li>NodeJs</li>
              </ul>
            </div>
            <div className="cards">
              <p className="cards_heading">Database</p>
              <ul>
                <li>MariaDb</li>
                <li>MySql</li>
                <li>Postgres</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
