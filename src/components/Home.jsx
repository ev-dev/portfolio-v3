import React from 'react'
import { Link } from 'react-router-dom'

import Parallax from './Parallax'
import { OnAtMostPhablet } from './root'
import '../styles/home'

const Home = () => (
  <main id='home'>
    <div className='bg'></div>
    <div className='parallax'>
      <Parallax />
      
      <div id='name-and-title' className='content'>
        <h1>Evan Reed</h1>
        <p>Fullstack Developer</p>
      </div>

      <div id='homepage-links' className='content'>
        <span>
          <Link to='/skills'>Overview</Link>
        </span>
        <span className='homepage-link-separator'> - </span>
        <span>
          <Link to='/projects'>Work</Link>
        </span>
        <span className='homepage-link-separator'> - </span>
        <span>
          <Link to='/contact'>Connect</Link>
        </span>
      </div>

      <div id='about' className='content'>
        <div id='mission-container'>
          <p id='mission-statement' className='ital'>I strive to contribute to creative and intellectual communities through the toolsets of Software Engineering & Design.</p>
        </div>
      </div>
    </div>
  </main>
)

export default Home
