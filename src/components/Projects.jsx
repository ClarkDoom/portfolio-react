import ProjectList from "./ProjectList";
import { projects } from "../data/projects";


const Projects = () => {
  return (
    <div id='project-page'>
      <h1>Projects</h1>
      <ProjectList
        projects={projects}
      />
    </div>
  );
}

export default Projects;