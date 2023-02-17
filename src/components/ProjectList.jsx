import ProjectPreview from "./ProjectPreview";

const ProjectList = ({projects}) => {
  return ( 
      <>
        {projects.map(project => 
          <div id='project-card'>
            <ProjectPreview 
              title={project.title}
              image={project.image}
            />
          </div> 
        )}
      </>
  );
}

export default ProjectList;

