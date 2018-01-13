import React from 'react'

import '../styles/skills'
import '../styles/stars'

const devLogoUrls = [
  'html-css-js.png',
  'node.png',
  'express-logo.png',
  // 'express.png',
  'graphql.png',
  // 'react.jpg',
  // 'react-logo.png',
  'reactlogo.png',
  'redux.png',
  'sass.png',
  'jquery.png',
  'postgres.png',
  'mongodb.png',
  'sequelize.png',
  'mongoose.png',
  'firebase.png',
  // 'aws.png',
  'aws-logo.png',
  'azure.png',
  'googlecloud.png',
  'linux.jpg',
  'mocha-chaijs.png',
]

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

// const Skills = () => (
//   <main id='home'>
//     <div className='bg'></div>
//     <div className='parallax'>
//       <Parallax />
//       <div id='skills-container'>
//         <h1 id='skills-title'>Skills</h1>
//         <div id='skills-grid'>
//           {devLogoUrls.map((skill, i) => (
//             <div className={`skill-box-parent`} key={i}>
//               <img 
//                 src={`assets/dev-logos/${skill}`} 
//                 className={`skill-box-child skill-${i + 1}`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </main>
// )

export default Skills
