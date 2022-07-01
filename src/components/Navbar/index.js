import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { Link } from "react-router-dom";
import './navbar.css';
import './sidenav.css'

function Navbar() {
  // functions to determine whether or not to display sidenav
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  if (window.innerWidth > 850) {
    // normal navbar for desktop
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
          <Link to="/projects" className="navlink">projects</Link>
          <Link to="/music" className="navlink">music</Link>
          <Link to="/pixelart" className="navlink">pixel art</Link>
          <Contact>
            <DropdownMenu></DropdownMenu>
          </Contact>
        </div>
  
      </div>
    )
  } else {
    // Display sidenav for mobile view
    

    return (
      <IconContext.Provider value={{ color: '#000'}}>
        <div className="sidenav-container">
          <Link to='#' className='sidemenu-bars'> 
            <FaIcons.FaBars onClick={showSidebar}/>
          </Link>
          <div className="ghdiv">
            <IconContext.Provider value={{ className: 'ghli'}}>
              <a rel="noreferrer" target="_blank" href="https://github.com/raustin9">
                <FaIcons.FaGithub />
              </a>
            </IconContext.Provider>
          </div>
          <Link to="/home" className="link">
            <h1 className="logo-text-mobile">Reagan Austin</h1>
          </Link>
          <div className="lidiv">
            <IconContext.Provider value={{ className: 'ghli'}}>
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ralexaustin9/">
                <FaIcons.FaLinkedin />
              </a>
            </IconContext.Provider>
          </div>
        </div>
        <nav className={sidebar ? 'sidenav-menu active' : 'sidenav-menu'}>
          {
            sidebar &&
            <Link to="#" className="close-sidenav">
              <AiIcons.AiOutlineClose onClick={showSidebar}/>
            </Link>
          }
          <div className="sidenav-link-container">
            <Link to="/home" className="sidenavlink" onClick={showSidebar}>home</Link>
            <Link to="/aboutme" className="sidenavlink" onClick={showSidebar}>about me</Link>
            <Link to="/projects" className="sidenavlink" onClick={showSidebar}>projects</Link>
            <Link to="/music" className="sidenavlink" onClick={showSidebar}>music</Link>
            <Link to="/pixelart" className="sidenavlink" onClick={showSidebar}>pixel art</Link>
          </div>
        </nav>
      </IconContext.Provider>
    )
  }
  
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