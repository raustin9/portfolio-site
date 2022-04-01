import React from 'react';
import './aboutme.css'

const AboutMe = () => {
  return(
    <div className="aboutme-content">
      <div className="aboutme-grid-item" id="aboutme-interests">
        <h1 className="aboutme-section-title">Interests</h1>
        {/* <p className="aboutme-section-text">I have many interests, but my strongest are probably low level programming, video game development, operating systems, and compilers. Those are not the only thiings that I am interested in, but in terms of computer science and where I am with that, those are my current strongest. I love working with Unix tools and I have probably had a ton of fun programming in MIPS assembly and C++ and C. I greatly enjoy other things like machine learning, web scraping, and cyber security as well, and I have done some stuff with that as well.</p> */}
      </div>
      <div className="aboutme-grid-item" id="aboutme-hobbies">
        <h1 className="aboutme-section-title">Hobbies</h1>
      </div>
      <div className="aboutme-grid-item" id="aboutme-involvement">
        <h1 className="aboutme-section-title">Involvement</h1>
      </div>
      <div className="aboutme-grid-item" id="aboutme-general">
        <h1 className="aboutme-section-title">general</h1>
      </div>
    </div>
  )
}

export default AboutMe;