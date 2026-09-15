import { useEffect } from 'react'
import {
    SiReact,
    SiJavascript,
    SiNodedotjs,
    SiDotnet,
    SiC,
    SiPython,
    SiUnity
} from 'react-icons/si'
import { FaCss3, FaJava, FaDatabase } from 'react-icons/fa'
import '../css/SkillGrid.css'

function SkillGrid(){
    useEffect(() => {
        const skillTags = document.querySelectorAll('.skill-tag')

        if (!('IntersectionObserver' in window)) {
            skillTags.forEach((tag) => tag.classList.add('is-visible'))
            return
        }

        const loadedTags = new Set()
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return

                entry.target.classList.add('is-visible')
                loadedTags.add(entry.target)
                observer.unobserve(entry.target)

                if (loadedTags.size === skillTags.length) {
                    skillTags.forEach((tag) => tag.style.removeProperty('--skill-delay'))
                }
            })
        }, { threshold: 0.2 })

        skillTags.forEach((tag, index) => {
            tag.style.setProperty('--skill-delay', `${index * 40}ms`)
            observer.observe(tag)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <div className="skill-grid">
            <span className="skill-tag skill-react"><SiReact />React</span>
            <span className="skill-tag skill-css"><FaCss3 />CSS</span>
            <span className="skill-tag skill-javascript"><SiJavascript />Javascript</span>
            <span className="skill-tag skill-csharp"><SiDotnet />C#</span>
            <span className="skill-tag skill-java"><FaJava />Java</span>
            <span className="skill-tag skill-node"><SiNodedotjs />Node.js</span>
            <span className="skill-tag skill-sql"><FaDatabase />SQL</span>
            <span className="skill-tag skill-c"><SiC />C</span>
            <span className="skill-tag skill-python"><SiPython />Python</span>
            <span className="skill-tag skill-unity"><SiUnity />Unity</span>
        </div>
    )
}

export default SkillGrid