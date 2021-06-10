import React from 'react'
import {
    FaHome,
    FaUser,
    FaUniversity,
    FaCertificate,
    FaProjectDiagram,
  } from "react-icons/fa";
  import "../Css/Header.css";

const Header = () => {
    return (
        <header className="Header">
        <nav className="nav">
          <ul className="nav__list">
            <li>
              <a href="#intro">
                <FaHome />
              </a>
            </li>
            <li>
              <a href="#about">
                <FaUser />
              </a>
            </li>
            <li>
              <a href="#college">
                <FaUniversity />
              </a>
            </li>
            <li>
              <a href="#certificates">
                <FaCertificate />
              </a>
            </li>
            <li>
              <a href="#personal">
                <FaProjectDiagram />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header
