import React from 'react'

import SingleProject from './SingleProject'
import { projectsInfo } from '../data'

import '../styles/projects'
import '../styles/stars'

const Projects = () => (
  <main>
    <div id='stars' />
    <div id='stars2' />
    <div id='stars3' />
    <div id='projects-container'>
      <h1 id='projects-title'>Projects</h1>
      <div id='projects-grid'>
        {projectsInfo.map(project => (
          <SingleProject key={project.name} project={project} />
        ))}
      </div>
    </div>
  </main>
)

export default Projects
