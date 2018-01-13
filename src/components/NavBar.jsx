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
    return (
      <div id='nav-container'>
        <Link to='/' id='nav-home'>
          <img src='e-icon.svg' id='nav-e-icon' />
          <p id='nav-home-text'>
            Home
          </p>
        </Link>
        <Link to='/skills' className='nav-item'>
          <i className='fas fa-fw fa-tasks nav-item-icon' />
          <p className='nav-item-text'>
            Skills
          </p>
        </Link>
        <Link to='/projects' className='nav-item'>
          <i className='fas fa-fw fa-code nav-item-icon' />
          <p className='nav-item-text'>
            Projects
          </p>
        </Link>
        <Link to='/blog' className='nav-item'>
          <i className='fas fa-fw fa-newspaper nav-item-icon' />
          <p className='nav-item-text'>
            Blog
          </p>
        </Link>
        <Link to='/contact' className='nav-item'>
          <i className='fas fa-fw fa-user-plus nav-item-icon' />
          <p className='nav-item-text'>
            Contact
          </p>
        </Link>
      </div>
    )
  }
}

export default NavBar
