import React, { Component } from 'react'

class SingleProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCollapsed: true
    }
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
        id='single-project-container'
        onClick={this.expandProject}
      >
        <h1 id='project-name'>{name}</h1>
        <h3 id='project-description'>{description}</h3>
        
        {isCollapsed
          ?
            <button
              className='expand-project-btn'
              onClick={this.expandProject}>
              {/* <i className='fa fas' /> */}
              \/ Expand \/
            </button>
          :
            ( 
              <div>
                <h5 id='project-features-title'>Features:</h5>
                <ul id='project-features-list'>
                  {features.map(feature => (
                    <li 
                      key={feature}
                      id='project-features-list-item'
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <h5 id='project-tech-title'>Technologies:</h5>
                <ul id='project-tech-list'>
                  {stack.map(tech => (
                    <li 
                      key={tech}
                      id='project-tech-list-item'  
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <h5 id='project-link-title'>Link:</h5>
                <p id='project-link-link'>{link}</p>
                <h5 id='project-repo-title'>Repository:</h5>
                <p id='project-repo-link'>{repo}</p>
                <button
                  className='expand-project-btn'
                  onClick={this.expandProject}>
                  {/* <i className='fa fas' /> */}
                  /\ Collapse /\
                </button>
              </div>
            )}
      </div>
    )
  }
}

export default SingleProject
