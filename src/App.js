import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Services/Services';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';
import Certifications from './Components/Education/Certifications';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Services />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
   
  )
  
}


export default App