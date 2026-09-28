import { useEffect, useState } from 'react'
import './css/App.css'
import './css/ContactMe.css'
import Project from './components/Project.jsx'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {FileText, Mail, MapPin, ArrowRight, Copy} from 'lucide-react'
import SkillGrid from './components/SkillGrid.jsx'
import CopyButton from './components/CopyButton.jsx'
import projects from './resources/projects.json'
import './css/tooltip.css'

function App() {
  const resumeURL = "https://drive.google.com/file/d/1AyyJrQgY_cpAKAsL-gauQ9I5p66n_1nK/view?usp=sharing"

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
              <button className="btn-nav" onClick={() => ScrollTo('intro', -232)}>About Me</button>
              <button className="btn-nav" onClick={() => ScrollTo('projects')}>Projects</button>
              <button className="btn-nav" onClick={() => ScrollTo('skills')}>Skills</button>
              <button className="btn-nav" onClick={() => ScrollTo('contact')}>Contact</button>
          </div>
      </header>
      <section id="intro" className="about-me">
        <div className="about-content">
          <h1 style={{fontFamily: 'Josefin Sans'}}>Mel Wang</h1>
          <p style={{margin: '0rem 0 1.2rem 0', fontSize: '1rem'}}>Computer Science Graduate</p>
        
        <p style={{margin: '1.6rem 0', fontSize: '0.9rem'}}><MapPin style={{color: 'var(--accent-bright)'}} size={18}/> Melbourne, Australia</p>
        <p style={{margin: '1.6rem 0', fontSize: '1rem'}}>{bio}</p>
        
        <div className="contact-buttons">
          <button className="btn-social tooltip" onClick={() => handleLinkButtonClick("https://github.com/MelWang43")}><FaGithub size={24}/><span className="tooltip-text">Github</span></button>
          <button className="btn-social tooltip" onClick={() => handleLinkButtonClick("https://www.linkedin.com/in/mel-wang-b0aa30322/")}><FaLinkedin size={24}/><span className="tooltip-text">LinkedIn</span></button>
          {/* <button className="btn-social tooltip" onClick={() => handleLinkButtonClick("mailto:mel.wang.050202@gmail.com")}><Mail size={24}/><span className="tooltip-text">Email Me</span></button> */}
          <button className="btn-social tooltip" onClick={() => handleLinkButtonClick(resumeURL)}><FileText size={24}/><span className="tooltip-text">Resume</span></button>
        </div>
        <div className="contact-buttons">
          {/* <button className="btn-accent" onClick={() => handleLinkButtonClick("https://drive.google.com/file/d/1AyyJrQgY_cpAKAsL-gauQ9I5p66n_1nK/view?usp=sharing")}><FileText/>Resume</button> */}
          <button className="btn-accent" onClick={() => ScrollTo('contact')}><ArrowRight/>Contact Me</button>
        </div>
      </div>
      </section>

      <section id="projects" className="projects">
        <h1 className='section-heading'>Projects</h1>
        <div className="divider small"></div>
        <div className="projects-grid">
          {projects.map((project) => {
            return <Project project={project} key={project.id} index={project.id}/>;
          })}
          
        </div>
      </section>
      <section id="skills" className="skills">
        <h1 className='section-heading'>Skills</h1>
        <div className="divider small"></div>
        <SkillGrid/>
      </section>
      <section id="contact" className="contact">
        <h1 className='section-heading'>Contact Me</h1>
        <div className="divider small"></div>

        <div className="contact-text-container">
          {/* <div className="contact-header-inputs">
            <input placeholder='Name'></input>
            <input placeholder='Email'></input>
          </div>
          <textarea placeholder='What can I do for you?'></textarea> */}
          <h2 style={{marginBottom: 0, marginTop: 0, color: 'var(--text)'}}>Let's get in touch</h2>
          <span style={{}}>What's on your mind? Let's have a chat</span>
          
          <button className="btn-accent" style={{maxWidth: '100%'}} onClick={() => handleLinkButtonClick("mailto:mel.wang.050202@gmail.com")}><Mail size={24}/>Send me an Email</button>
          <span>or</span>
          <div className="copiable-text">
            {/* <Mail size={24} style={{color: 'var(--accent-bright)', padding_right: "0.5rem"}}/> */}
            <span>mel.wang.050202@gmail.com</span>
            <CopyButton text="mel.wang.050202@gmail.com"/>
          </div>
        </div>
        
      </section>

      <footer>
        {/* <div className="contact-buttons">
          <button className="btn-social" onClick={() => handleLinkButtonClick("https://github.com/MelWang43")}><FaGithub size={24}/></button>
          <button className="btn-social" onClick={() => handleLinkButtonClick("https://www.linkedin.com/in/mel-wang-b0aa30322/")}><FaLinkedin size={24}/></button>
          <button className="btn-social tooltip" onClick={() => handleLinkButtonClick(resumeURL)}><FileText size={24}/><span className="tooltip-text">Resume</span></button>
        </div> */}
        <span>@ 2026 All rights reserved</span>
      </footer>
    </>
  )
}

export default App
