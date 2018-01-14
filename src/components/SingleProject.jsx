import React, { Component } from 'react'

class SingleProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCollapsed: true
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error(error)
    console.error(errorInfo)
  }

  expandProject = () => {
    this.setState(state => ({
      isCollapsed: !this.state.isCollapsed
    }))
  }

  render() {
    const { isCollapsed } = this.state
    const { name, description, features, stack, link, repo } = this.props.project
    return (
      <div
        className='single-project-container'
        onClick={this.expandProject}
      >
        <h1 className='project-name'>{name}</h1>
        <h3 className='project-description'>{description}</h3>
        
        {isCollapsed
          ?
            (
              <div
                className='expand-project-btn'
                onClick={this.expandProject}
              >
                <h6 className='show-details-text'>Show Details</h6>
                <span className='arrow-icon-container'>
                  <i className='fas fa-lg fa-angle-double-down' />
                </span>
              </div>
            )
          :
            ( 
              <div className='extended-details-container'>
                <h5 className='project-detail-title'>Features:</h5>
                <ul className='project-detail-content project-features-list'>
                  {features.map(feature => (
                    <li 
                      key={feature}
                      className='project-features-list-item'
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <h5 className='project-detail-title'>Technologies:</h5>
                <ul className='project-detail-content project-tech-list'>
                  {stack.map(tech => (
                    <li 
                      key={tech}
                      className='project-tech-list-item'  
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className='link-container'>
                  <div>
                    <h5 className='project-detail-link-title'>Site:</h5>
                    <a href={link} className='project-detail-content-link'>{link}</a>
                  </div>
                  <div>
                    <h5 className='project-detail-link-title'>Repository:</h5>
                    <a href={repo} className='project-detail-content-link'>{repo}</a>
                  </div>
                </div>
                <div
                  className='expand-project-btn'
                  onClick={this.expandProject}
                >
                  <h6 className='show-details-text'>Collapse</h6>
                  <span className='arrow-icon-container'>
                    <i className='fas fa-lg fa-angle-double-up' />
                  </span>
                </div>
              </div>
            )}
      </div>
    )
  }
}

export default SingleProject
