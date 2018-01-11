import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { layoutGenerator } from 'react-break'

import '../styles'
import SideBar from './SideBar'
import CustomBurger from './CustomBurger'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992
})
const OnAtLeastTablet = layout.isAtLeast('tablet')
const OnAtMostPhablet = layout.isAtMost('phablet')

const Root = () => (
  <BrowserRouter>
    <div id='root-child'>
      <OnAtMostPhablet>
        <Route render={props => <CustomBurger {...props} />} />
      </OnAtMostPhablet>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' render={() => <Redirect to='/' />} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      
      <OnAtLeastTablet>
        <Route component={SideBar} />
      </OnAtLeastTablet>
    </div>
  </BrowserRouter>
)

export default Root
