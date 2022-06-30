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
        {/* <div className="aboutme-blurb">
          <h1 className="aboutme-text">Hello everyone! My name is Reagan and I am a Computer Science student at the University of Tennessee at Knoxville, TN. I program a lot in my spare time, and I usually work in C++, C, or whatever specific tool I am using. I also really enjoy making video games, and I use Game Maker Studio 2 for that, and I use FL Studio to make the music and sound effects. I make music on my own outside of projects anyway, and you can see that elsewhere on this site. I am in the group Hack4Impact which builds applications for local non profit organnizations in Knoxville and East Tennessee, and that is where a lot of my time developing outside of school goes.</h1>
        </div> */}
        <div className="aboutme-general">
          <h1 className="aboutme-text">Hello everyone! My name is Reagan, and I am a Computer Science student at the University of Tennessee Knoxville. In my spare time, I love to program, produce music, and make video games. For most of my hobbies, you can see some of my work here on this site. </h1>
          <div className="aboutme-grid">
            <div className="aboutme-grid-item" id="aboutme-education">
              <div className="aboutme-grid-title">
                <h1 className="aboutme-text" >Education</h1>
              </div>
              <p className="aboutme-text-p">I am currently a sophomore at the University of Tennessee in Knoxville, TN, and I major in Computer Science there.</p>
              <p className="aboutme-text-p">Some major courses:</p>
              <ul className="aboutme-education-courses">
                <li className="aboutme-education-courses-item">COSC 102 - Introduction to Computer Science</li>
                <li className="aboutme-education-courses-item">COSC 130 - Computer Organization</li>
                <li className="aboutme-education-courses-item">COSC 202 - Data Structures and Algorithms I</li>
                <li className="aboutme-education-courses-item">COSC 302 - Data Structures and ALgorithms II</li>
                <li className="aboutme-education-courses-item">COSC 311 - Discrete Structures</li>
              </ul>
            </div>
            <div className="aboutme-grid-item" id="aboutme-skills">
              <div className="aboutme-grid-title">
                <h1 className="aboutme-text" >Skills</h1>
              </div>
              <ul className="aboutme-education-courses">
                <li className="aboutme-education-courses-item">C++ - I am very confident in this, and I learned most of it through my time at UTK</li>
                <li className="aboutme-education-courses-item">REACT - I learned all of my skills in REACT on my own, and I have learned a lot. You can see the results of it on this website and some other projects</li>
                <li className="aboutme-education-courses-item">Game Maker Studio 2 - I use this to make video games. It is perfect as it is specialized in 2D games which are what I enjoy making the most</li>
                <li className="aboutme-education-courses-item">FL Studio - This is what I use to make music. I have used it a good amount and built confidence in it</li>
                <li className="aboutme-education-courses-item">UNIX - I use the unix terminal all the time, and I have gained a lot of experience with it through my time at UTK as well</li>
                <li className="aboutme-education-courses-item">MIPS Assembly - I learned this in my Computer Organization class at UTK. It was easily my favorite part of the year and a lot of fun to use</li>
                <li className="aboutme-education-courses-item">Styled Components - I used this to make the prototype of this website. I didn't include it in this one, but I may in the future because I think they are fun to use</li>
                <li className="aboutme-education-courses-item">Typescript - I learned this through my projects at Hack4Impact. It makes a lot of sense when you have to deal with backend things</li>
              </ul>
            </div>
            <div className="aboutme-grid-item" id="aboutme-hobbies">
              <div className="aboutme-grid-title">
                <h1 className="aboutme-text" >Hobbies</h1>
              </div>
              <ul className="aboutme-education-courses">
                <li className="aboutme-education-courses-item">Video Game Design</li>
                <li className="aboutme-education-courses-item">Music Production</li>
                <li className="aboutme-education-courses-item">Hack4Impact</li>
                <li className="aboutme-education-courses-item">General Programming</li>
              </ul>
            </div>
            {/* <div className="aboutme-grid-item" id="aboutme-other">
              <div className="aboutme-grid-title">
                
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Resume />
    </div>
  )
}

export default AboutMe;