import React from 'react'

import '../styles/contact'

const Contact = () => (
  <div className='contact-container'>
    <div className='contact-title-container'>
      <span className='contact-title'>Connect</span>
    </div>
    <div className='social-container'>
      <a href='https://github.com/ev-dev' className='social-item'>
        <i className='fab fa-5x fa-github' />
      </a>
      <a href='https://linkedin.com/in/ev-dev' className='social-item'>
        <i className='fab fa-5x fa-linkedin' />
      </a>
      <a href='mailto:evan.reed1100@gmail.com' className='social-item'>
        <i className='fas fa-5x fa-envelope' />
      </a>
      <a href='./Evan_Reed_Resume.pdf' className='social-item'>
        <div id='resume-pdf'>
          <i className='fas fa-5x fa-file-alt' />
          <p id='resume-pdf-text'>Resume PDF</p>
        </div>
      </a>
    </div>
  </div>
)

export default Contact
