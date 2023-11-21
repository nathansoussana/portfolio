import { projectData } from '../../data/projects'
import ButtonSecondary from '../components/ButtonSecondary'

const projects = projectData.map(project => {
  return (
    <div 
      className="project"
      key={project.title}
    >
      
      {/* Image */}
      <img 
        // src={project.image} 
        src="https://placehold.co/500x500"
        alt={project.title} 
        className="project-image"
      />

      {/* Content */}
      <div className="project-content">
        <h2 className="project-content-title">
          {project.title}
        </h2>
        <p className="project-content-text">
          {project.description}
        </p>
        <ButtonSecondary 
          text={project.buttonText} />
      </div>
    </div>
  )
})

export default function Projects() {
  return (
    <section className="projects-section">
      {/* <h2 className="projects-section-title">
        Projects
      </h2> */}
      {projects}
    </section>
  )
}