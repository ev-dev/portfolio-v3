import React from 'react'

import { devLogoUrls } from '../data'
import '../styles/skills'
import '../styles/stars'

const Skills = () => (
  <main>
    <div id='stars' />
    <div id='stars2' />
    <div id='stars3' />
    <div id='skills-container'>
      <h1 id='skills-title'>Skills</h1>
      <div id='skills-grid'>
        {devLogoUrls.map((skill, i) => (
          <div className={`skill-box-parent`} key={i}>
            <img 
              src={`assets/dev-logos/${skill}`} 
              className={`skill-box-child skill-${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  </main>
)

export default Skills
