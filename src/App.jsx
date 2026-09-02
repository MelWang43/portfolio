import { useState } from 'react'
import './App.css'
import Project from './components/Project.jsx'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {FileText, Mail, MapPin, ArrowRight} from 'lucide-react'

function App() {

  function handleLinkButtonClick(url){
    window.open(url);
  }

  const tempProject = {id: 0, 
    name: "Checklist App", 
    description: "A simple checklist app built with React. Users can add, edit, and delete tasks, as well as mark them as complete. The app also features local storage to save tasks between sessions.", 
    image: "../public/Project_Checklist.png", 
    githubUrl: "https://github.com/MelWang43/React-Checklist-App",
    tags: ["React", "JavaScript", "CSS", "HTML"] }
  return (
    <>
      <header className="navbar">
      </header>
      <section className="about-me">
        <p>Software Engineer</p>
        <h1>Mel Wang</h1>
        <p>Driven developer, creating functional apps with real uses</p>

        <div className="contact-buttons">
          <button className="btn-social" onClick={() => handleLinkButtonClick("https://github.com/MelWang43")}><FaGithub size={24}/></button>
          <button className="btn-social" onClick={() => handleLinkButtonClick("https://www.linkedin.com/in/mel-wang-b0aa30322/")}><FaLinkedin size={24}/></button>
          <button className="btn-social" onClick={() => handleLinkButtonClick("mailto:mel.wang.050202@gmail.com")}><Mail size={24}/></button>
        </div>

        <p><MapPin/>Melbourne, Australia</p>
        <div className="contact-buttons">
          <button className="btn-accent" onClick={() => handleLinkButtonClick("https://drive.google.com/file/d/1AyyJrQgY_cpAKAsL-gauQ9I5p66n_1nK/view?usp=sharing")}><FileText/>Resume</button>
          <button className="btn-accent"><ArrowRight/>Contact Me</button>
        </div>
      </section>

      <section className="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
          <Project project={tempProject}/>
          <Project project={tempProject}/>
          <Project project={tempProject}/>
          <Project project={tempProject}/>
        </div>
      </section>
      <section className="skills">
        <h1>Skills</h1>
      </section>
      <section className="contact">
        <h1>Contact Me</h1>
      </section>
      
    </>
  )
}

export default App
