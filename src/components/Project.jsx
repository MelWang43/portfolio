import { Radio } from "lucide-react"
import {FaGithub} from "react-icons/fa"
import {useEffect, useState, useRef} from 'react'
import "../css/Project.css"
function Project({project, index}){
    const [hasLoaded, setHasLoaded] = useState(false);
    const ref = useRef(null)
    const [fadeInDelay, setFadeInDelay] = useState(index * 40);
    console.log(index, fadeInDelay)
    useEffect(() => {
        const element = ref.current;
        if(!element) return

        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                setHasLoaded(true);
                observer.disconnect();
            }
        })

        observer.observe(element);
        return () => observer.disconnect();
    }, [])

    function handleLinkButtonClick(url){
        window.open(url);
    }
    return (
        <>
            <div ref={ref} className={`project-card ${hasLoaded ? "" : "not-loaded"}`} style={{transition: `transform 0.5s ease ${fadeInDelay}ms, opacity 0.5s ease ${fadeInDelay}ms`}}>
                <img src={project.image} alt={`${project.name} Image`} className="project-image"></img>
                
                <div className="project-button-overlay">
                    {!project.demoURL ? <></> : <button className="btn-accent" onClick={() => handleLinkButtonClick(project.demoURL)}>
                        <Radio /> View Demo
                    </button>}
                    <button className="btn-accent" onClick={() => handleLinkButtonClick(project.githubUrl)}>
                        <FaGithub size={24} /> Code
                    </button>
                </div>

                <div className="project-info">
                    
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">
                        {project.tags && project.tags.map((tag, index) => (
                            <span key={index} className="project-tag">{tag}</span>
                        ))}
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Project