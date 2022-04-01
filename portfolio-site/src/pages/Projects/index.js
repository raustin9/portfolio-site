import React from 'react';
import './projects.css'

const Projects = () => {
  return(
    <div className="projects-content">
      <a className="projects-grid-item" id="image-processing" rel="noreferrer" target="_blank" href="https://github.com/raustin9/ImageProcessing">
        <h1 className="project-title">Image Processing</h1>
        <p className="project-text">A program that can encode and decode secret messages in pictures.</p>
        <p className="project-text">It uses functions from the STBI header file to read and write to image files.</p>
        <p className="project-text">This site was built using the REACT javascript library.</p>
        <p className="project-text">It was built it C++, and uses a makefile to compile and run.</p>
      </a>
      <a className="projects-grid-item" id="portfolio-site" rel="noreferrer" target="_blank" href="https://github.com/raustin9/portfolio-site">
        <h1 className="project-title">Portfolio Website</h1>
        <p className="project-text">This site was built using the REACT javascript library.</p>
        <p className="project-text">The main purpose of this site is to showcase the many parts of what I do in my spare time, and what my skills span.</p>
      </a>
      <a className="projects-grid-item" id="next-project " rel="noreferrer" target="_blank" href="https://github.com/raustin9?tab=repositories">
        <h1 className="project-title">Coming Soon!</h1>
        <p className="project-text">Click on this cell to go to my Github repositories page and see what I am working on</p>
      </a>
    </div>
  )
}

export default Projects;