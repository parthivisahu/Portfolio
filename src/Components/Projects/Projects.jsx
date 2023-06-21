import React from 'react'
import "./Projects.css"
import project1 from "../../img/project1.png"
import project2 from "../../img/project2.png"
import project3 from "../../img/project3.png"
import project4 from "../../img/project4.png"
import project5 from "../../img/project5.png"
import project6 from "../../img/project6.png"

const Projects = () => {
  return (
    <section id='projects'>
    <div className="project-container">
        <div className="project_card">
            <h4>My Recent Works</h4 >
            <br />
            <p> These are some of my projects showcasing my Web Development Skills.</p>
            <br/>
        </div>
        <div className="container portfolio_container">
          <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={project1} alt=''  style={{height:"250px", width:"350px"}}/>
            </div>
            <h3> E-commerce Website </h3>
            <p>This is a website made in Html, css and javascript. It was developed for meeting the needs of my client in order to sell their products with ease.</p>
              <div className="portfolio_item-cta">
            <a href="https://github.com/parthivisahu/ecommerce_demo_homepage" className="button" target='_blank'>Github</a>
            <a href="https://parthivisahu.github.io/ecommerce_demo_homepage/" className="button" target='_blank'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={project2} alt=''  style={{height:"250px", width:"350px"}} />
            </div>
            <h3> Jagrook Website</h3>
            <p>This is a website created to create awareness among the cleanliness workers about the schemes presented by the government to help them.</p>
              <div className="portfolio_item-cta">
            <a href="https://github.com/parthivisahu/Jagrook" className="button" target='_blank'>Github</a>
            <a href="https://parthivisahu.github.io/Jagrook/" className="button" target='_blank'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={project3} alt='' style={{height:"250px", width:"350px"}} />
            </div>
            <h3> Calculator WebApp</h3>
            <p> This calculator is designed to perform basic mathematical operations along with providing history. It can also be used in both light and dark mode. </p>
              <div className="portfolio_item-cta">
            <a href="https://github.com/parthivisahu/Calculator" className="button" target='_blank'>Github</a>
            <a href="https://parthivisahu.github.io/Calculator/" className="button" target='_blank'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={project4} alt='' style={{height:"250px", width:"350px"}}/>
            </div>
            <h3> Aruha Music WebApp</h3>
            <p>Aruha is a music player which is integrated with Spotify to get all your musical data and present it in aurorical form.</p>
              <div className="portfolio_item-cta">
            <a href="#/" className="button">Github</a>
            <a href="#/" className="button" >Live Demo</a>
            </div>
          </article>
          <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={project5} alt='' style={{height:"250px", width:"350px"}}/>
            </div>
            <h3> BootStrap Homepage</h3>
            <p>This webpage is designed using BootStrap for exploring various components present in it. It makes the website look clean.</p>
              <div className="portfolio_item-cta">
            <a href="https://github.com/parthivisahu/Bootstrap-task-6" className="button"target='_blank'>Github</a>
            <a href="https://parthivisahu.github.io/Bootstrap-task-6/" className="button" target='_blank'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={project6} alt='' style={{height:"250px", width:"350px"}}/>
            </div>
            <h3> Form Validation </h3>
            <p>Form Validation using BootStrap and Javascript provides great functionality to the forms built for providing Registration/ Login information.</p>
              <div className="portfolio_item-cta">
            <a href="https://github.com/parthivisahu/Bootstrap-task-3" className="button" target='_blank'>Github</a>
            <a href="https://parthivisahu.github.io/Bootstrap-task-3/" className="button" target='_blank'>Live Demo</a>
            </div>
          </article>
        </div>

        </div>
        </section>
    
  )
}

export default Projects;