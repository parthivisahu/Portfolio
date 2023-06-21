import React from 'react';
import "./Skills.css";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Skills = () => {
  return (
    <section id='skills'>
      <h5 className='h5'>What Skills I Have</h5>
      <h2 className='h2'>My Experience</h2>
      <br />
      <div className="experience_container">
        <div className="experience_frontend">
          <br/>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
          <article className="experience_details">
            <FontAwesomeIcon className="experience_details-icon" icon={faCheckCircle} />
              <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          
          <article className="experience_details">
            <FontAwesomeIcon className="experience_details-icon" icon={faCheckCircle} />
              <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          
          <article className="experience_details">
            <FontAwesomeIcon className="experience_details-icon" icon={faCheckCircle} />
              <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          <article className="experience_details">
            <FontAwesomeIcon className="experience_details-icon" icon={faCheckCircle} />
              <div>
            <h4>React JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          
          <article className="experience_details">
            <FontAwesomeIcon className="experience_details-icon" icon={faCheckCircle} />
              <div>
            <h4>BootStarp</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          
          <article className="experience_details">
            <FontAwesomeIcon className="experience_details-icon" icon={faCheckCircle} />
              <div>
            <h4>Tailwind CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            </div>
        </div>
        <div className="backend_experience">
          <br />
        <h3>Backend Development</h3>
        <div className='experience_content'>
          <article className="experience_details">
            <FontAwesomeIcon className="experience_details-icon" icon={faCheckCircle} />
              <div>
            <h4>Node JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          
          <article className="experience_details">
            <FontAwesomeIcon className="experience_details-icon" icon={faCheckCircle} />
              <div>
            <h4>Mongo DB</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          
          <article className="experience_details">
            <FontAwesomeIcon className="experience_details-icon" icon={faCheckCircle} />
              <div>
            <h4>Express JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          
          <article className="experience_details">
            <FontAwesomeIcon className="experience_details-icon" icon={faCheckCircle} />
              <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          
          <article className="experience_details">
            <FontAwesomeIcon className="experience_details-icon" icon={faCheckCircle} />
              <div>
            <h4>MySQL</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Skills