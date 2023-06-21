import React from "react";
import "./Footer.css";
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="footer">
      <img src="" alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>parthivisahu2803@gmail.com</span>
        <div className="f-icons">
        <a href='https://instagram.com/parthivi_sahu?igshid=ZDc4ODBmNjlmNQ=='>
          <FontAwesomeIcon icon={faInstagram} color="white" size={"3rem"} />
          </a>
          <a href='https://github.com/parthivisahu'>
          <FontAwesomeIcon icon={faGithub}  color="white" size={"3rem"} />
          </a>
          <a href='https://www.linkedin.com/in/parthivi-sahu-065176206/'>
          <FontAwesomeIcon icon={faLinkedin}  color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;