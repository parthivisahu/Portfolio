import React from 'react'
import "./navbar.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Parthivi Sahu</div>
        
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul className='ul'>
            <li><a href="#/" alt=''>Home</a></li>
            <li><a href="#about" alt=''>About Me</a></li>
            <li><a href="#skills" alt=''>Skills</a></li>
            <li><a href="#projects" alt=''>Projects</a></li>
            <li><a href="#education" alt=''>Education</a></li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact Me</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar