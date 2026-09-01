function SkillGrid({skills}){
    return (
        <div className="skill-grid">
            <h2>{skills.subtitle}</h2>
            {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                    <img src={skill.image} alt={`${skill.name} Logo`} />
                    <h3>{skill.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default SkillGrid