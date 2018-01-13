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
        <i className='fas fa-2x fa-home sidebar-icon' />
        <p className='sidebar-menu-item-text'>
          About
        </p>
      </Link>
      <Link to='/skills' className='sidebar-menu-item'>
        <i className='fas fa-2x fa-tasks sidebar-icon' />
        <p className='sidebar-menu-item-text'>
          Skills
        </p>
      </Link>
      <Link to='/projects' className='sidebar-menu-item'>
        <i className='fas fa-2x fa-code sidebar-icon' />
        <p className='sidebar-menu-item-text'>
          Projects
        </p>
      </Link>
      <Link to='/blog' className='sidebar-menu-item'>
        <i className='fas fa-2x fa-newspaper sidebar-icon' />
        <p className='sidebar-menu-item-text'>
          Blog
        </p>
      </Link>
      <Link to='/contact' className='sidebar-menu-item'>
        <i className='fas fa-2x fa-user-plus sidebar-icon' />
        <p className='sidebar-menu-item-text'>
          Contact
        </p>
      </Link>
    </div>
    <div id='sidebar-footer'>
    
    </div>
  </aside>
)

export default SideBar
