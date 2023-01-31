import { projects } from "../data/projects";

const Projects = () => {
  return ( 
    <>
      <ul>
      {projects.map(project =>
          <li key={project.title}>{project.title}</li>
      )}
      </ul>
    </>
  );
}

export default Projects;