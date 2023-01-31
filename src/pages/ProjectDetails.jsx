import { projects } from "../data/projects";
import { useParams } from "react-router-dom";
import { findProject } from "../utilities/findProject";
import { hyphenateWords } from "../utilities/hyphenateWords";


const ProjectDetails = () => {
  
  const {projectDetails} = useParams()

  const project = findProject(projectDetails)
  
  console.log("project title", project[0].title)

  
  return ( 
    <>
      <h1>{project[0].title}</h1>

      <p>{projects[0].description}</p>
      <img src={projects[0].image} alt="" />
      <form action={projects[0].repositoryLink}>
        <button>
          Github Repo
        </button>
      </form>
      <form action={projects[0].deploymentLink}>
        <button>
          Deployment Link
        </button>
      </form>
      
    </>
  );
}

export default ProjectDetails;