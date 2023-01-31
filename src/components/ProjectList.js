import { projects } from "../data/projects";

const ProjectList = ({project}) => {
  return ( 
    <>  
      <h4>{project.title}</h4>
      <h5>{project.description}</h5>
      <img width="20%"src={project.image} alt="" />
      <h5>{project.repositoryLink}</h5>
      <h5>{project.deploymentLink}</h5>
    </>
  );
}

export default ProjectList;

