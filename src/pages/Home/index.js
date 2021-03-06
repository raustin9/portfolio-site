import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
// import pixelart from './pixelart3.png';
import pixelimg from './pixelart3.png'
import './home.css'
import './home-mobile.css'

const Home = () => {
  if (window.innerWidth > 700) {
    return (
      <div className="main-content">
        <Link to="/resume" className="grid-item" id="resume">
          <h1 className="text">Resume</h1>
          <FaIcons.FaPaperclip className="Icon resume-icon"/>
        </Link>
        <Link to="/aboutme" className="grid-item" id="aboutme">
          <h1 className="text">About Me</h1>
          <FaIcons.FaUser className="Icon about-icon" />
        </Link>
        <Link to="/music" className="grid-item" id="music">
          <h1 className="text">Music</h1>
          <FaIcons.FaMusic className="Icon music-icon" />
        </Link>
        <Link to="/pixelart" className="grid-item" id="pixelart">
          {/* <div className="pixelartimg"/> */}
          <img src={pixelimg} alt="pixel cover" />
          <h1 className="pixeltext">Pixel Art</h1>
          <FaIcons.FaBrush className="Icon pixelart-icon" />
        </Link>
        <Link to="/projects" className="grid-item" id="projects">
          <h1 className="text">Projects</h1>
          <FaIcons.FaPen className="Icon projects-icon" />
        </Link>
      </div>
    )
  } else {
    return (
      <div className="mobile-home-container">
        <Link to="/resume" className="mobile-grid-item" id="mobile-resume">
          <h1 className="mobile-text">Resume</h1>
          <FaIcons.FaPaperclip className="Icon resume-icon"/>
        </Link>
        <Link to="/aboutme" className="mobile-grid-item" id="mobile-aboutme">
          <h1 className="mobile-text">About Me</h1>
          <FaIcons.FaUser className="Icon about-icon" />
        </Link>
        <Link to="/music" className="mobile-grid-item" id="mobile-music">
          <h1 className="mobile-text">Music</h1>
          <FaIcons.FaMusic className="Icon music-icon" />
        </Link>
        <Link to="/pixelart" className="mobile-grid-item" id="mobile-pixelart">
          {/* <div className="pixelartimg"/> */}
          <img src={pixelimg} alt="pixel cover" className="mobile-home-image"/>
          <h1 className="mobile-pixeltext">Pixel Art</h1>
          <FaIcons.FaBrush className="Icon pixelart-icon" />
        </Link>
        <Link to="/projects" className="mobile-grid-item" id="mobile-projects">
          <h1 className="mobile-text">Projects</h1>
          <FaIcons.FaPen className="Icon projects-icon" />
        </Link>
      </div>
    )
  }
}

export default Home;