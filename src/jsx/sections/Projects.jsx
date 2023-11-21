import { projectData } from '../../data/projects'
import ButtonSecondary from '../components/ButtonSecondary'

function contentDirection(index) {
  return (index % 2 === 0) ? "ltr" : "rtl"
}

const projects = projectData.map((project, index) => {
  return (
    <div className="project" key={project.title} dir={contentDirection(index)}> 
      {/* Project Image */}
      <img src="src/assets/photo.jpeg" alt={project.title} className="project-image" />
      {/* Project Content */}
      <div className="project-content" dir='ltr'>
        <h2 className="project-content-title">{project.title}</h2>
        <p className="project-content-text">{project.description}</p>
        <ButtonSecondary text={project.buttonText} />
      </div>
    </div>
  )
})

export default function Projects() {
  return (
    <section className="projects-section">
      {/* <h2 className="projects-section-title">Projects</h2> */}
      {projects}
    </section>
  )
}