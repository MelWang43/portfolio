import { useEffect, useState } from 'react'
import './css/App.css'
import './css/ContactMe.css'
import Project from './components/Project.jsx'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {FileText, Mail, MapPin, ArrowRight} from 'lucide-react'
import SkillGrid from './components/SkillGrid.jsx'
import projects from './resources/projects.json'

function App() {
  
  function handleLinkButtonClick(url){
    window.open(url);
  }

  function ScrollTo(id, offset = 230){
    const target = document.getElementById(id)
    const navbar = document.querySelector('.navbar')

    if (!target) return

    const navbarHeight = navbar?.offsetHeight ?? 0
    const targetTop = target.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
      top: targetTop - navbarHeight + offset,
      behavior: 'smooth'
    })
  }

  const bio = "Hi, I'm Mel, I am a recent Computer Science graduate with hands-on experience across full-stack development, AI integration, and software engineering. Skilled in JavaScript, React, Node.js, Python, C#, and SQL, with a focus on building practical, maintainable solutions and continuously expanding my technical skills."

  return (
    <>
      <header className="navbar">
          <div className="nav-btn-container">
              <button className="btn-nav" onClick={() => ScrollTo('intro', 16)}>About Me</button>
              <button className="btn-nav" onClick={() => ScrollTo('projects')}>Projects</button>
              <button className="btn-nav" onClick={() => ScrollTo('skills')}>Skills</button>
              <button className="btn-nav" onClick={() => ScrollTo('contact')}>Contact</button>
          </div>
      </header>
      <section id="intro" className="about-me">
        <div className="about-content">
          <h1>Mel Wang</h1>
          <p style={{margin: '0rem 0 1.2rem 0', fontSize: '1rem'}}>Computer Science Graduate</p>
        

        

        <p style={{margin: '1.6rem 0', fontSize: '0.9rem'}}><MapPin style={{color: 'var(--accent-bright)'}} size={18}/> Melbourne, Australia</p>
        <p style={{margin: '1.6rem 0', fontSize: '1rem'}}>{bio}</p>
        
        <div className="contact-buttons">
          <button className="btn-social" onClick={() => handleLinkButtonClick("https://github.com/MelWang43")}><FaGithub size={24}/></button>
          <button className="btn-social" onClick={() => handleLinkButtonClick("https://www.linkedin.com/in/mel-wang-b0aa30322/")}><FaLinkedin size={24}/></button>
          <button className="btn-social" onClick={() => handleLinkButtonClick("mailto:mel.wang.050202@gmail.com")}><Mail size={24}/></button>
        </div>
        <div className="contact-buttons">
          <button className="btn-accent" onClick={() => handleLinkButtonClick("https://drive.google.com/file/d/1AyyJrQgY_cpAKAsL-gauQ9I5p66n_1nK/view?usp=sharing")}><FileText/>Resume</button>
          <button className="btn-accent" onClick={() => ScrollTo('contact')}><ArrowRight/>Contact Me</button>
        </div>
      </div>
      </section>

      <section id="projects" className="projects">
        <h1>Projects</h1>
        <div className="divider small"></div>
        <div className="projects-grid">
          {projects.map((project) => {
            return <Project project={project} key={project.id} index={project.id}/>;
          })}
          
        </div>
      </section>
      <section id="skills" className="skills">
        <h1>Skills</h1>
        <div className="divider small"></div>
        <SkillGrid/>
      </section>
      <section id="contact" className="contact">
        <h1>Contact Me</h1>
        <div className="divider small"></div>

        <div className="contact-text-container">
          <div className="contact-header-inputs">
            <input placeholder='Name'></input>
            <input placeholder='Email'></input>
          </div>
          <textarea placeholder='What can I do for you?'></textarea>
          <button className="btn-accent" style={{maxWidth: '50%'}}>Submit</button>
        </div>
        
      </section>
      <footer>
        <div className="contact-buttons">
          <button className="btn-social" onClick={() => handleLinkButtonClick("https://github.com/MelWang43")}><FaGithub size={24}/></button>
          <button className="btn-social" onClick={() => handleLinkButtonClick("https://www.linkedin.com/in/mel-wang-b0aa30322/")}><FaLinkedin size={24}/></button>
          <button className="btn-social" onClick={() => handleLinkButtonClick("mailto:mel.wang.050202@gmail.com")}><Mail size={24}/></button>
        </div>
        @ 2026 Mel Wang
      </footer>
    </>
  )
}

export default App
