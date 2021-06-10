import React from 'react'
import "../Css/Header.css";
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="Footer">
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <a href="https://www.linkedin.com/in/murali-sree-krishna-chittoji-06a353170/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/ChittojiMuraliSreeKrishna">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/murali-sree-krishna">
              <FaCodepen />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
    )
}

export default Footer
