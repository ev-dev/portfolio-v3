import React from 'react'

import '../styles/skills'

const Skills = () => (
  <div id='skills-container'>
    <h1 id='skills-title'>Skills</h1>
    <div id='skills-grid'>
      {Array(16).fill(0).map((skill, i) => (
        <div className={`skill-box skill-${i + 1}`} key={i}>
        </div>
      ))}
    </div>
  </div>
)

export default Skills
