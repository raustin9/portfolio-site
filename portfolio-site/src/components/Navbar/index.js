import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
  return(
    <div className="main-container">
      <div className="socials">
        <Link to="/home" className="link">
          <h1 className="logo-text">Reagan Austin</h1>
        </Link>
        <div className="ghdiv">
          <IconContext.Provider value={{ className: 'ghli'}}>
            <a rel="noreferrer" target="_blank" href="https://github.com/raustin9">
              <FaIcons.FaGithub />
            </a>
          </IconContext.Provider>
        </div>
        <div className="lidiv">
          <IconContext.Provider value={{ className: 'ghli'}}>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ralexaustin9/">
              <FaIcons.FaLinkedin />
            </a>
          </IconContext.Provider>
        </div>
        
      </div>
      
      <div className="link-container">
        <Link to="/aboutme" className="navlink">about me</Link>
        <Link to="/resume" className="navlink">resume</Link>
        <Link to="/projects" className="navlink">projects</Link>
        <Link to="/music" className="navlink">music</Link>
        <Link to="/pixelart" className="navlink">pixel art</Link>
        <Contact>
          <DropdownMenu></DropdownMenu>
        </Contact>
      </div>
      
    </div>
  )
}

function Contact(props) {
  const [open, setOpen] = useState(false);
  return(
    <div className="contact" onClick={() => setOpen(!open)}>contact {open && props.children}</div>
  )
}

function DropdownMenu() {
  function DropdownItem(props) {
    return(
      <a rel="noreferrer" target="_blank" href={props.href} className="menuitem">
        <span className="dropicon">{props.icon}</span>
        {props.children}
      </a>
    )
  }
  function DropdownLink(props) {
    return(
      <Link to={props.to} className="menuitem">
        <span className="dropicon">{props.icon}</span>
        {props.children}
      </Link>
    )
  }
  return(
    <div className="dropdown">
      <DropdownItem href="https://github.com/raustin9" icon={<FaIcons.FaGithub/>}>
        GitHub
      </DropdownItem>
      <DropdownItem href="https://www.linkedin.com/in/ralexaustin9/" icon={<FaIcons.FaLinkedin/>}>
        LinkedIn
      </DropdownItem>
      <DropdownItem href="https://soundcloud.com/user-940134563" icon={<FaIcons.FaSoundcloud/>}>
        Soundcloud
      </DropdownItem>
      <DropdownLink to="/resume" icon={<FaIcons.FaPaperclip/>}>Resume</DropdownLink>
    </div>
  )
}

export default Navbar;