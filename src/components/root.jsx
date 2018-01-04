import React from 'react'
import '../styles'

import Home from './Home'
import Header from './Header'
import SideBar from './SideBar'
// import Content from '../routes'

const Root = () => (
  <div id='stage'>
    <Header />
    <Home />
    {/* <Content /> */}
    <SideBar />
  </div>
)

export default Root
