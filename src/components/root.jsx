import React from 'react'
import '../styles'

import SideBar from './SideBar'
// import Content from '../routes'
import Content from './Home'

const Root = () =>
  <div id='root-child'>
    <Content />
    <SideBar />
  </div>

export default Root
