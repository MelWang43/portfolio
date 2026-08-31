import { useState } from 'react'
import './App.css'
import Project from './components/Project.jsx'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {FileText, Mail, MapPin, Phone} from 'lucide-react'

function App() {

  function handleLinkButtonClick(url){
    window.open(url);
  }
  return (
    <>
      <header className="navbar">
      </header>
      <section className="about-me">
        <h1>Mel Wang</h1>
        <h3>Software Engineer</h3>
        <p>Description about me and stuff goes here</p>

        <div className="contact-buttons">
          <button onClick={() => handleLinkButtonClick("https://github.com/MelWang43")}><FaGithub size={24}/></button>
          <button onClick={() => handleLinkButtonClick("https://www.linkedin.com/in/mel-wang-b0aa30322/")}><FaLinkedin size={24}/></button>
          <button onClick={() => handleLinkButtonClick("mailto:mel.wang.050202@gmail.com")}><Mail size={24}/></button>
        </div>

        <p><MapPin/>Melbourne, Victoria, Australia</p>

        <button onClick={() => handleLinkButtonClick("https://drive.google.com/file/d/1AyyJrQgY_cpAKAsL-gauQ9I5p66n_1nK/view?usp=sharing")}><FileText/>Resume</button>
        <button><Phone/>Contact Me</button>
      </section>

      <section className="projects">
        <h2>Projects</h2>
      </section>
      <section className="skills">
        <h2>Skills</h2>
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
      </section>

      
    </>
  )
}

export default App
