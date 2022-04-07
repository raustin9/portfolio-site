import React from 'react';
import './resume.css';

const Resume = () => {
  return(
    <div className="resume-content">
      <h1 className="resume-text">Resume</h1>
      <div className="resume-contact-info">
        <p className="resume-contact-text">Email: raustin9@vols.utk.edu</p>
        <a className="resume-contact-link" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ralexaustin9/">LinkedIn: ralexaustin9</a>
        <a className="resume-contact-link" rel="noreferrer" target="_blank" href="https://github.com/raustin9">Github: raustin9</a>
      </div>
      <div className="resume-education">
        <div className="resume-education-text-container"><h1 className="resume-education-text">Education</h1></div>
        <div className="resume-education-utk">
          <div className="resume-education-utk-name-container">
            <h1 className="resume-education-utk-name">University of Tennessee Knoxville - Tickle College of Engineering</h1>
            <h1 className="resume-education-utk-city">Knoxville, Tennessee</h1>
          </div>
          <div className="resume-education-utk-major-container">
            <h1 className="resume-education-utk-degree">Bachelor's of Science</h1>
            <h1 className="resume-education-utk-graduation">Graduation: May 2024</h1>
          </div>
          <h1 className="resume-education-utk-major">Major: Computer Science</h1>
          <h1 className="resume-education-utk-involvement">Involvement: Hack4Impact, WebDev UTK</h1>
          <h1 className="resume-education-utk-involvement">Chancellor's Honors & Scholars Program</h1>
          <h1 className="resume-education-utk-involvement">Cook Grand Challenge Honors Engineering</h1>
          <h1 className="resume-education-utk-gpa">GPA: 3.86/4.00</h1>
        </div>
        <div className="resume-job-experience">
          <div className="resume-job-experience-text-container"><h1 className="resume-job-experience-text">Job Experience</h1></div>
          <div className="resume-job-experience-h4i">
            <div className="resume-job-experience-h4i-name-container">
              <h1 className="resume-job-experience-h4i-name">Hack4Impact</h1>
              <h1 className="resume-job-experience-h4i-city">Knoxville, Tennessee</h1>
            </div>
            <div className="resume-job-experience-h4i-title-container">
              <h1 className="resume-job-experience-h4i-title">Developer</h1>
              <h1 className="resume-job-experience-h4i-time">February 2021 - Present</h1>
            </div>
            <ul className="resume-job-experience-list">
              <li className="resume-job-experience-list-item">Work on 6 person team to build software applications for local nonprofits</li>
              <li className="resume-job-experience-list-item">Work with clients to build their desired application</li>
              <li className="resume-job-experience-list-item">Technologies used: REACT, Typescript, MongoDB, Contentful, Various CSS libraries</li>
            </ul>
          </div>
          <br></br>
          <div className="resume-job-experience-krc">
            <div className="resume-job-experience-krc-name-container">
              <h1 className="resume-job-experience-krc-name">Knoxville Racquet Club</h1>
              <h1 className="resume-job-experience-krc-city">Knoxville, Tennessee</h1>
            </div>
            <div className="resume-job-experience-krc-title-container">
              <h1 className="resume-job-experience-krc-title">Children's Tennis Coach</h1>
              <h1 className="resume-job-experience-krc-time">May 2021 - Septempber 2021</h1>
            </div>
            <ul className="resume-job-experience-list">
              <li className="resume-job-experience-list-item">Run tennis clinics for childeren with other coaches</li>
              <li className="resume-job-experience-list-item">Make sure kids are engaged and having fun</li>
            </ul>
          </div>
          <br></br>
          <div className="resume-job-experience-krc">
            <div className="resume-job-experience-krc-name-container">
              <h1 className="resume-job-experience-krc-name">Domino's Pizza</h1>
              <h1 className="resume-job-experience-krc-city">Knoxville, Tennessee</h1>
            </div>
            <div className="resume-job-experience-krc-title-container">
              <h1 className="resume-job-experience-krc-title">Delivery Driver</h1>
              <h1 className="resume-job-experience-krc-time">May 2021 - Septempber 2021</h1>
            </div>
            <ul className="resume-job-experience-list">
              <li className="resume-job-experience-list-item">Deliver pizza to customers' apartments and houses</li>
              <li className="resume-job-experience-list-item">Clean dishes, man oven, and other various duties while in store</li>
              <li className="resume-job-experience-list-item">Close store 1-3 times a week. Prepare for next morning, clean, and help manager with closing</li>
            </ul>
          </div>
        </div>
        <br></br>
        <div className="resume-education-text-container"><h1 className="resume-education-text">Skills</h1></div>
        <div className="resume-education-utk">
          <ul className="resume-job-experience-list">
            <li className="resume-job-experience-list-item">C++</li>
            <li className="resume-job-experience-list-item">Unix</li>
            <li className="resume-job-experience-list-item">REACT.js</li>
            <li className="resume-job-experience-list-item">SCSS</li>
            <li className="resume-job-experience-list-item">Styled Components</li>
            <li className="resume-job-experience-list-item">MIPS Assembly</li>
            <li className="resume-job-experience-list-item">Typescript</li>
            <li className="resume-job-experience-list-item">Game Maker Studio 2</li>
            <li className="resume-job-experience-list-item">FL Studio</li>
            <li className="resume-job-experience-list-item">Logic Pro X</li>
          </ul>
        </div>
        <br></br>
      </div>
    </div>
  )
}

export default Resume;