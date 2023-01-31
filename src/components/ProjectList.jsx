import { projects } from "../data/projects";
import ProjectPreview from "./ProjectPreview";

const ProjectList = ({project}) => {
  return ( 
    <>  
      <h4>
        <ProjectPreview title={project.title}/>
      </h4>
      
    </>
  );
}

export default ProjectList;

