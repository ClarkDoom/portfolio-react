import { projects } from "../data/projects";
import ProjectList from "../components/ProjectList";



const Projects = () => {



  return ( 
      <ul>
        {projects.map(project =>
            <li key={project.title}>
              <ProjectList 
                project={project}
              />
            </li>
        )}
      </ul>
  );
}

export default Projects;