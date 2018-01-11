import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

class BurgerMenu extends Component {
  constructor(props) {
    super(props)
  }

  showSettings(evt) {
    evt.preventDefaut()
    console.log(`hit show settings`)
  }

  render() {
    return (
      <Menu>
        <Link to='/'>About</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
      </Menu>
    )
  }
}

export default BurgerMenu
