import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class NavMenu extends Component {
  state = {
    route: ''
  }

  componentWillReceiveProps({ location }) {
    this.setState(state => ({
      route: location.pathname
    }))
  }

  componentDidMount() {
    this.setState(state => ({
      route: this.props.location.pathname
    }))
  }
  
  render() {
    const { route } = this.state
    console.log('route state', route)
    return (
      <div id='nav-container'>
        <NavLink to='/' id='nav-home' className='nav-item'>
          <i className='fas fa-lg fa-home nav-item-icon' />
          <text className='nav-item-text'>
            Home
          </text>
        </NavLink>
        <NavLink to='/skills' className='nav-item'>
          <div>
            <i className='fas fa-lg fa-tasks nav-item-icon' />
            <span className='nav-item-text'>
              Skills
            </span>
          </div>
        </NavLink>
        <NavLink to='/projects' className='nav-item'>
          <i className='fas fa-lg fa-code nav-item-icon' />
          <text className='nav-item-text'>
            Projects
          </text>
        </NavLink>
        <NavLink to='/blog' className='nav-item'>
          <i className='fas fa-lg fa-newspaper nav-item-icon' />
          <text className='nav-item-text'>
            Blog
          </text>
        </NavLink>
        <NavLink to='/contact' className='nav-item'>
          <i className='fas fa-lg fa-user-plus nav-item-icon' />
          <text className='nav-item-text'>
            Contact
          </text>
        </NavLink>
      </div>
    )
  }
}

export default withRouter(NavMenu)
