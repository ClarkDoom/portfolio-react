import { projects } from "../data/projects";

const Projects = () => {
  return ( 
    <>
      {projects.map((project)=> {
        {project.name}
      })}
    </>
  );
}

export default Projects;