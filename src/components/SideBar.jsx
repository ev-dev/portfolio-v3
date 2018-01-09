import React from 'react'

const SideBar = () => (
  <aside>
    <div id='sidebar-photo-container'>
      <div id='sidebar-photo-span'>
        <img id='sidebar-img' src='me_thumb.jpg' />
        <h1 id='sidebar-title'>Evan Reed</h1>
      </div>
    </div>
    <div id='sidebar-menu-container'>
      <div className='sidebar-menu-item'>
        Option
      </div>
      <div className='sidebar-menu-item'>
        Option
      </div>
      <div className='sidebar-menu-item'>
        Option
      </div>
      <div className='sidebar-menu-item'>
        Option
      </div>
      <div id='sidebar-footer' className='sidebar-menu-item'>
        Footer
      </div>
    </div>
  </aside>
)

export default SideBar
