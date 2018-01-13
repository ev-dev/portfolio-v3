import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/navbar'

class NavBar extends Component {
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
        <Link to='/' id='nav-home' className='nav-item'>
          <i className='fas fa-lg fa-home nav-item-icon' />
          <text className='nav-item-text'>
            Home
          </text>
        </Link>
        <Link to='/skills' className='nav-item'>
          <div>
            <i className='fas fa-lg fa-tasks nav-item-icon' />
            <span className='nav-item-text'>
              Skills
            </span>
          </div>
        </Link>
        <Link to='/projects' className='nav-item'>
          <i className='fas fa-lg fa-code nav-item-icon' />
          <text className='nav-item-text'>
            Projects
          </text>
        </Link>
        <Link to='/blog' className='nav-item'>
          <i className='fas fa-lg fa-newspaper nav-item-icon' />
          <text className='nav-item-text'>
            Blog
          </text>
        </Link>
        <Link to='/contact' className='nav-item'>
          <i className='fas fa-lg fa-user-plus nav-item-icon' />
          <text className='nav-item-text'>
            Contact
          </text>
        </Link>
      </div>
    )
  }
}

export default NavBar
