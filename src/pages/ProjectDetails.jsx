import { projects } from "../data/projects";
import { useParams } from "react-router-dom";
import { findProject } from "../utilities/findProject";
// import { hyphenateWords } from "../utilities/hyphenateWords";


const ProjectDetails = () => {
  
  const {projectDetails} = useParams()

  const project = findProject(projectDetails)

  console.log(project)
  


  
  return ( 
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt="" />
      <form action={project.repositoryLink}>
        <button>
          Github Repo
        </button>
      </form>
      <form action={project.repositoryLink}>
        <button>
          Deployment Link
        </button>
      </form>
    </>
  );
}

export default ProjectDetails;