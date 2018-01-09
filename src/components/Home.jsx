import React from 'react'

const Home = () => (
  <main>
    <div className='bg'></div>
    <div className='parallax'>
      <div className='parallax-group'>
        <div className='layer'></div>
        <div className='layer'></div>
        <div className='layer'></div>
        <div className='layer'></div>
        <div className='layer'></div>
        <div className='layer fill'></div>
      </div>
      <div id='name-and-title' className='content'>
        <h1>Evan Reed</h1>
        <p>Fullstack Developer</p>
      </div>
      <div className='content'>
        <p id='mission-statement' className='ital'>I strive to contribute to creative and intellectual communities through the toolsets of Software Engineering & Design.</p>
      </div>
    </div>
  </main>
)

export default Home

  // < div id = 'grid-container' >
  //   <header></header>
  //   <nav></nav>
  //   <main></main>
  //   <footer></footer>
  // </div >  