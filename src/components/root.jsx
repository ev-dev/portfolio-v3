import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import '../styles'
import SideBar from './SideBar'
import Home from './Home'
import Projects from './Projects'
import Blog from './Blog'

const Root = () => {
  console.log(`location hash = `, window.location.hash)
  return (
    <BrowserRouter>
      <div id='root-child'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' render={() => <Redirect to='/' />} />
          <Route exact path='/skills' render={() => <Redirect to='/' />} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/blog' component={Blog} />
        </Switch>

        <Route component={SideBar} />
      </div>
    </BrowserRouter>
  )
}

export default Root
