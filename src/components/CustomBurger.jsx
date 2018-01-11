import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class CustomBurger extends Component {
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
      <div id='custom-burger-container'>
        <NavLink to='/' id='burger-home' className='burger-item'>
          <i className='fas fa-lg fa-home burger-item-icon' />
          <text className='burger-item-text'>
            Home
          </text>
        </NavLink>
        <NavLink to='/skills' className='burger-item'>
          <i className='fas fa-lg fa-tasks burger-item-icon' />
          <text className='burger-item-text'>
            Skills
          </text>
        </NavLink>
        <NavLink to='/projects' className='burger-item'>
          <i className='fas fa-lg fa-code burger-item-icon' />
          <text className='burger-item-text'>
            Projects
          </text>
        </NavLink>
        <NavLink to='/blog' className='burger-item'>
          <i className='fas fa-lg fa-newspaper burger-item-icon' />
          <text className='burger-item-text'>
            Blog
          </text>
        </NavLink>
        <NavLink to='/contact' className='burger-item'>
          <i className='fas fa-lg fa-user-plus burger-item-icon' />
          <text className='burger-item-text'>
            Contact
          </text>
        </NavLink>
      </div>
    )
  }
}

export default withRouter(CustomBurger)
