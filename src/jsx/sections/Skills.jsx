import { skillsData } from '../../data/skills'

const skills = skillsData.map(skill => {
  return (
    <div className="skill">
      <div 
        className="skill-icon" 
        dangerouslySetInnerHTML={{ __html: skill.icon }}
      >
      </div>
      {/* <p className="skill-name">
        {skill.name}
      </p> */}
    </div>
  )
})

export default function Skills() {
  return (
    <section className="skills-section">
      {/* <h2 className="skills-title">
        Skills
      </h2> */}
      <div className="skills-list">
        {skills}
      </div>
    </section>
  )
}