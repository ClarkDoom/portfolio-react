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
      <div id="project-details-and-link">
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      
        <div id='project-links'>
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
        </div>
      </div>

      <img src={project.image} alt="" />
      
    </>
  );
}

export default ProjectDetails;