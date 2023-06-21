import React from 'react'
import "./Services.css"
import Cards from '../Components/Cards/Cards'
import heart from "./../img/heart.png";
import glasses from "./../img/glasses.png";
import humble from "./../img/humble.png";
import resume from "./../Services/resume.pdf"
function Services() {
  return (
    <section id='about'>
    <div className="services">
        <div className="awesome">
        <span>About Me</span>
        <span>An aspiring Full-stack Developer</span>
        <span>I have been practicing Web Development for about 5-6 years.
        Experienced web developer with expertise in coding and design.
       Proficient in HTML, CSS, JavaScript, and PHP.
         Skilled in front-end and back-end frameworks including ReactJS and NodeJS. 
        Specializes in creating user-friendly websites with responsive designs.
        
        Along with that I enhance the beauty of websites thorugh UI/UX designs.</span>
        <a href={resume}><button className='button s-button'>Download CV</button>
        </a>
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        <div className="cards">
          <div style={{left:'10rem', top:"-8rem"}}>
            <Cards 
            emoji={heart}
            heading={'Design'}
            detail={"Figma, Krita, Adobe XD, Photoshop"}
            />
            </div>
            <div style={{top:'12rem',left:"-2rem"}}>
            <Cards
            emoji={glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
          </div>
          <div style={{top:"12rem",left:"20rem"}}>
           <Cards
            emoji={humble}
            heading={"CyberSecurity"}
            detail={
              "Cryptography, Blockchain, Virtual Machines, Ethical Hacking"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          </div>
          <div className="blur s-blur2"
          style={{ background: "#E6BCCD" }}
        ></div>
          </div>
        </div>
        </section>
  )
}

export default Services