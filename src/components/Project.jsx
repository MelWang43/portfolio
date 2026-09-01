import { Radio } from "lucide-react"
import {FaGithub} from "react-icons/fa"
import "../css/Project.css"
function Project({project}){
    function handleLinkButtonClick(url){
        window.open(url);
    }
    return (
        <>
            <div className="project-card">
                <img src={project.image} alt={`${project.name} Image`} className="project-image"></img>
                
                <div className="project-button-overlay">
                    <button className="btn-accent" onClick={() => handleLinkButtonClick(project.liveUrl)}>
                        <Radio /> View Live
                    </button>
                    <button className="btn-accent" onClick={() => handleLinkButtonClick(project.githubUrl)}>
                        <FaGithub size={24} />
                    </button>
                </div>

                <div className="project-info">
                    <div className="project-tags">
                        {project.tags && project.tags.map((tag, index) => (
                            <span key={index} className="project-tag">{tag}</span>
                        ))}
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>


                    
                </div>
            </div>
        </>
    )
}

export default Project