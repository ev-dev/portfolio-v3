import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/sidebar'

const SideBar = () => (
  <aside>
    <div id='sidebar-photo-container'>
      <div id='sidebar-photo-span'>
        <Link to='/'>
          <img id='sidebar-img' src='me_thumb.jpg' />
        </Link>
        <Link to='/'>
          <h1 id='sidebar-title'>Evan Reed</h1>
        </Link>
      </div>
    </div>
    <div id='sidebar-menu-container'>
      <Link to='/about' className='sidebar-menu-item'>
        <p className='sidebar-link'>
          About
        </p>
      </Link>
      <Link to='/skills' className='sidebar-menu-item'>
        <span className='sidebar-item-container'>
          <i className='fas fa-lg fa-tasks sidebar-icon' />
          <p className='sidebar-link'>
            Skills
          </p>
        </span>
      </Link>
      <Link to='/projects' className='sidebar-menu-item'>
        <p className='sidebar-link'>
          Projects
        </p>
      </Link>
      <Link to='/blog' className='sidebar-menu-item'>
        <p className='sidebar-link'>
          Blog
        </p>
      </Link>
      <Link to='/contact' id='sidebar-footer' className='sidebar-menu-item'>
        <p className='sidebar-link'>
          Contact
        </p>
      </Link>
    </div>
  </aside>
)

export default SideBar
