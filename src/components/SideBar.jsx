import React from 'react'
import { Link, withRouter } from 'react-router-dom'

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
        <span className='sidebar-link'>
          About
        </span>
      </Link>
      <Link to='/skills' className='sidebar-menu-item'>
        <span className='sidebar-link'>
          Skills
        </span>
      </Link>
      <Link to='/projects' className='sidebar-menu-item'>
        <span className='sidebar-link'>
          Projects
        </span>
      </Link>
      <Link to='/blog' className='sidebar-menu-item'>
        <span className='sidebar-link'>
          Blog
        </span>
      </Link>
      <Link to='/contact' id='sidebar-footer' className='sidebar-menu-item'>
        <span className='sidebar-link'>
          Contact
        </span>
      </Link>
    </div>
  </aside>
)

export default withRouter(SideBar)
