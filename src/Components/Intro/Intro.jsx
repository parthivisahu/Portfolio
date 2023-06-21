import React from 'react';
import "./Intro.css";
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import vector3 from "../../img/vector3.png";
import crown from "../../img/crown.png";
import thumbup from "../../img/thumbup.png";
import glassesemoji from "../../img/glassesemoji.png";

import FloatingDiv from '../FloatingDiv/FloatingDiv';


function Intro() {
  
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi, I'm</span>
                <span>Parthivi Sahu</span>
                <span>Frontend Developer with a great experience in web designing and development, producing the Quality Work.</span>
            </div>
            
            <div className="i-icons">
              <a href='https://instagram.com/parthivi_sahu?igshid=ZDc4ODBmNjlmNQ==' className='i-a' >
            <FontAwesomeIcon icon={faInstagram} /> </a>
            <a href='https://github.com/parthivisahu' className='i-a'>
            <FontAwesomeIcon icon={faGithub} /> </a>
            <a href='https://www.linkedin.com/in/parthivi-sahu-065176206/' className='i-a'>
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            </div>
        </div>
        <div className="i-right">
        <img className='emoji' src={glassesemoji} alt=''/>
        <div className='crown'>
       
              <FloatingDiv  image={crown} txt1='Web' txt2='Developer' />
          </div>
            <img className='vector3' src={vector3} alt='img' />
          <div className="thumbs">
          <FloatingDiv image={thumbup} txt1='UI/UX' txt2='Developer' />
          </div>
        </div>
        <div className="blur1" style={{background: "rgb(238, 210, 255)"}}></div>
        <div className="blur" style={{background: "#C11F5FF" , top: "17rem", width: '21rem', height:'11rem'}}>

        </div>
    </div>
  )
}

export default Intro