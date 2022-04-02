import React from 'react';
import Resume from '../Resume'
import './aboutme.css'

const AboutMe = () => {
  return(
    <div className="aboutme-content">
      {/* <div className="aboutme-grid-item" id="aboutme-interests">
        <h1 className="aboutme-section-title">Interests</h1>
      </div>
      <div className="aboutme-grid-item" id="aboutme-hobbies">
        <h1 className="aboutme-section-title">Hobbies</h1>
      </div>
      <div className="aboutme-grid-item" id="aboutme-involvement">
        <h1 className="aboutme-section-title">Involvement</h1>
      </div>
      <div className="aboutme-grid-item" id="aboutme-general">
        <h1 className="aboutme-section-title">general</h1>
      </div> */}
      <div className="aboutme">
        <div className="aboutme-blurb">
          <h1 className="aboutme-text">Hello everyone! My name is Reagan and I am a Computer Science student at the University of Tennessee at Knoxville, TN. I program a lot in my spare time, and I usually work in C++, C, or whatever specific tool I am using. I also really enjoy making video games, and I use Game Maker Studio 2 for that, and I use FL Studio to make the music and sound effects. I make music on my own outside of projects anyway, and you can see that elsewhere on this site. I am in the group Hack4Impact which builds applications for local non profit organnizations in Knoxville and East Tennessee, and that is where a lot of my time developing outside of school goes.</h1>
        </div>
      </div>
      <Resume />
    </div>
  )
}

export default AboutMe;