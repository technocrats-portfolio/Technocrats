import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-lg fixed-top" style={{background:'#fff'}}>
    <div class="container " style={{padding:'0.5rem'}} >
    <a class="navbar-brand fw-bold"  href='/'  >
                <img src="Images/technocrats-logo-01.png" alt='' height="50"/>
                {/* TECHNOCRATS */}
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
         
          <li class="nav-item">
          <a className='nav-link'   href="#about" role="button">About</a>
          </li>
          <li class="nav-item">
          <a className='nav-link'  href="#services" role="button">Services</a>
          </li>
          <li class="nav-item">
          <a className='nav-link'  href="#projects" role="button">Projects</a>
          </li>
          
          <li class="nav-item">
          <a className='nav-link'  href="#contact" role="button">Contact</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar